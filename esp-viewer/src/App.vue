<template>
  <TheBimViewer></TheBimViewer>
</template>
<script setup>
import TheBimViewer from './components/TheBimViewer.vue'
/**
 * @param {Object} bimViewerFullDefaultConfig https://xeokit.github.io/xeokit-bim-viewer/docs/#viewer-configurations
 */
const bimViewerFullDefaultConfig = {
  backgroundColor: [1.0,1.0,1.0], 
  cameraNear: 0.05,
  cameraFar: 3000,
  smartPivot: true,
  saoEnabled: true,
  saoBias: 0.5, // [0.0...10.0] SAO bias
  saoIntensity: 100, // [0.0...200.0]
  saoScale: 500, // [0.0...1000.0]
  saoKernelRadius: 100, // [0.0...200.0]
  saoBlur: true,
  edgesEnabled: true,
  pbrEnabled: false, // Whether or not to enable Physically Based rendering (PBR). Improves rendering
  viewerFitFOV: 30, //Transition of animated fiitting object
  perspectoveFOV: 55, // [10.0...70.0] 	When in perspective projection, this is the field of view, in degrees, that the user sees
  objectColors: undefined, // A map of custom attributes for various IFC types Object
  externalMetadata: false, // 	Whether to load a metadata.json file with each geometry.xkt file
  xrayPickable: false, // Whether we can interact with X-rayed objects using mouse/touch input
  selectedGlowThrough: true, //светиться через другие элементы Whether selected objects appear to “glow through” other objects
  highlightGlowThrough: true, //Whether highlighted objects appear to “glow through” other objects
  dtxEnabled: false, // Упростить рендеринг Whether to enable xeokit's data texture-based (DTX) scene representation and rendering mode. This has a lower memory footprint than the standard vertex buffer object-based (VBO) mode, and loads fast, but may be slower on low-spec GPUs.
  showSpaces: false
}
</script>
<style scoped></style>
