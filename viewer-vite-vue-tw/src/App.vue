<template>
  <div class="tw-h-full tw-w-full" id="viewerApp">
    <div id="ToolsTabs" class="tw-absolute tw-flex tw-w-[100vw]  tw-justify-between   ">
      <div id="myToolbar"  class="tw-z-40">
          <div class="xeokit-toolbar">
            <div
              class="xeokit-btn-group tw-bg-blue-200/30 tw-text-gray-900 tw-border-solid tw-border tw-border-blue-200 tw-flex tw-flex-col"
              t role="group">
              <q-btn flat icon="mdi-home" size="md" padding="xs xs" class="xeokit-reset"></q-btn>
              <q-btn flat icon="mdi-arrow-expand-all" size="md" padding="xs xs" class="xeokit-fit"></q-btn>
              <q-btn flat @click="is2dActive = !is2dActive" :icon="is2dActive ? 'mdi-video-2d' : 'mdi-video-3d'" size="md"
                padding="xs xs" class="xeokit-threeD"></q-btn>
              <q-btn flat @click="isPerspectiveActive = !isPerspectiveActive"
                :icon="isPerspectiveActive ? 'mdi-perspective-less' : 'mdi-perspective-more'" size="md" padding="xs xs"
                class="xeokit-ortho"></q-btn>
              <q-btn flat icon="mdi-human-male" size="md" padding="xs xs" class="xeokit-firstPerson"></q-btn>
              <q-btn flat icon="mdi-cube-outline" size="md" padding="xs xs" class="xeokit-showSpaces"></q-btn>
              <q-btn flat icon="mdi-eraser" size="md" padding="xs xs" class="xeokit-hide"></q-btn>
              <q-btn flat icon="mdi-cursor-default" size="md" padding="xs xs" class="xeokit-select"></q-btn>
              <q-btn flat icon="mdi-selection" size="md" padding="xs xs" class="xeokit-marquee"></q-btn>
              <q-btn flat icon="mdi-ruler" size="md" padding="xs xs" class="xeokit-measure-distance"></q-btn>
              <q-btn flat icon="mdi-angle-acute" size="md" padding="xs xs" class="xeokit-measure-angle" disable></q-btn>
              <q-btn flat icon="mdi-content-cut" size="md" padding="xs xs" class="xeokit-section" >
                <div class=" xeokit-section-menu-button ">
                  <q-icon name="mdi-menu-down"
                    class="xeokit-section-menu-button-arrow"></q-icon>
                </div>
                <div class="xeokit-section-counter"></div>
              </q-btn>
            </div>
          </div>
       
      </div>
      <div class="tw-z-40">
        <div
          class=" tw-flex tw-flex-col tw-grid-rows-5 tw-gap-1 sm:tw-flex-row  tw-justify-between    tw-bg-blue-200/30 tw-border-solid tw-border tw-border-blue-200  tw-rounded-md">
          <q-btn flat class="tw-flex-auto" padding="xs" @click="activateTab('models')">Модели</q-btn>
          <q-btn flat class="tw-flex-auto" padding="xs" @click="activateTab('objects')">Объекты</q-btn>
          <q-btn flat class="tw-flex-auto" padding="xs" @click="activateTab('classes')">Классы</q-btn>
          <q-btn flat class="tw-flex-auto" padding="xs" @click="activateTab('storeys')">Уровни</q-btn>
          <q-btn flat class="tw-flex-auto" padding="xs" @click="activateTab('properties')">Свойства</q-btn>
        </div>
        <div id="explorer">
          <div v-show="isTabPanelVisible.models"
            class="xeokit-tab xeokit-modelsTab  tw-p-1 tw-left-20 tw-bg-blue-200/30 tw-w-full tw-h-fit-content tw-max-h-[calc(100vh-100px)] tw-overflow-auto tw-border-solid tw-border tw-border-blue-200 tw-shadow-md tw-rounded-md">
            <div class="tw-justify-end tw-flex tw-flex-row"><q-btn @click="isTabPanelVisible.models = false"
                padding="xs" icon="close" flat size="md"></q-btn></div>
            <div class="xeokit-i18n xeokit-tab-btn tw-text-center tw-uppercase" data-xeokit-i18n="modelsExplorer.title">
              Models
            </div>
            <div class="xeokit-tab-content">
              <div class="xeokit-buttin-group tw-flex tw-justify-center">
                <button
                  class="xeokit-loadAllModels tw-p-1 tw-m-1 tw-border-solid tw-border tw-border-blue-200 tw-uppercase tw-rounded-md">
                  Показать
                </button>
                <button
                  class="xeokit-unloadAllModels tw-p-1 tw-m-1 tw-border-solid tw-border tw-border-blue-200 tw-uppercase tw-rounded-md">
                  Скрыть
                </button>
              </div>
              <div class="xeokit-tree-panel xeokit-models"></div>
            </div>
          </div>
          <div v-show="isTabPanelVisible.objects"
            class="xeokit-tab xeokit-objectsTab  tw-p-1  tw-left-20 tw-bg-blue-200/30 tw-w-full tw-h-fit-content tw-max-h-[calc(100vh-100px)] tw-overflow-auto tw-border-solid tw-border tw-border-blue-200 tw-shadow-md tw-rounded-md">
            <div class="tw-justify-end tw-flex tw-flex-row"><q-btn @click="isTabPanelVisible.objects = false"
                padding="xs" icon="close" flat size="md"></q-btn></div>
            <div class="xeokit-i18n xeokit-tab-btn tw-text-center tw-uppercase" data-xeokit-i18n="objectsExplorer.title">
              Objects
            </div>
            <div class="xeokit-tab-content">
              <div class="xeokit-btn-group tw-flex tw-justify-center">
                <button type="button"
                  class="xeokit-showAllObjects xeokit-btn tw-p-1 tw-m-1 tw-border-solid tw-border tw-border-blue-200 tw-uppercase tw-rounded-md">
                  Показать
                </button>
                <button type="button"
                  class="xeokit-hideAllObjects xeokit-btn disabled tw-p-1 tw-m-1 tw-border-solid tw-border tw-border-blue-200 tw-uppercase tw-rounded-md">
                  Скрыть
                </button>
              </div>
              <div class="xeokit-objects xeokit-tree-panel"></div>
            </div>
          </div>
          <div v-show="isTabPanelVisible.classes"
            class="xeokit-tab xeokit-classesTab  tw-p-1 tw-left-20 tw-bg-blue-200/30 tw-w-full tw-h-fit-content tw-max-h-[calc(100vh-100px)] tw-overflow-auto tw-border-solid tw-border tw-border-blue-200 tw-shadow-md tw-rounded-md">
            <div class="tw-justify-end tw-flex tw-flex-row"><q-btn @click="isTabPanelVisible.classes = false"
                padding="xs" icon="close" flat size="md"></q-btn></div>
            <div class="xeokit-i18n xeokit-tab-btn tw-text-center disabled tw-uppercase"
              data-xeokit-i18n="classesExplorer.title">
              Classes
            </div>
            <div class="xeokit-tab-content">
              <div class="xeokit-buttin-group tw-flex tw-justify-center">
                <button
                  class="xeokit-showAllClasses tw-p-1 tw-m-1 tw-border-solid tw-border tw-border-blue-200 tw-uppercase tw-rounded-md">
                  Показать
                </button>
                <button
                  class="xeokit-hideAllClasses tw-p-1 tw-m-1 tw-border-solid tw-border tw-border-blue-200 tw-uppercase tw-rounded-md">
                  Скрыть
                </button>
              </div>
              <div class="xeokit-tree-panel xeokit-classes"></div>
            </div>
          </div>
          <div v-show="isTabPanelVisible.storeys"
            class="xeokit-tab xeokit-storeysTab  tw-p-1 tw-left-20 tw-bg-blue-200/30 tw-w-full tw-h-fit-content tw-max-h-[calc(100vh-100px)] tw-overflow-auto tw-border-solid tw-border tw-border-blue-200 tw-shadow-md tw-rounded-md">
            <div class="tw-justify-end tw-flex tw-flex-row"><q-btn @click="isTabPanelVisible.storeys = false"
                padding="xs" icon="close" flat size="md"></q-btn></div>
            <div class="xeokit-i18n xeokit-tab-btn tw-text-center disabled tw-uppercase "
              data-xeokit-i18n="storeysExplorer.title">
              Storeys
            </div>
            <div class="xeokit-tab-content">
              <div class="xeokit-buttin-group tw-flex tw-justify-center">
                <button
                  class="xeokit-showAllStoreys tw-p-1 tw-m-1 tw-border-solid tw-border tw-border-blue-200 tw-uppercase tw-rounded-md">
                  Показать
                </button>
                <button
                  class="xeokit-hideAllStoreys tw-p-1 tw-m-1 tw-border-solid tw-border tw-border-blue-200 tw-uppercase tw-rounded-md">
                  Скрыть
                </button>
              </div>
              <div class="xeokit-tree-panel xeokit-storeys"></div>
            </div>
          </div>
          <div v-show="isTabPanelVisible.properties"
            class="xeokit-tab xeokit-propertiesTab  tw-bg-blue-200/30 tw-overflow-x-auto  tw-h-fit-content tw-max-h-[calc(100vh-100px)] tw-overflow-y-auto tw-border-solid tw-border tw-border-blue-200 tw-shadow-md tw-rounded-md">
            <div class="tw-justify-end tw-flex tw-flex-row"><q-btn @click="isTabPanelVisible.properties = false"
                padding="xs" icon="close" flat size="md"></q-btn></div>
            <div class="xeokit-i18n xeokit-tab-btn tw-uppercase tw-text-center">
              Свойства
            </div>
            <div class="xeokit-tab-content tw-text-wrap"></div>
            <div class="xeokit-properties tw-text-wrap"></div>
          </div>
        </div>
      </div>
    </div>











    <div id="myViewer" class="tw-h-full tw-w-full">
      <canvas id="myCanvas" class="tw-absolute tw-h-full tw-w-full tw-z-[20]"></canvas>
      <canvas id="myNavCubeCanvas" class="tw-absolute tw-right-0 tw-bottom-0 tw-z-[30]"></canvas>
    </div>

  </div>
