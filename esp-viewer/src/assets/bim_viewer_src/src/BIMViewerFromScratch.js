import { Viewer } from '@xeokit/xeokit-sdk/dist/xeokit-sdk.es.js'

import { Controller } from './Controller'
import { ObjectsKdTree3 } from './collision/ObjectsKdTree3'

import { CanvasContextMenu } from './contextMenus/CanvasContextMenuModified'
import { ObjectContextMenu } from './contextMenus/ObjectContextMenuModified'
class BIMViewer extends Controller {
  constructor(server, cfg = {}) {
    if (!cfg.canvasElement) {
      throw `Не задан канвас-элемент вьюера  'canvasElement'`
    }

    if (!cfg.explorerElement) {
      throw `Не задан элемент эксплорера вьюера (браузера модели) 'explorerElement'`
    }

    if (!cfg.toolbarElement) {
      throw `Не задан элемент группы кнопок вьюера 'toolbarElement'`
    }

    if (!cfg.navCubeCanvasElement) {
      throw `Не задан канвас-элемент навигационного куба 'navCubeCanvasElement'`
    }

    const canvasElement = cfg.canvasElement
    const explorerElement = cfg.explorerElement
    const inspectorElement = cfg?.inspectorElement
    const toolbarElement = cfg.toolbarElement
    const navCubeCanvasElement = cfg.navCubeCanvasElement
    const busyModalBackdropElement = cfg?.busyModalBackdropElement

    explorerElement.oncontextmenu = (e) => {
      e.preventDefault()
    }
    toolbarElement.oncontextmenu = (e) => {
      e.preventDefault()
    }
    navCubeCanvasElement.oncontextmenu = (e) => {
      e.preventDefault()
    }

    const viewer = new Viewer({
      canvasElement: canvasElement,
      transparent: true,
      backgroundColor: [0.9, 0.9, 1],
      backgroundColorFromAmbientLight: false,
      saoEnabled: true,
      pbrEnabled: false,
      colorTextureEnabled: true,
      numCachedSectionPlanes: 3
    })

    super(null, cfg, server, viewer)

    this._configs = {}
    this._enableAddModels = false
    this._enableMeasurements = true
    this.viewer = viewer

    this._objectsKdTree3 = new ObjectsKdTree3({ viewer })

    // не забудь this._customizeViewer()
  }

  //get localeService() {} - удаляем


  //Этот класс вызывается в конструкторе
  _customizeViewer() {
    const scene = this.viewer.scene

    // Emphasis effects

    scene.xrayMaterial.fill = false
    scene.xrayMaterial.fillAlpha = 0.3
    scene.xrayMaterial.fillColor = [0, 0, 0]
    scene.xrayMaterial.edges = true
    scene.xrayMaterial.edgeAlpha = 0.1
    scene.xrayMaterial.edgeColor = [0, 0, 0]

    scene.highlightMaterial.edges = true
    scene.highlightMaterial.edgeColor = [1, 1, 1]
    scene.highlightMaterial.edgeAlpha = 1.0
    scene.highlightMaterial.fill = true
    scene.highlightMaterial.fillAlpha = 0.1
    scene.highlightMaterial.fillColor = [1, 0, 0]

    scene.selectedMaterial.edges = true
    scene.selectedMaterial.edgeColor = [1, 1, 1]
    scene.selectedMaterial.edgeAlpha = 1.0
    scene.selectedMaterial.fill = true
    scene.selectedMaterial.fillAlpha = 0.1
    scene.selectedMaterial.fillColor = [0, 1, 0]

    //------------------------------------------------------------------------------------------------------------------
    // Configure points material
    //------------------------------------------------------------------------------------------------------------------

    scene.pointsMaterial.pointSize = 1
    scene.pointsMaterial.roundPoints = true
    scene.pointsMaterial.perspectivePoints = true
    scene.pointsMaterial.minPerspectivePointSize = 2
    scene.pointsMaterial.maxPerspectivePointSize = 4

    // Camera control

    this.viewer.cameraControl.panRightClick = true
    this.viewer.cameraControl.followPointer = true
    this.viewer.cameraControl.doublePickFlyTo = false
    this.viewer.cameraControl.smartPivot = true

    // Dolly tweaks for best precision when aligning camera for BCF snapshots

    this.viewer.cameraControl.keyboardDollyRate = 100.0
    this.viewer.cameraControl.mouseWheelDollyRate = 100.0
    this.viewer.cameraControl.dollyInertia = 0
    this.viewer.cameraControl.dollyMinSpeed = 0.04
    this.viewer.cameraControl.dollyProximityThreshold = 30.0

    const cameraPivotElement = document
      .createRange()
      .createContextualFragment("<div class='xeokit-camera-pivot-marker'></div>").firstChild
    document.body.appendChild(cameraPivotElement)
    this.viewer.cameraControl.pivotElement = cameraPivotElement

    scene.camera.perspective.near = 0.01
    scene.camera.perspective.far = 3000.0
    scene.camera.ortho.near = 0.01
    scene.camera.ortho.far = 2000.0 //

    // Scalable Ambient Obscurance (SAO) defaults
    // Since SAO is non-interactive, set to higher-quality

    const sao = scene.sao
    sao.enabled = true
    sao.numSamples = 50
    sao.kernelRadius = 200
  }


  //доработать!
  _initCanvasContextMenu() {
    
    this._canvasContextMenu = new CanvasContextMenu(this, {
      hideOnAction: true,
      enableMeasurements: false
    })
    this._objectContextMenu = new ObjectContextMenu(this, {
      hideOnAction: true,
      enableMeasurements: false
    })

    this.viewer.cameraControl.on('rightClick', (e) => {
      const event = e.event
      const hit = this.viewer.scene.pick({ canvasPos: e.cavasPos})
      if (hit && hit.entity.isObject) {
        this._canvasContextMenu.hide()
        this._objectContextMenu.context = {
          viewer: this.viewer,
          bimViewer: this,
          showObjectInExplorers: (objectId) => {

          }
        }

      }

    })
  }

  _initConfigs() {
    this.setConfigs({
      cameraNear: '0.05',  // можно бы добавить в аргумент конструктора, но это внутренний метод 
      cameraFar: '3000.0', // можно бы добавить в аргумент конструктора, но это внутренний метод 
      smartPivot: true,
      saoEnabled: true,
      pbrEnabled: false,
      scaleCanvasResolution: false,
      saoBias: 0.5,
      saoIntensity: 0.15,
      saoNumSamples: 40,
      saoKernelRadius: 100,
      edgesEnabled: true,
      xrayContext: true,
      xrayPickable: false,
      selectedGlowThrough: true,
      highlightGlowThrough: true,
      backgroundColor: [1.0, 1.0, 1.0],
      externalMetadata: false,
      dtxEnabled: false
    })
  }

  setConfigs(viewerConfigs) {
    for (let name in viewerConfigs) {
      if (viewerConfigs.hasOwnProperty(name)) {
        const value = viewerConfigs[name]
        this.setConfig(name, value)
      }
    }
  }

  setConfig

}
