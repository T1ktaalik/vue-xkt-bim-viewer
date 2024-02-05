<template>
  <div class="tw-w-full tw-h-full">
    <button
      id="explorerSwitch"
      class="tw-z-40 tw-absolute tw-top-[50px]"
      v-bind="{ class: showExplorer ? 'tw-left-[350px]' : 'tw-left-[50px]' }"
      v-on:click="showExplorer = !showExplorer"
    >
      <KeyboardDoubleArrowLeftFilled
        v-if="showExplorer"
        class="tw-text-grey-600 hover:tw-text-blue-700 tw-w-[50px]"
      />
      <KeyboardDoubleArrowRightFilled
        v-else
        class="tw-text-grey-600 hover:tw-text-blue-700 tw-w-[50px]"
      />
    </button>
    <button
      id="inspectorSwitch"
      class="tw-z-40 tw-absolute tw-top-[50px]"
      v-bind="{ class: showInspector ? 'tw-right-[400px]' : 'tw-right-[50px]' }"
      v-on:click="showInspector = !showInspector"
    >
      <KeyboardDoubleArrowRightFilled
        v-if="showInspector"
        class="tw-text-grey-600 hover:tw-text-blue-700 tw-w-[50px]"
      />
      <KeyboardDoubleArrowLeftFilled
        v-else
        class="tw-text-grey-600 hover:tw-text-blue-700 tw-w-[50px]"
      />
    </button>
    <div
      id="viewerExplorer"
      class="tw-absolute tw-bg-orange-50/80 tw-w-[300px] tw-text-gray-600 tw-z-30 tw-h-screen tw-overflow-auto"
      ref="viewerExplorer"
      v-show="showExplorer"
    ></div>
    <div
      id="viewerInspector"
      v-show="showInspector"
      class="tw-absolute tw-right-0 tw-w-[350px] tw-h-screen tw-z-30 tw-bg-orange-50/80 tw-text-gray-600 tw-overflow-auto"
    ></div>
    <div id="viewerToolbar" v-show="false"></div>

    <div id="bimViewer" class="tw-z-10">
      <canvas
        id="viewerCanvas"
        class="tw-z-20 tw-h-screen tw-w-screen tw-overflow-hidden tw-absolute"
      ></canvas>
      <canvas id="navCubeCanvas" class="tw-z-20 tw-absolute tw-bottom-0 tw-right-[350px]"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import { Server, BIMViewer, LocaleService, messages } from '../assets/viewer_sources/index'
import {
  KeyboardDoubleArrowLeftFilled,
  KeyboardDoubleArrowRightFilled,
  KeyboardDoubleArrowLeftRound
} from '@vicons/material'

onMounted(() => {
  launchViewer()
})

const showExplorer = ref(true)
const showInspector = ref(true)

