import { VBOInstancingPointsRenderer } from './VBOInstancingPointsRenderer.js'

/**
 * @private
 */
class VBOInstancingPointsDepthRenderer extends VBOInstancingPointsRenderer {
  _getHash() {
    return this._scene._sectionPlanesState.getHash() + this._scene.pointsMaterial.hash
  }

  _buildVertexShader() {
    const scene = this._scene
    const sectionPlanesState = scene._sectionPlanesState
    const clipping = sectionPlanesState.getNumAllocatedSectionPlanes() > 0
    const pointsMaterial = scene.pointsMaterial._state
    const src = []
    src.push('#version 300 es')
    src.push('// Points instancing depth vertex shader')
    src.push('uniform int renderPass;')
    src.push('in vec3 position;')
    if (scene.entityOffsetsEnabled) {
      src.push('in vec3 offset;')
    }
    src.push('in float flags;')
    src.push('in vec4 modelMatrixCol0;')
    src.push('in vec4 modelMatrixCol1;')
    src.push('in vec4 modelMatrixCol2;')

    this._addMatricesUniformBlockLines(src)

    src.push('uniform float pointSize;')
    if (pointsMaterial.perspectivePoints) {
      src.push('uniform float nearPlaneHeight;')
    }

    if (scene.logarithmicDepthBufferEnabled) {
      src.push('uniform float logDepthBufFC;')
      src.push('out float vFragDepth;')
    }
    if (clipping) {
      src.push('out vec4 vWorldPosition;')
      src.push('out float vFlags;')
    }
    src.push('void main(void) {')

    // colorFlag = NOT_RENDERED | COLOR_OPAQUE | COLOR_TRANSPARENT
    // renderPass = COLOR_OPAQUE

    src.push(`int colorFlag = int(flags) & 0xF;`)
    src.push(`if (colorFlag != renderPass) {`)
    src.push('   gl_Position = vec4(0.0, 0.0, 0.0, 0.0);') // Cull vertex

    src.push('} else {')
    src.push('  vec4 worldPosition = positionsDecodeMatrix * vec4(position, 1.0); ')
    src.push(
      '  worldPosition = worldMatrix * vec4(dot(worldPosition, modelMatrixCol0), dot(worldPosition, modelMatrixCol1), dot(worldPosition, modelMatrixCol2), 1.0);'
    )
    if (scene.entityOffsetsEnabled) {
      src.push('      worldPosition.xyz = worldPosition.xyz + offset;')
    }
    src.push('  vec4 viewPosition  = viewMatrix * worldPosition; ')

    if (clipping) {
      src.push('vWorldPosition = worldPosition;')
      src.push('vFlags = flags;')
    }
    src.push('vec4 clipPos = projMatrix * viewPosition;')
    if (scene.logarithmicDepthBufferEnabled) {
      src.push('vFragDepth = 1.0 + clipPos.w;')
    }
    src.push('gl_Position = clipPos;')
    if (pointsMaterial.perspectivePoints) {
      src.push('gl_PointSize = (nearPlaneHeight * pointSize) / clipPos.w;')
      src.push(
        'gl_PointSize = max(gl_PointSize, ' +
          Math.floor(pointsMaterial.minPerspectivePointSize) +
          '.0);'
      )
      src.push(
        'gl_PointSize = min(gl_PointSize, ' +
          Math.floor(pointsMaterial.maxPerspectivePointSize) +
          '.0);'
      )
    } else {
      src.push('gl_PointSize = pointSize;')
    }
    src.push('}')
    src.push('}')
    return src
  }

  _buildFragmentShader() {
    const scene = this._scene
    const sectionPlanesState = scene._sectionPlanesState
    let i
    let len
    const clipping = sectionPlanesState.getNumAllocatedSectionPlanes() > 0
    const src = []
    src.push('#version 300 es')
    src.push('// Points instancing depth vertex shader')
    src.push('#ifdef GL_FRAGMENT_PRECISION_HIGH')
    src.push('precision highp float;')
    src.push('precision highp int;')
    src.push('#else')
    src.push('precision mediump float;')
    src.push('precision mediump int;')
    src.push('#endif')
    if (scene.logarithmicDepthBufferEnabled) {
      src.push('uniform float logDepthBufFC;')
      src.push('in float vFragDepth;')
    }
    if (clipping) {
      src.push('in vec4 vWorldPosition;')
      src.push('in float vFlags;')
      for (i = 0, len = sectionPlanesState.getNumAllocatedSectionPlanes(); i < len; i++) {
        src.push('uniform bool sectionPlaneActive' + i + ';')
        src.push('uniform vec3 sectionPlanePos' + i + ';')
        src.push('uniform vec3 sectionPlaneDir' + i + ';')
      }
    }

    src.push('const float   packUpScale = 256. / 255.;')
    src.push('const float   unpackDownscale = 255. / 256.;')
    src.push('const vec3    packFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );')
    src.push('const vec4    unpackFactors = unpackDownscale / vec4( packFactors, 1. );')
    src.push('const float   shiftRight8 = 1.0 / 256.;')

    src.push('vec4 packDepthToRGBA( const in float v ) {')
    src.push('    vec4 r = vec4( fract( v * packFactors ), v );')
    src.push('    r.yzw -= r.xyz * shiftRight8;')
    src.push('    return r * packUpScale;')
    src.push('}')

    src.push('out vec4 outColor;')
    src.push('void main(void) {')

    if (scene.pointsMaterial.roundPoints) {
      src.push('  vec2 cxy = 2.0 * gl_PointCoord - 1.0;')
      src.push('  float r = dot(cxy, cxy);')
      src.push('  if (r > 1.0) {')
      src.push('       discard;')
      src.push('  }')
    }

    if (clipping) {
      src.push('  bool clippable = (int(vFlags) >> 16 & 0xF) == 1;')
      src.push('  if (clippable) {')
      src.push('  float dist = 0.0;')
      for (i = 0, len = sectionPlanesState.getNumAllocatedSectionPlanes(); i < len; i++) {
        src.push('if (sectionPlaneActive' + i + ') {')
        src.push(
          '   dist += clamp(dot(-sectionPlaneDir' +
            i +
            '.xyz, vWorldPosition.xyz - sectionPlanePos' +
            i +
            '.xyz), 0.0, 1000.0);'
        )
        src.push('}')
      }
      src.push('if (dist > 0.0) { discard; }')
      src.push('}')
    }
    src.push('    outColor = packDepthToRGBA( gl_FragCoord.z); ') // Must be linear depth
    if (scene.logarithmicDepthBufferEnabled) {
      src.push('gl_FragDepth = log2( vFragDepth ) * logDepthBufFC * 0.5;')
    }
    src.push('}')
    return src
  }
}

export { VBOInstancingPointsDepthRenderer }
