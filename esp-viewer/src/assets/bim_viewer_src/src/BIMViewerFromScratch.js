import { Viewer }  from '@xeokit/xeokit-sdk/dist/xeokit-sdk.es.js'

import { Controller } from './Controller'
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

    if(!cfg.navCubeCanvasElement) {
      throw `Не задан канвас-элемент навигационного куба 'navCubeCanvasElement'`
    }

  }
}