</template>
<script setup>
import { createPopper } from '@popperjs/core';
import tippy from 'tippy.js'
import {
  Server,
  BIMViewer,
  LocaleService,
} from "./assets/bim-viewer-xkt-src/index";
import { ref, onMounted } from "vue";
import { messages as localeMessages } from "./assets/locales/messagesRu";
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite();
  launchViewer();
});

const isTabPanelVisible = ref({ models: false, objects: false, classes: false, storeys: false, properties: false })
function activateTab(tabPanel) {
  for (let key in isTabPanelVisible.value) {
    if (tabPanel === key) {
      isTabPanelVisible.value[key] = true
    } else {
      isTabPanelVisible.value[key] = false
    }
  }
}

const is2dActive = ref(true)
const isPerspectiveActive = ref(true)
const isMenuDownActive = ref(true)
function launchViewer() {
  const requestParams = {

  }

  const locale = "ru";
  const projectId = 'Duplex';

  if (!projectId) {
    return;
  }

  const server = new Server({
    dataDir: "/data"
  });

  const bimViewer = new BIMViewer(server, {
    localeService: new LocaleService({
      messages: localeMessages,
      locale: locale
    }),
    viewerApp: document.getElementById("viewerApp"), //it has been introduced ti simplify HTML selection
    canvasElement: document.getElementById("myCanvas"), // WebGL canvas
    keyboardEventsElement: document, // Optional, defaults to document
    explorerElement: document.getElementById("explorer"), // Left panel
    toolbarElement: document.getElementById("myToolbar"), // Toolbar
    inspectorElement: document.getElementById("explorer"), // Right panel
    navCubeCanvasElement: document.getElementById("myNavCubeCanvas"),
    busyModelBackdropElement: document.getElementById("myViewer"),
    enableEditModels: false
  });

  bimViewer.localeService.on("updated", () => {
    const localizedElements = document.querySelectorAll('.xeokit-i18n');
    localizedElements.forEach((localizedElement) => {
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
    });
  });

  bimViewer.setConfigs({
    "showSpaces": false, // Default
    "selectedGlowThrough": true,
    "highlightGlowThrough": true,
    "dtxEnabled": true // Enable data texture scene representation for models - may be slow on low-spec GPUs
  });

  bimViewer.on("openExplorer", () => {
    isTabPanelVisible.value.objects = true
    isTabPanelVisible.value.models = false
    isTabPanelVisible.value.classes = false
    isTabPanelVisible.value.storeys = false
    isTabPanelVisible.value.properties = false
  });

  bimViewer.on("openInspector", () => {
    isTabPanelVisible.value.objects = false
    isTabPanelVisible.value.models = false
    isTabPanelVisible.value.classes = false
    isTabPanelVisible.value.storeys = false
    isTabPanelVisible.value.properties = true
  });

  //bimViewer.on("addModel", (event) => { // "Add" selected in Models tab's context menu
  //    console.log("addModel: " + JSON.stringify(event, null, "\t"));
  //});

  //bimViewer.on("editModel", (event) => { // "Edit" selected in Models tab's context menu
  //    console.log("editModel: " + JSON.stringify(event, null, "\t"));
  //});

  //bimViewer.on("deleteModel", (event) => { // "Delete" selected in Models tab's context menu
  //    console.log("deleteModel: " + JSON.stringify(event, null, "\t"));
  //});

  /* const viewerConfigs = requestParams.configs;
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

  bimViewer.loadProject(projectId, () => {
    const modelId = requestParams.modelId;
    if (modelId) {
      bimViewer.loadModel(modelId);
    }
    const tab = requestParams.tab;
    if (tab) {
      bimViewer.openTab(tab);
    }
    /* watchHashParams(); */
  },
    (errorMsg) => {
      console.error(errorMsg);
    });

  /*         function watchHashParams() {
              let lastHash = "";
              window.setInterval(() => {
                  const currentHash = window.location.hash;
                  if (currentHash !== lastHash) {
                      parseHashParams();
                      lastHash = currentHash;
                  }
              }, 400);
          }

          function parseHashParams() {
              const params = getHashParams();
              const actionsStr = params.actions;
              if (!actionsStr) {
                  return;
              }
              const actions = actionsStr.split(",");
              if (actions.length === 0) {
                  return;
              }
              for (let i = 0, len = actions.length; i < len; i++) {
                  const action = actions[i];
                  switch (action) {
                      case "focusObject":
                          const objectId = params.objectId;
                          if (!objectId) {
                              console.error("Param expected for `focusObject` action: 'objectId'");
                              break;
                          }
                          bimViewer.setAllObjectsSelected(false);
                          bimViewer.setObjectsSelected([objectId], true);
                          bimViewer.flyToObject(objectId, () => {
                              // FIXME: Showing objects in tabs involves scrolling the HTML within the tabs - disable until we know how to scroll the correct DOM element. Otherwise, that function works OK

                              // bimViewer.showObjectInObjectsTab(objectId);
                              // bimViewer.showObjectInClassesTab(objectId);
                              // bimViewer.showObjectInStoreysTab(objectId);
                          });
                          break;
                      case "focusObjects":
                          const objectIds = params.objectIds;
                          if (!objectIds) {
                              console.error("Param expected for `focusObjects` action: 'objectIds'");
                              break;
                          }
                          const objectIdArray = objectIds.split(",");
                          bimViewer.setAllObjectsSelected(false);
                          bimViewer.setObjectsSelected(objectIdArray, true);
                          bimViewer.viewFitObjects(objectIdArray, () => {
                          });
                          break;
                      case "clearFocusObjects":
                          bimViewer.setAllObjectsSelected(false);
                          bimViewer.viewFitAll();
                          // TODO: view fit nothing?
                          break;
                      case "openTab":
                          const tabId = params.tabId;
                          if (!tabId) {
                              console.error("Param expected for `openTab` action: 'tabId'");
                              break;
                          }
                          bimViewer.openTab(tabId);
                          break;
                      default:
                          console.error("Action not supported: '" + action + "'");
                          break;
                  }
              }
          }
   */

  /* function getHashParams() {
      const hashParams = {};
      let e;
      const a = /\+/g;  // Regex for replacing addition symbol with a space
      const r = /([^&;=]+)=?([^&;]*)/g;
      const d = function (s) {
          return decodeURIComponent(s.replace(a, " "));
      };
      const q = window.location.hash.substring(1);
      while (e = r.exec(q)) {
          hashParams[d(e[1])] = d(e[2]);
      }
      return hashParams;
  } */
}
</script>
