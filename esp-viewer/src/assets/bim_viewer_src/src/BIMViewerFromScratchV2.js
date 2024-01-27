import { Viewer } from '@xeokit/xeokit-sdk/dist/xeokit-sdk.es.js'

import { Controller } from './Controller'
// Надо доработать этот элемент
import { BusyModal } from './BusyModalModified'

import { ModelsExplorer } from './explorer/ModelsExplorer'
import { ObjectsExplorer } from './explorer/ObjectsExplorer'
import { ClassesExplorer } from './explorer/ClassesExplorer.js'
import { StoreysExplorer } from './explorer/StoreysExplorer.js'
/**
 * @param {Server} реализует стратегию доступа к файлам модели. По умолчанию там xmlHttpRequest,полагаю, надо обновить решение.
 * @param {*} cfg Конфигурация
 * @param {*} [cfg.localeService]
 *
 */

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
    const inspectorElement = cfg.inspectorElement
    const toolbarElement = cfg.toolbarElement
    const navCubeCanvasElement = cfg.navCubeCanvasElement
    const busyModelBackdropElement = ''

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
      localService: cfg.localService,
      canvasElement: canvasElement
    })

    super(null, cfg, server, viewer)

    this._configs = {}
    this._enableAddModels = false
    this._enableMeasurements = false
    this._enablePropertiesInspector = false

    this.viewer = viewer

    this._explorerElement = explorerElement
    /* this._inspectorElement = inspectorElement */

    this._modelsExplorer = new ModelsExplorer(this, {
      enableMeasurements: this._enableMeasurements,
      modelsTabElement: undefined,
      loadModelsButtonElement: undefined,
      unloadModelsButtonElement: undefined,
      addModelButtonElement: undefined,
      modelsElement: undefined,
      enableEditModels: undefined
    })

    this._objectsExplorer = new ObjectsExplorer(this, {
      enableMeasurements: this._enableMeasurements,
      objectsTabElement: null,
      showAllObjectsButtonElement: undefined,
      hideAllObjectsButtonElement: undefined,
      objectsElement: undefined
    })
    this._classesExplorer = new ClassesExplorer(this, {
      enableMeasurements: this._enableMeasurements,
      classesTabElement: undefined,
      showAllClassesButtonElement: undefined,
      hideAllClassesButtonElement: undefined,
      classesElement: undefined
    })
    this._storeysExplorer = new StoreysExplorer(this, {
      enableMeasurements: this._enableMeasurements,
      storeysTabElement: undefined,
      showAllStoreysButtonElement: undefined,
      hideAllStoreysButtonElement: undefined,
      storeysElement: undefined
    })

    if (this.enablePropertiesInspector) {
      this._propertiesInspector = new PropertiesInspector(this, {
        propertiesTabElement: undefined,
        propertiesElement: undefined
      })
    } else {
      console.log('The properties inspector menu is disabled by a viewer configiration')
    }

    this._resetAction = {}

    this._fitAction = {}
  }

  // не забудь создать экземпляр просмотрщика
  get localeService() {
    console.log('this.viewer.localeService')
    console.log(this.viewer.localeService)
    return this.viewer.localeService
  }

  _customizeViewer() {}

  _initCanvasContextMenus() {}

  _initConfigs() {}

  setConfigs(viewerConfigs) {
    for (let name in viewerConfigs) {
      if (viewerConfigs.hasOwnProperty(name)) {
        const value = viewerConfigs[name]
        this.setConfig(name, value)
      }
    }
  }

  setConfig(name, value) {
    function parseBool(value) {
      return value === true || value === 'true'
    }

    try {
      switch (name) {
        case 'backgroundColor':
          const rgbColor = value
          this.setBackgroundColor(rgbColor)
          this._configs[name] = rgbColor
          break

        case 'cameraNear':
          const near = parseFloat(value)
          this.viewer.scene.camera.perspective.near = near
          this.viewer.scene.camera.ortho.near = near
          this._configs[name] = near
          break

        case 'cameraFar':
          const far = parseFloat(value)
          this.viewer.scene.camera.perspective.far = far
          // this.viewer.scene.camera.ortho.far = far;
          this._configs[name] = far
          break

        case 'smartPivot':
          this.viewer.cameraControl.smartPivot = this._configs[name] = parseBool(value)
          break

        case 'saoEnabled':
          this._fastNavPlugin.saoEnabled = this._configs[name] = parseBool(value)
          break

        case 'saoBias':
          this.viewer.scene.sao.bias = parseFloat(value)
          break

        case 'saoIntensity':
          this.viewer.scene.sao.intensity = parseFloat(value)
          break

        case 'saoKernelRadius':
          this.viewer.scene.sao.kernelRadius = this._configs[name] = parseFloat(value)
          break

        case 'saoNumSamples':
          this.viewer.scene.sao.numSamples = this._configs[name] = parseFloat(value)
          break

        case 'saoBlur':
          this.viewer.scene.sao.blur = this._configs[name] = parseBool(value)
          break

        case 'edgesEnabled':
          this._fastNavPlugin.edgesEnabled = this._configs[name] = parseBool(value)
          break

        case 'pbrEnabled':
          this._fastNavPlugin.pbrEnabled = this._configs[name] = parseBool(value)
          break

        case 'scaleCanvasResolution':
          this._fastNavPlugin.scaleCanvasResolution = this._configs[name] = parseBool(value)
          break

        case 'viewFitFOV':
          this.viewer.cameraFlight.fitFOV = this._configs[name] = parseFloat(value)
          break

        case 'viewFitDuration':
          this.viewer.cameraFlight.duration = this._configs[name] = parseFloat(value)
          break

        case 'perspectiveFOV':
          this.viewer.camera.perspective.fov = this._configs[name] = parseFloat(value)
          break

        case 'excludeUnclassifiedObjects':
          this._configs[name] = parseBool(value)
          break

        case 'xrayContext':
          this._configs[name] = value
          break

        case 'xrayPickable':
          this._configs[name] = parseBool(value)
          break

        case 'selectedGlowThrough':
          const selectedGlowThrough = (this._configs[name] = parseBool(value))
          const selectedMaterial = this.viewer.scene.selectedMaterial
          selectedMaterial.glowThrough = selectedGlowThrough
          selectedMaterial.fillAlpha = selectedGlowThrough ? 0.5 : 1.0
          selectedMaterial.edgeAlpha = selectedGlowThrough ? 0.5 : 1.0
          break

        case 'highlightGlowThrough':
          const highlightGlowThrough = (this._configs[name] = parseBool(value))
          const highlightMaterial = this.viewer.scene.highlightMaterial
          highlightMaterial.glowThrough = highlightGlowThrough
          highlightMaterial.fillAlpha = highlightGlowThrough ? 0.5 : 1.0
          highlightMaterial.edgeAlpha = highlightGlowThrough ? 0.5 : 1.0
          break

        case 'externalMetadata':
          this._configs[name] = parseBool(value)
          break

        case 'showSpaces':
          this._configs[name] = parseBool(value)
          this._showSpacesMode.setActive(value)
          break

        case 'dtxEnabled':
          this._configs[name] = parseBool(value)
          this.viewer.scene.dtxEnabled = value
          break

        case 'objectColors':
          this._configs[name] = value
          this._modelsExplorer.setObjectColors(value)
          break

        default:
          this.warn("setConfig() - unsupported configuration: '" + name + "'")
      }
    } catch (e) {
      this.error("setConfig() - Не удалось сконфигурировать опцию: '" + name + "': " + e)
    }
  }

  getConfig(name) {}

  getProjectsInfo(done, error) {}

  getProjectInfo(projectId, done, error) {}

  getObjectInfo(projectId, modelId, objectId, done, error) {}

  loadProject(projectId, done, error) {}

  unloadProject() {}

  getLoadedProjectId() {}

  getModelsId() {}

  loadModel(modelId, done, error) {}

  loadAllModels(done = function () {}) {}

  getLoadedModelsIds() {}

  isModelLoaded() {}

  unloadModel(modelId) {}

  unloadAllModels() {}

  editModel(modelId) {}

  deleteModel(modelId) {}

  addModel() {}

  setBackgroundColor(rgbColor) {}

  setObjectColorSource(source) {}

  getObjectColorSource() {}

  setViewerState(viewerState, done = () => {}) {}

  _parseSelectedStorey(viewerState, done) {}

  _parseThreeDMode(viewerState, done) {}

  showObjectInExplorers(objectId) {}

  unShowObjectInExplorer() {}

  showObjectProperties(objectId) {}

  setObjectVisible(objectIsds, visible) {}

  setAllObjectsVisible(visible) {}

  setObjectsXRayed(objectIds, xrayed) {}

  setAllObjectsXRayed(xrayed) {}

  setObjectsSelected(objectIds, selected) {}

  setAllObjectsSelected(selected) {}

  _withObjectsInSubtree(objectIds, callback) {}

  flyToObject(objectId, done) {}

  viewFitObjects(objectIds, done) {}

  viewFitAll(done) {}

  jumpToObject(objectId) {}

  setCamera(params) {}

  viewFitModels(modelsId, done) {}

  openTab(tabId) {}

  _openTab(element, tabSelector) {}

  getOpenTab() {}

  set3DEnabled(enabled, done) {}

  get3DEnabled() {}

  setSpacesShown(shown) {}

  getSpacesShown() {}

  setOrthoEnabled(enabled, done) {}

  getOrthoEnabled() {}

  selectStorey(storeyObjectId, done) {}

  saveBCFViewpoint(options) {}

  loadBCFViewpoint(bcfViewpoint, options) {}

  resetView() {}

  setControlsEnabled(enabled) {}

  setKeyboardEnabled(enabled) {}

  getKeyboardEnabled() {}

  clearSecttions() {}

  disableSections() {}

  enableSections() {}

  flipSections() {}

  hideSectionEditControl() {}

  getNumSections() {}

  getEnableMeasurements() {}

  clearMeasurements() {}

  getNumMeasurements() {}

  setMeasurementsAxisVisible(axisVisible) {}

  getMeasurementsAxisVisible() {}

  setMeasurementsSnappingEnabled(snappingEnabled) {}

  getMeasurementsSnappingEnabled() {}

  destroy() {}
}

export { BIMViewer }
