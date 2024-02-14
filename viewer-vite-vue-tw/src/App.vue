<template>
  <div class="tw-h-full tw-w-full" id="viewerApp">
    
    <div  class="tw-z-50 tw-absolute tw-top-[50px] tw-left-[10px]">  
      <ul id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
        <li role="presentation">
          <button type="button" role="tab" data-tabs-target="#models" aria-controls="models" aria-selected="false"
            class="tw-bg-blue-200/30 tw-border tw-border-blue-200 tw-p-1 tw-border-solid tw-shadow-md hover:tw-bg-blue-400/30 tw-rounded-md text-transform: tw-uppercase tw-w-[100px] tw-m-1" id="models-tab">
            Модели
          </button>
        </li>
        <li role="presentation">
          <button type="button" role="tab" data-tabs-target="#objects" aria-controls="objects" aria-selected="false"
            class="tw-bg-blue-200/30 tw-border tw-border-blue-200 tw-p-1 tw-border-solid tw-shadow-md hover:tw-bg-blue-400/30 tw-rounded-md text-transform: tw-uppercase tw-w-[100px] tw-m-1" id="objects-tab">
            Объекты
          </button>
        </li>
        <li role="presentation">
          <button type="button" role="tab" data-tabs-target="#classes" aria-controls="classes" aria-selected="false"
            class="tw-bg-blue-200/30 tw-border tw-border-blue-200 tw-p-1 tw-border-solid tw-shadow-md hover:tw-bg-blue-400/30 tw-rounded-md text-transform: tw-uppercase tw-w-[100px] tw-m-1" id="classes-tab">
            Классы
          </button>
        </li>
        <li role="presentation">
          <button type="button" role="tab" data-tabs-target="#storeys" aria-controls="storeys" aria-selected="false"
            class="tw-bg-blue-200/30 tw-border tw-border-blue-200 tw-p-1 tw-border-solid tw-shadow-md hover:tw-bg-blue-400/30 tw-rounded-md text-transform: tw-uppercase tw-w-[100px] tw-m-1" id="storeys-tab">
            Уровни
          </button>
        </li>
        <li role="presentation">
          <button type="button" role="tab" data-tabs-target="#properties" aria-controls="properties" aria-selected="false"
            class="tw-bg-blue-200/30 tw-border tw-border-blue-200 tw-p-1 tw-border-solid tw-shadow-md hover:tw-bg-blue-400/30 tw-rounded-md text-transform: tw-uppercase tw-w-[100px] tw-m-1" id="properties-tab">
           Свойства
          </button>
        </li>
      </ul>
    </div>
    <div  id="default-tab-content" class="tw-z-50 tw-absolute tw-top-[50px] tw-left-[50px] tw-w-[400px] tw-m-1 ">
      <div role="tabpanel" aria-labelledby="models-tab" id="models"
        class="hidden absolute tw-left-20 tw-bg-blue-200/30 tw-w-full tw-h-fit-content tw-max-h-[calc(100vh-32px)] tw-overflow-auto tw-border-solid tw-border tw-border-blue-200 tw-shadow-md">
        <div class="xeokit-tab xeokit-modelsTab  tw-p-2">   
             <div class="xeokit-i18n xeokit-tab-btn tw-text-center tw-uppercase" data-xeokit-i18n="modelsExplorer.title "> Модели </div>
          <div class="xeokit-tab-content">
            <div class="xeokit-buttin-group tw-flex tw-justify-center">
              <button class="xeokit-loadAllModels tw-p-1 tw-m-1 tw-border-solid tw-border tw-border-blue-200">Показать все модели</button>
              <button class="xeokit-unloadAllModels tw-p-1 tw-border-solid tw-border">Скрыть все модели</button>
            </div>
            <div class="xeokit-tree-panel xeokit-models"></div>
          </div>
        </div>
      </div>
      <div role="tabpanel" aria-labelledby="objects-tab" id="objects"
        class="hidden absolute tw-left-20 tw-bg-blue-200/30 tw-w-full tw-h-fit-content tw-max-h-[calc(100vh-42px)] tw-overflow-auto tw-border-solid tw-border tw-border-blue-200 tw-shadow-md">
        <div class="xeokit-tab xeokit-objectsTab  tw-p-2">
          <div class="xeokit-i18n xeokit-tab-btn tw-text-center disabled tw-uppercase"  data-xeokit-i18n="objectsExplorer.title">Objects</div>
          <div class="xeokit-tab-content">
            <div class="xeokit-btn-group">
              <button type="button" class="xeokit-i18n xeokit-showAllObjects xeokit-btn disabled"
                data-xeokit-i18n="objectsExplorer.showAll" data-xeokit-i18ntip="objectsExplorer.showAllTip"
                data-tippy-content="Show all objects">
                Show all
              </button>
              <button type="button" class="xeokit-i18n xeokit-hideAllObjects xeokit-btn disabled"
                data-xeokit-i18n="objectsExplorer.hideAll" data-xeokit-i18ntip="objectsExplorer.hideAllTip"
                data-tippy-content="Hide all objects">
                Hide all
              </button>
            </div>
            <div class="xeokit-objects xeokit-tree-panel"></div>
          </div>
        </div>
      </div>
      <div role="tabpanel" aria-labelledby="classes-tab" id="classes"
        class="hidden absolute tw-left-20 tw-bg-blue-200/30 tw-w-full tw-h-fit-content tw-max-h-[calc(100vh-42px)] tw-overflow-auto tw-border-solid tw-border tw-border-blue-200 tw-shadow-md">
        <div class="xeokit-tab xeokit-classesTab  tw-p-2">
          <div class="xeokit-i18n xeokit-tab-btn tw-text-center disabled tw-uppercase"  data-xeokit-i18n="classesExplorer.title">Classes</div>
          <div class="xeokit-tab-content">
            <div class="xeokit-buttin-group">
              <button class="xeokit-showAllClasses">Показать все классы</button>
              <button class="xeokit-hideAllClasses">Скрыть все классы</button>
            </div>
            <div class="xeokit-tree-panel xeokit-classes"></div>
          </div>
        </div>
      </div>
      <div role="tabpanel" aria-labelledby="storeys-tab" id="storeys"
        class="hidden absolute tw-left-20 tw-bg-blue-200/30 tw-w-full tw-h-fit-content tw-max-h-[calc(100vh-42px)] tw-overflow-auto tw-border-solid tw-border tw-border-blue-200 tw-shadow-md">
        <div class="xeokit-tab xeokit-storeysTab  tw-p-2">
            <div class="xeokit-i18n xeokit-tab-btn tw-text-center disabled tw-uppercase "  data-xeokit-i18n="storeysExplorer.title">Storeys</div>
          <div class="xeokit-tab-content">
            <div class="xeokit-buttin-group">
              <button class="xeokit-showAllStoreys">Показать все уровни</button>
              <button class="xeokit-hideAllStoreys">Скрыть все уровни</button>
            </div>
            <div class="xeokit-tree-panel xeokit-storeys"></div>
          </div>
        </div>
      </div>
      <div role="tabpanel" aria-labelledby="properties-tab" id="properties"
        class="hhidden absolute tw-left-20 tw-bg-blue-200/30 tw-w-full tw-h-fit-content tw-max-h-[calc(100vh-42px)] tw-overflow-auto tw-border-solid tw-border tw-border-blue-200 tw-shadow-md">
        <div class="xeokit-tab xeokit-propertiesTab">
          <div  class="xeokit-i18n xeokit-tab-btn tw-uppercase tw-text-center" data-xeokit-i18n="propertiesInspector.title">
            Свойства </div>
          <div class="xeokit-tab-content"></div>
          <div class="xeokit-properties"></div>
        </div>
      </div>
    </div>
    <div v-show="false" id="myToolbar"
      class=" tw-absolute tw-bg-transparent tw-z-40 tw-justify-center tw-left-1/2 tw-transform tw--translate-x-1/2 tw-top-[30px]">
      <div class="xeokit-toolbar">
        <div class="xeokit-btn-group" role="group">
          <button type="button" class="xeokit-i18n xeokit-reset xeokit-btn fa fa-home fa-2x disabled"
            data-xeokit-i18ntip="toolbar.resetViewTip" data-tippy-content="Reset view"></button>
          <!-- 3D Mode button -->
          <button type="button" class="xeokit-i18n xeokit-threeD xeokit-btn fa fa-cube fa-2x disabled"
            data-xeokit-i18ntip="toolbar.toggle2d3dTip" data-tippy-content="Toggle 2D/3D"></button>
          <!-- Perspective/Ortho Mode button -->
          <button type="button" class="xeokit-i18n xeokit-ortho xeokit-btn fa fa-th fa-2x  disabled"
            data-xeokit-i18ntip="toolbar.togglePerspectiveTip" data-tippy-content="Toggle Perspective/Ortho"></button>
          <!-- Fit button -->
          <button type="button" class="xeokit-i18n xeokit-fit xeokit-btn fa fa-crop fa-2x disabled"
            data-xeokit-i18ntip="toolbar.viewFitTip" data-tippy-content="View fit"></button>
          <!-- First Person mode button -->
          <button type="button" class="xeokit-i18n xeokit-firstPerson xeokit-btn fa fa-male fa-2x disabled"
            data-xeokit-i18ntip="toolbar.firstPersonTip" data-tippy-content="Toggle first-person mode"></button>
          <!-- Show/hide IFCSpaces -->
          <button type="button" class="xeokit-i18n xeokit-showSpaces xeokit-btn fab fa-codepen fa-2x disabled"
            data-xeokit-i18ntip="toolbar.showSpacesTip" data-tippy-content="Show IFCSpaces"></button>
          <!-- Hide tool button -->
          <button type="button" class="xeokit-i18n xeokit-hide xeokit-btn fa fa-eraser fa-2x disabled"
            data-xeokit-i18ntip="toolbar.hideObjectsTip" data-tippy-content="Hide objects"></button>
          <!-- Select tool button -->
          <button type="button" class="xeokit-i18n xeokit-select xeokit-btn fa fa-mouse-pointer fa-2x disabled"
            data-xeokit-i18ntip="toolbar.selectObjectsTip" data-tippy-content="Select objects"></button>
          <!-- Marquee select tool button -->
          <button type="button" class="xeokit-i18n xeokit-marquee xeokit-btn fas fa-object-group fa-2x disabled"
            data-xeokit-i18ntip="toolbar.marqueeSelectTip"
            data-tippy-content="Marquee select objects"></button><!-- Measure distance tool button -->
          <button type="button" class="xeokit-i18n xeokit-measure-distance xeokit-btn fa fa-ruler fa-2x disabled"
            data-xeokit-i18ntip="toolbar.measureDistanceTip" data-tippy-content="Measure distance"></button>
          <!-- Measure angle tool button -->
          <button type="button" v-show="false"
            class="xeokit-i18n xeokit-measure-angle xeokit-btn fa fa-chevron-left fa-2x disabled"
            data-xeokit-i18ntip="toolbar.measureAngleTip" data-tippy-content="Measure angle"></button>
          <!-- section tool button -->
          <button type="button" v-show="false" class="xeokit-i18n xeokit-section xeokit-btn fa fa-cut fa-2x disabled"
            data-xeokit-i18ntip="toolbar.sliceObjectsTip" data-tippy-content="Slice objects">
            <div class="xeokit-i18n xeokit-section-menu-button disabled" data-xeokit-i18ntip="toolbar.slicesMenuTip"
              data-tippy-content="Slices menu">
              <span class="xeokit-arrow-down xeokit-section-menu-button-arrow"></span>
            </div>
            <div class="xeokit-i18n xeokit-section-counter" data-xeokit-i18ntip="toolbar.numSlicesTip"
              data-tippy-content="Number of existing slices"></div>
          </button>
        </div>
      </div>
    </div>
    <div id="myViewer" class="tw-h-full tw-w-full">
      <canvas id="myCanvas" class="tw-absolute tw-h-full tw-w-full tw-z-10"></canvas>
      <canvas id="myNavCubeCanvas" class="tw-absolute tw-right-0 tw-bottom-0 tw-z-50"></canvas>
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
    explorerElement: document.getElementById("default-tab-content"), // Left panel
    toolbarElement: document.getElementById("myToolbar"), // Toolbar
    inspectorElement: document.getElementById("default-tab-content"), // Right panel
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

  });

  bimViewer.on("openInspector", () => {
    
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
