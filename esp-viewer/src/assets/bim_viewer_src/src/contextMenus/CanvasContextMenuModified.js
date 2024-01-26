import { ContextMenu, math } from '@xeokit/xeokit-sdk/dist/xeokit-sdk.es.js'

/**
 * @private
 */
class CanvasContextMenu extends ContextMenu {
  constructor(bimViewer, cfg = {}) {
    super({
      hideOnAction: cfg.hideOnAction,
      context: cfg.context,
      items: [
        [
          {
            getTitle: (context) => {
              return (
                context.viewer.localeService.translate('canvasContextMenu.viewFitAll') ||
                'Фокус на весь объект'
                /* 'View Fit All' */
              )
            },
            doAction: (context) => {
              const viewer = context.viewer
              const scene = viewer.scene
              const sceneAABB = scene.getAABB(scene.visibleObjectIds)
              viewer.cameraFlight.flyTo({
                aabb: sceneAABB,
                duration: 0.5
              })
              viewer.cameraControl.pivotPos = math.getAABB3Center(sceneAABB)
            }
          },
          {
            getTitle: (context) => {
              return (
                context.viewer.localeService.translate('canvasContextMenu.viewFitSelection') ||
                'Фокус на выделенном объекте'
                /* 'View Fit Selected' */
              )
            },
            getEnabled: (context) => {
              return context.viewer.scene.numSelectedObjects > 0
            },
            doAction: (context) => {
              const viewer = context.viewer
              const scene = viewer.scene
              const sceneAABB = scene.getAABB(scene.selectedObjectIds)
              viewer.cameraFlight.flyTo({
                aabb: sceneAABB,
                duration: 0.5
              })
              viewer.cameraControl.pivotPos = math.getAABB3Center(sceneAABB)
            }
          }
        ],
        [
          {
            getTitle: (context) => {
              return (
                context.viewer.localeService.translate('canvasContextMenu.hideAll') ||
                'Скрыть все' /* 'Hide All' */
              )
            },
            getEnabled: (context) => {
              return context.viewer.scene.numVisibleObjects > 0
            },
            doAction: (context) => {
              context.viewer.scene.setObjectsVisible(context.viewer.scene.visibleObjectIds, false)
            }
          },
          {
            getTitle: (context) => {
              return (
                context.viewer.localeService.translate('canvasContextMenu.showAll') ||
                'Показать все' /* 'Show All' */
              )
            },
            getEnabled: (context) => {
              const scene = context.viewer.scene
              return (
                scene.numVisibleObjects < scene.numObjects ||
                context.viewer.scene.numXRayedObjects > 0
              )
            },
            doAction: (context) => {
              const scene = context.viewer.scene
              scene.setObjectsVisible(scene.objectIds, true)
              scene.setObjectsXRayed(scene.xrayedObjectIds, false)
            }
          }
        ],
        [
          {
            getTitle: (context) => {
              return (
                context.viewer.localeService.translate('canvasContextMenu.xRayAll') ||
                'Режим X-Ray для всего ' /* 'X-Ray All' */
              )
            },
            getEnabled: (context) => {
              const scene = context.viewer.scene
              return scene.numXRayedObjects < scene.numObjects
            },
            doAction: (context) => {
              const scene = context.viewer.scene
              scene.setObjectsVisible(scene.objectIds, true)
              scene.setObjectsXRayed(scene.objectIds, true)
              if (!context.bimViewer.getConfig('xrayPickable')) {
                scene.setObjectsPickable(scene.objectIds, false)
              }
            }
          },
          {
            getTitle: (context) => {
              return (
                context.viewer.localeService.translate('canvasContextMenu.xRayNone') ||
                'Отменить X-Ray' /* 'X-Ray None' */
              )
            },
            getEnabled: (context) => {
              return context.viewer.scene.numXRayedObjects > 0
            },
            doAction: (context) => {
              const xrayedObjectIds = context.viewer.scene.xrayedObjectIds
              context.viewer.scene.setObjectsPickable(xrayedObjectIds, true)
              context.viewer.scene.setObjectsXRayed(xrayedObjectIds, false)
            }
          }
        ],
        [
          {
            getTitle: (context) => {
              return (
                context.viewer.localeService.translate('canvasContextMenu.selectNone') ||
                'Отменить выделение'
                /* 'Select None' */
              )
            },
            getEnabled: (context) => {
              return context.viewer.scene.numSelectedObjects > 0
            },
            doAction: (context) => {
              context.viewer.scene.setObjectsSelected(context.viewer.scene.selectedObjectIds, false)
            }
          }
        ],
        [
          {
            getTitle: (context) => {
              return (
                context.viewer.localeService.translate('canvasContextMenu.resetView') ||
                'Сбросить вид' /*  'Reset View' */
              )
            },
            doAction: (context) => {
              context.bimViewer.resetView()
            }
          }
        ],
        [
          {
            getTitle: (context) => {
              return (
                context.viewer.localeService.translate('canvasContextMenu.clearSlices') ||
                'Удалить секущие плоскости'
                /* 'Clear Slices' */
              )
            },
            getEnabled: (context) => {
              return context.bimViewer.getNumSections() > 0
            },
            doAction: (context) => {
              context.bimViewer.clearSections()
            }
          }
        ],
        cfg.enableMeasurements
          ? [
              {
                // Item

                getTitle: (context) => {
                  return /* 'Measurements' */ 'Измерения'
                },

                doAction: function (context) {
                  // Does nothing
                },

                items: [
                  // Sub-menu
                  [
                    {
                      getTitle: (context) => {
                        return (
                          context.viewer.localeService.translate(
                            'canvasContextMenu.clearMeasurements'
                          ) || /* 'Clear' */ 'Очистить измерения'
                        )
                      },
                      getEnabled: (context) => {
                        return context.bimViewer.getNumMeasurements() > 0
                      },
                      doAction: (context) => {
                        context.bimViewer.clearMeasurements()
                      }
                    },
                    {
                      getTitle: (context) => {
                        return context.bimViewer.getMeasurementsAxisVisible()
                          ? context.viewer.localeService.translate(
                              'canvasContextMenu.hideMeasurementAxisWires'
                            ) || /* 'Hide Axis Wires' */ 'Скрыть оси'
                          : context.viewer.localeService.translate(
                              'canvasContextMenu.showMeasurementAxisWires'
                            ) || /* 'Show Axis Wires' */ 'Показать оси'
                      },
                      getEnabled: (context) => {
                        return context.bimViewer.getNumMeasurements() > 0
                      },
                      doAction: (context) => {
                        context.bimViewer.setMeasurementsAxisVisible(
                          !context.bimViewer.getMeasurementsAxisVisible()
                        )
                      }
                    },
                    {
                      getTitle: (context) => {
                        return context.bimViewer.getMeasurementsSnappingEnabled()
                          ? context.viewer.localeService.translate(
                              'canvasContextMenu.disableMeasurementSnapping'
                            ) || 'Disable Snapping'
                          : context.viewer.localeService.translate(
                              'canvasContextMenu.enableMeasurementSnapping'
                            ) || 'Enable Snapping'
                      },
                      getEnabled: (context) => {
                        return context.bimViewer.getNumMeasurements() > 0
                      },
                      doAction: (context) => {
                        context.bimViewer.setMeasurementsSnappingEnabled(
                          !context.bimViewer.getMeasurementsSnappingEnabled()
                        )
                      }
                    }
                  ]
                ]
              }
            ]
          : []
      ]
    })
  }
}

export { CanvasContextMenu }