function launchViewer() {
  const projectId = 'Duplex'

  const server = new Server({
    dataDir: '/data'
  })

  const bimViewer = new BIMViewer(server, {
    localeService: new LocaleService({
      messages: messages,
      locale: 'ru'
    }),
    canvasElement: document.getElementById('viewerCanvas'), // WebGL canvas
    explorerElement: document.getElementById('viewerExplorer'), // Left panel
    toolbarElement: document.getElementById('viewerToolbar'), // Toolbar
    inspectorElement: document.getElementById('viewerInspector'), // Right panel
    navCubeCanvasElement: document.getElementById('navCubeCanvas'),
    busyModelBackdropElement: document.getElementById('bimViewer'),
    enableEditModels: false
  })

  bimViewer.localeService.on('updated', () => {
    const localizedElements = document.querySelectorAll('.xeokit-i18n')
    /*             localizedElements.forEach((localizedElement) => {
                if (localizedElement.dataset.xeokitI18n) {
                    localizedElement.innerText = bimViewer.localeService.translate(localizedElement.dataset.xeokitI18n);
                }
                if (localizedElement.dataset.xeokitI18ntip) {
                    const translation = bimViewer.localeService.translate(localizedElement.dataset.xeokitI18ntip);
                    if (translation) {
                        localizedElement.dataset.tippyContent = bimViewer.localeService.translate(localizedElement.dataset.xeokitI18ntip);
                    }
                }
                if (localizedElement.dataset.tippyContent) {
                    if (localizedElement._tippy) {
                        localizedElement._tippy.setContent(localizedElement.dataset.tippyContent);
                    } else {
                        tippy(localizedElement, {
                            appendTo: "parent",
                            zIndex: 1000000,
                            allowHTML: true
                        });
                    }
                }
            }); */
  })

  bimViewer.setConfigs({})

  bimViewer.on('openExplorer', () => {
    setExplorerOpen(true)
  })

  bimViewer.on('openInspector', () => {
    setInspectorOpen(true)
  })

  bimViewer.on('addModel', (event) => {
    // "Add" selected in Models tab's context menu
    console.log('addModel: ' + JSON.stringify(event, null, '\t'))
  })

  bimViewer.on('editModel', (event) => {
    // "Edit" selected in Models tab's context menu
    console.log('editModel: ' + JSON.stringify(event, null, '\t'))
  })

  bimViewer.on('deleteModel', (event) => {
    // "Delete" selected in Models tab's context menu
    console.log('deleteModel: ' + JSON.stringify(event, null, '\t'))
  })

  /*     const viewerConfigs = requestParams.configs;
        if (viewerConfigs) {
            const configNameVals = viewerConfigs.split(",");
            for (let i = 0, len = configNameVals.length; i < len; i++) {
                const configNameValStr = configNameVals[i];
                const configNameVal = configNameValStr.split(":");
                const configName = configNameVal[0];
                const configVal = configNameVal[1];
                bimViewer.setConfig(configName, configVal);
            }
        } */

  bimViewer.loadProject(
    projectId,
    () => {
      const modelId = requestParams.modelId
      if (modelId) {
        bimViewer.loadModel(modelId)
      }
      const tab = requestParams.tab
      if (tab) {
        bimViewer.openTab(tab)
      }
      watchHashParams()
    },
    (errorMsg) => {
      console.error(errorMsg)
    }
  )

  function watchHashParams() {
    let lastHash = ''
    window.setInterval(() => {
      const currentHash = window.location.hash
      if (currentHash !== lastHash) {
        parseHashParams()
        lastHash = currentHash
      }
    }, 400)
  }

  function parseHashParams() {
    const params = getHashParams()
    const actionsStr = params.actions
    if (!actionsStr) {
      return
    }
    const actions = actionsStr.split(',')
    if (actions.length === 0) {
      return
    }
    for (let i = 0, len = actions.length; i < len; i++) {
      const action = actions[i]
      switch (action) {
        case 'focusObject':
          const objectId = params.objectId
          if (!objectId) {
            console.error("Param expected for `focusObject` action: 'objectId'")
            break
          }
          bimViewer.setAllObjectsSelected(false)
          bimViewer.setObjectsSelected([objectId], true)
          bimViewer.flyToObject(objectId, () => {
            // FIXME: Showing objects in tabs involves scrolling the HTML within the tabs - disable until we know how to scroll the correct DOM element. Otherwise, that function works OK
            // bimViewer.showObjectInObjectsTab(objectId);
            // bimViewer.showObjectInClassesTab(objectId);
            // bimViewer.showObjectInStoreysTab(objectId);
          })
          break
        case 'focusObjects':
          const objectIds = params.objectIds
          if (!objectIds) {
            console.error("Param expected for `focusObjects` action: 'objectIds'")
            break
          }
          const objectIdArray = objectIds.split(',')
          bimViewer.setAllObjectsSelected(false)
          bimViewer.setObjectsSelected(objectIdArray, true)
          bimViewer.viewFitObjects(objectIdArray, () => {})
          break
        case 'clearFocusObjects':
          bimViewer.setAllObjectsSelected(false)
          bimViewer.viewFitAll()
          // TODO: view fit nothing?
          break
        case 'openTab':
          const tabId = params.tabId
          if (!tabId) {
            console.error("Param expected for `openTab` action: 'tabId'")
            break
          }
          bimViewer.openTab(tabId)
          break
        default:
          console.error("Action not supported: '" + action + "'")
          break
      }
    }
  }

  function setExplorerOpen(explorerOpen) {
    const toggle = document.getElementById('explorer_toggle')
    if (toggle) {
      toggle.checked = explorerOpen
    }
  }

  function setInspectorOpen(inspectorOpen) {
    const toggle = document.getElementById('inspector_toggle')
    if (toggle) {
      toggle.checked = inspectorOpen
    }
  }

  function getRequestParams() {
    const vars = {}
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
      vars[key] = value
    })
    return vars
  }

  function getHashParams() {
    const hashParams = {}
    let e
    const a = /\+/g // Regex for replacing addition symbol with a space
    const r = /([^&;=]+)=?([^&;]*)/g
    const d = function (s) {
      return decodeURIComponent(s.replace(a, ' '))
    }
    const q = window.location.hash.substring(1)
    while ((e = r.exec(q))) {
      hashParams[d(e[1])] = d(e[2])
    }
    return hashParams
  }
}
</script>
