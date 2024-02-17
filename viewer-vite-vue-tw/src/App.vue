<template>
  <div class="tw-h-full tw-w-full" id="viewerApp">
      <q-btn-group unelevated class=" tw-m-1 tw-flex tw-flex-row  tw-justify-between tw-w-[400px] tw-absolute tw-top-[20px] tw-left-[20px] tw-z-[40] tw-bg-blue-200/30 tw-border-solid tw-border tw-border-blue-200  tw-rounded-md">
        <q-btn class="tw-flex-auto" padding="xs" @click="activateTab('models')" >Модели</q-btn>
        <q-btn class="tw-flex-auto" padding="xs" @click="activateTab('objects')">Объекты</q-btn>
        <q-btn class="tw-flex-auto" padding="xs" @click="activateTab('classes')">Классы</q-btn>
        <q-btn class="tw-flex-auto" padding="xs" @click="activateTab('storeys')">Уровни</q-btn>
        <q-btn class="tw-flex-auto" padding="xs" @click="activateTab('properties')">Свойства</q-btn>
      </q-btn-group>
    <div
      id="explorer"
      class="tw-z-[40] tw-absolute tw-top-[80px] tw-left-[20px] tw-w-[400px] tw-m-1"
    >
      <div
        v-show="isTabPanelVisible.models"
        class="xeokit-tab xeokit-modelsTab  tw-p-1 tw-left-20 tw-bg-blue-200/30 tw-w-full tw-h-fit-content tw-max-h-[calc(100vh-100px)] tw-overflow-auto tw-border-solid tw-border tw-border-blue-200 tw-shadow-md tw-rounded-md"
      >
      <div class="tw-absolute tw-right-[0px] tw-top-0 "><q-btn @click="isTabPanelVisible.models=false" padding="xs" icon="close" flat size="md" ></q-btn></div>
        <div
          class="xeokit-i18n xeokit-tab-btn tw-text-center tw-uppercase"
          data-xeokit-i18n="modelsExplorer.title"
        >
          Models
        </div>
        <div class="xeokit-tab-content">
          <div class="xeokit-buttin-group tw-flex tw-justify-center">
            <button
              class="xeokit-loadAllModels tw-p-1 tw-m-1 tw-border-solid tw-border tw-border-blue-200 tw-uppercase tw-rounded-md"
            >
              Показать
            </button>
            <button
              class="xeokit-unloadAllModels tw-p-1 tw-m-1 tw-border-solid tw-border tw-border-blue-200 tw-uppercase tw-rounded-md"
            >
              Скрыть
            </button>
          </div>
          <div class="xeokit-tree-panel xeokit-models"></div>
        </div>
      </div>
      <div
        v-show="isTabPanelVisible.objects"
        class="xeokit-tab xeokit-objectsTab  tw-p-1  tw-left-20 tw-bg-blue-200/30 tw-w-full tw-h-fit-content tw-max-h-[calc(100vh-100px)] tw-overflow-auto tw-border-solid tw-border tw-border-blue-200 tw-shadow-md tw-rounded-md"
      >
      <div class="tw-absolute tw-right-[0px] tw-top-0 "><q-btn @click="isTabPanelVisible.objects=false" padding="xs" icon="close" flat size="md" ></q-btn></div>
        <div
          class="xeokit-i18n xeokit-tab-btn tw-text-center tw-uppercase"
          data-xeokit-i18n="objectsExplorer.title"
        >
          Objects
        </div>
        <div class="xeokit-tab-content">
          <div class="xeokit-btn-group tw-flex tw-justify-center">
            <button
              type="button"
              class="xeokit-showAllObjects xeokit-btn tw-p-1 tw-m-1 tw-border-solid tw-border tw-border-blue-200 tw-uppercase tw-rounded-md"
            >
              Показать
            </button>
            <button
              type="button"
              class="xeokit-hideAllObjects xeokit-btn disabled tw-p-1 tw-m-1 tw-border-solid tw-border tw-border-blue-200 tw-uppercase tw-rounded-md"
            >
              Скрыть
            </button>
          </div>
          <div class="xeokit-objects xeokit-tree-panel"></div>
        </div>
      </div>
      <div
        v-show="isTabPanelVisible.classes"
        class="xeokit-tab xeokit-classesTab  tw-p-1 tw-left-20 tw-bg-blue-200/30 tw-w-full tw-h-fit-content tw-max-h-[calc(100vh-100px)] tw-overflow-auto tw-border-solid tw-border tw-border-blue-200 tw-shadow-md tw-rounded-md"
      >
      <div class="tw-absolute tw-right-[0px] tw-top-0 "><q-btn @click="isTabPanelVisible.classes=false" padding="xs" icon="close" flat size="md" ></q-btn></div>
        <div
          class="xeokit-i18n xeokit-tab-btn tw-text-center disabled tw-uppercase"
          data-xeokit-i18n="classesExplorer.title"
        >
          Classes
        </div>
        <div class="xeokit-tab-content">
          <div class="xeokit-buttin-group tw-flex tw-justify-center">
            <button
              class="xeokit-showAllClasses tw-p-1 tw-m-1 tw-border-solid tw-border tw-border-blue-200 tw-uppercase tw-rounded-md"
            >
              Показать
            </button>
            <button
              class="xeokit-hideAllClasses tw-p-1 tw-m-1 tw-border-solid tw-border tw-border-blue-200 tw-uppercase tw-rounded-md"
            >
              Скрыть
            </button>
          </div>
          <div class="xeokit-tree-panel xeokit-classes"></div>
        </div>
      </div>
      <div
        v-show="isTabPanelVisible.storeys"
        class="xeokit-tab xeokit-storeysTab  tw-p-1 tw-left-20 tw-bg-blue-200/30 tw-w-full tw-h-fit-content tw-max-h-[calc(100vh-100px)] tw-overflow-auto tw-border-solid tw-border tw-border-blue-200 tw-shadow-md tw-rounded-md"
      >
      <div class="tw-absolute tw-right-[0px] tw-top-0 "><q-btn @click="isTabPanelVisible.storeys=false" padding="xs" icon="close" flat size="md" ></q-btn></div>
        <div
          class="xeokit-i18n xeokit-tab-btn tw-text-center disabled tw-uppercase "
          data-xeokit-i18n="storeysExplorer.title"
        >
          Storeys
        </div>
        <div class="xeokit-tab-content">
          <div class="xeokit-buttin-group tw-flex tw-justify-center">
            <button
              class="xeokit-showAllStoreys tw-p-1 tw-m-1 tw-border-solid tw-border tw-border-blue-200 tw-uppercase tw-rounded-md"
            >
              Показать
            </button>
            <button
              class="xeokit-hideAllStoreys tw-p-1 tw-m-1 tw-border-solid tw-border tw-border-blue-200 tw-uppercase tw-rounded-md"
            >
              Скрыть
            </button>
          </div>
          <div class="xeokit-tree-panel xeokit-storeys"></div>
        </div>
      </div>
      <div
        v-show="isTabPanelVisible.properties"
        class="xeokit-tab xeokit-propertiesTab tw-p-1 tw-left-20 tw-bg-blue-200/30 tw-w-full tw-h-fit-content tw-max-h-[calc(100vh-100px)] tw-overflow-auto tw-border-solid tw-border tw-border-blue-200 tw-shadow-md tw-rounded-md"
      >    
        <div class="tw-absolute tw-right-[0px] tw-top-0 "><q-btn @click="isTabPanelVisible.properties=false" padding="xs" icon="close" flat size="md" ></q-btn></div>
        <div class="xeokit-i18n xeokit-tab-btn tw-uppercase tw-text-center"        >
          Свойства
        </div>
        <div class="xeokit-tab-content"></div>
        <div class="xeokit-properties"></div>
      </div>   
    </div>
    <div
      v-show="true"
      id="myToolbar"
      class=" tw-absolute tw-bg-transparent tw-z-[40] tw-justify-center tw-left-1/2 tw-transform tw--translate-x-1/2 tw-top-[30px]"
    >
      <div class="xeokit-toolbar">
        <q-btn-group class="xeokit-btn-group tw-bg-blue-200/30 tw-text-gray-900 tw-border-solid tw-border tw-border-blue-200" flat role="group">
          <q-btn  icon="mdi-home" size="xl" padding="none xs" class="xeokit-reset"></q-btn>
          <q-btn icon="mdi-arrow-expand-all" size="xl" padding="none xs" class="xeokit-fit"></q-btn>
          <q-btn @click="is2dActive = !is2dActive" :icon="is2dActive ? 'mdi-video-2d' : 'mdi-video-3d'" size="xl" padding="none xs"
          class="xeokit-threeD"
          ></q-btn>
          <q-btn @click="isPerspectiveActive = !isPerspectiveActive" :icon="isPerspectiveActive ? 'mdi-perspective-less' : 'mdi-perspective-more'" size="xl" padding="none xs" class="xeokit-ortho"></q-btn>
          <q-btn icon="mdi-human-male" size="xl" padding="none xs" class="xeokit-firstPerson" ></q-btn>
          <q-btn icon="mdi-cube-outline" size="xl" padding="none xs" class="xeokit-showSpaces"></q-btn>
          <q-btn icon="mdi-eraser" size="xl" padding="none xs" class="xeokit-hide"></q-btn>
          <q-btn icon="mdi-cursor-default" size="xl" padding="none xs" class="xeokit-select"></q-btn>
          <q-btn icon="mdi-selection" size="xl" padding="none xs" class="xeokit-marquee"></q-btn>
          <q-btn icon="mdi-ruler" size="xl" padding="none xs" class="xeokit-measure-distance"></q-btn>
          <q-btn icon="mdi-angle-acute" size="xl" padding="none xs" class="xeokit-measure-angle" disable></q-btn>
          <q-btn icon="mdi-content-cut" size="xl" padding="none xs" class="xeokit-section"></q-btn>
          
            <q-btn size="xl" padding="none xs" class="xeokit-section-counter" disable></q-btn>
          <q-btn icon="mdi-menu-down"  size="xl" padding="none xs" class="xeokit-section-menu-button-arrow xeokit-section-menu-button xeokit-section-menu-button-arrow">
          </q-btn>
          <!-- @click="isMenuDownActive = !isMenuDownActive" :icon="isMenuDownActive ? 'mdi-menu-down' : 'mdi-menu-up'" -->
          
          
        </q-btn-group>


        <div class="xeokit-btn-group tw-absolute tw-top-[100px]" role="group">
          
          <!-- <button
            type="button"
            class="xeokit-i18n xeokit-reset xeokit-btn fa fa-home fa-2x disabled"
            data-xeokit-i18ntip="toolbar.resetViewTip"
            data-tippy-content="Reset view"
          ></button> -->
          <!-- 3D Mode button -->
          <button
            type="button"
            class="xeokit-i18n xeokit-threeD xeokit-btn fa fa-cube fa-2x disabled"
            data-xeokit-i18ntip="toolbar.toggle2d3dTip"
            data-tippy-content="Toggle 2D/3D"
          ></button>
          <!-- Perspective/Ortho Mode button -->
          <button
            type="button"
            class="xeokit-i18n xeokit-ortho xeokit-btn fa fa-th fa-2x  disabled"
            data-xeokit-i18ntip="toolbar.togglePerspectiveTip"
            data-tippy-content="Toggle Perspective/Ortho"
          ></button>
          <!-- Fit button -->
          <button
            type="button"
            class="xeokit-i18n xeokit-fit xeokit-btn fa fa-crop fa-2x disabled"
            data-xeokit-i18ntip="toolbar.viewFitTip"
            data-tippy-content="View fit"
          ></button>
          <!-- First Person mode button -->
          <button
            type="button"
            class="xeokit-i18n xeokit-firstPerson xeokit-btn fa fa-male fa-2x disabled"
            data-xeokit-i18ntip="toolbar.firstPersonTip"
            data-tippy-content="Toggle first-person mode"
          ></button>
          <!-- Show/hide IFCSpaces -->
          <button
            type="button"
            class="xeokit-i18n xeokit-showSpaces xeokit-btn fab fa-codepen fa-2x disabled"
            data-xeokit-i18ntip="toolbar.showSpacesTip"
            data-tippy-content="Show IFCSpaces"
          ></button>
          <!-- Hide tool button -->
          <button
            type="button"
            class="xeokit-i18n xeokit-hide xeokit-btn fa fa-eraser fa-2x disabled"
            data-xeokit-i18ntip="toolbar.hideObjectsTip"
            data-tippy-content="Hide objects"
          ></button>
          <!-- Select tool button -->
          <button
            type="button"
            class="xeokit-i18n xeokit-select xeokit-btn fa fa-mouse-pointer fa-2x disabled"
            data-xeokit-i18ntip="toolbar.selectObjectsTip"
            data-tippy-content="Select objects"
          ></button>
          <!-- Marquee select tool button -->
          <button
            type="button"
            class="xeokit-i18n xeokit-marquee xeokit-btn fas fa-object-group fa-2x disabled"
            data-xeokit-i18ntip="toolbar.marqueeSelectTip"
            data-tippy-content="Marquee select objects"
          ></button
          ><!-- Measure distance tool button -->
          <button
            type="button"
            class="xeokit-i18n xeokit-measure-distance xeokit-btn fa fa-ruler fa-2x disabled"
            data-xeokit-i18ntip="toolbar.measureDistanceTip"
            data-tippy-content="Measure distance"
          ></button>
          <!-- Measure angle tool button -->
          <button
            type="button"
            v-show="false"
            class="xeokit-i18n xeokit-measure-angle xeokit-btn fa fa-chevron-left fa-2x disabled"
            data-xeokit-i18ntip="toolbar.measureAngleTip"
            data-tippy-content="Measure angle"
          ></button>
          <!-- section tool button -->
          <button
            type="button"
            v-show="false"
            class="xeokit-i18n xeokit-section xeokit-btn fa fa-cut fa-2x disabled"
            data-xeokit-i18ntip="toolbar.sliceObjectsTip"
            data-tippy-content="Slice objects"
          >
            <div
              class="xeokit-i18n xeokit-section-menu-button disabled"
              data-xeokit-i18ntip="toolbar.slicesMenuTip"
              data-tippy-content="Slices menu"
            >
              <span
                class="xeokit-arrow-down xeokit-section-menu-button-arrow"
              ></span>
            </div>
            <div
              class="xeokit-i18n xeokit-section-counter"
              data-xeokit-i18ntip="toolbar.numSlicesTip"
              data-tippy-content="Number of existing slices"
            ></div>
          </button>
        </div>
      </div>
    </div>
    <div id="myViewer" class="tw-h-full tw-w-full">
      <canvas
        id="myCanvas"
        class="tw-absolute tw-h-full tw-w-full tw-z-[20]"
      ></canvas>
      <canvas
        id="myNavCubeCanvas"
        class="tw-absolute tw-right-0 tw-bottom-0 tw-z-[30]"
      ></canvas>
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

  const isTabPanelVisible= ref({ models: false, objects: false, classes: false, storeys: false, properties: false})
  function activateTab(tabPanel) {
    for (let key in isTabPanelVisible.value) {
      if (tabPanel === key) {
        isTabPanelVisible.value[key] =true
      } else {
        isTabPanelVisible.value[key] =false
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
      isTabPanelVisible.value.objects=true
      isTabPanelVisible.value.models=false
      isTabPanelVisible.value.classes=false
      isTabPanelVisible.value.storeys=false
      isTabPanelVisible.value.properties=false
    });

    bimViewer.on("openInspector", () => {
      isTabPanelVisible.value.objects=false
      isTabPanelVisible.value.models=false
      isTabPanelVisible.value.classes=false
      isTabPanelVisible.value.storeys=false
      isTabPanelVisible.value.properties=true
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
