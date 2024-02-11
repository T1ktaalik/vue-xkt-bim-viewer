<template>
  <div class="tw-h-full tw-w-full flex" id="viewerApp">

<!--     <q-tabs class="absolute z-max" v-model="explorerTab" vertical>
        <q-tab name="models"><q-icon  size="md" color="primary" name="list_alt"></q-icon></q-tab>
        <q-tab name="objects"><q-icon  size="md" color="primary" name="account_tree"></q-icon></q-tab>
        <q-tab name="classes"><q-icon  size="md" color="primary" name="class"></q-icon></q-tab>
        <q-tab name="storeys"><q-icon  size="md" color="primary" name="layers"></q-icon></q-tab>
        <q-tab name="properties"><q-icon  size="md" color="primary" name="perm_data_setting"></q-icon></q-tab>
    </q-tabs>
    <q-tab-panels keep-alive id="myExplorerInspector" v-model="explorerTab"  class="xeokit-tabs absolute z-max tw-left-[100px]">
        <q-tab-panel name="models" class="xeokit-tab xeokit-modelsTab">ъ
            <a
            class="xeokit-i18n xeokit-tab-btn"
            href="#"
            data-xeokit-i18n="modelsExplorer.title"
            >Models</a
          >
          <div class="xeokit-tab-content">
            <div class="xeokit-buttin-group">
              <button class="xeokit-loadAllModels">Показать все модели</button>
              <button class="xeokit-unloadAllModels">Скрыть все модели</button>
            </div>
            <div class="xeokit-tree-panel xeokit-models"></div>
          </div>
        </q-tab-panel>
        <q-tab-panel name="objects" class="xeokit-tab xeokit-objectsTab">
            <a
          class="xeokit-i18n xeokit-tab-btn disabled"
          href="#"
          data-xeokit-i18n="objectsExplorer.title"
          >Objects</a
        >
        <div class="xeokit-tab-content">
          <div class="xeokit-btn-group">
            <button
              type="button"
              class="xeokit-i18n xeokit-showAllObjects xeokit-btn disabled"
              data-xeokit-i18n="objectsExplorer.showAll"
              data-xeokit-i18ntip="objectsExplorer.showAllTip"
              data-tippy-content="Show all objects"
            >
              Show all
            </button>
            <button
              type="button"
              class="xeokit-i18n xeokit-hideAllObjects xeokit-btn disabled"
              data-xeokit-i18n="objectsExplorer.hideAll"
              data-xeokit-i18ntip="objectsExplorer.hideAllTip"
              data-tippy-content="Hide all objects"
            >
              Hide all
            </button>
          </div>
          <div class="xeokit-objects xeokit-tree-panel"></div>
        </div>
        </q-tab-panel>
        <q-tab-panel name="classes" class="xeokit-tab xeokit-classesTab">
            <a
          class="xeokit-i18n xeokit-tab-btn disabled"
          href="#"
          data-xeokit-i18n="classesExplorer.title"
          >Classes</a
        >
        <div class="xeokit-tab-content">
          <div class="xeokit-buttin-group">
            <button class="xeokit-showAllClasses">Показать все классы</button>
            <button class="xeokit-hideAllClasses">Скрыть все классы</button>
          </div>
          <div class="xeokit-tree-panel xeokit-classes"></div>
        </div>
        </q-tab-panel>
        <q-tab-panel name="storeys" class="xeokit-tab xeokit-storeysTab">
            <a
          class="xeokit-i18n xeokit-tab-btn disabled"
          href="#"
          data-xeokit-i18n="storeysExplorer.title"
          >Storeys</a
        >
        <div class="xeokit-tab-content">
          <div class="xeokit-buttin-group">
            <button class="xeokit-showAllStoreys">Показать все уровни</button>
            <button class="xeokit-hideAllStoreys">Скрыть все уровни</button>
          </div>
          <div class="xeokit-tree-panel xeokit-storeys"></div>
        </div>
        </q-tab-panel>
        <q-tab-panel name="properties" class="xeokit-tab xeokit-propertiesTab">
            <a
          href="#"
          disabled
          class="xeokit-i18n xeokit-tab-btn"
          data-xeokit-i18n="propertiesInspector.title"
        >
          Properties</a
        >
        <div class="xeokit-tab-content"></div>
        <div class="xeokit-properties"></div>
        </q-tab-panel>
    </q-tab-panels>  --> 
    
    <div>
      <ul>
        <li>Модели</li>
        <li>Объекты</li>
        <li>Классы</li>
        <li>Уровни</li>
        <li>Свойтва</li>
      </ul>
    </div>


    <div
    v-show="false"
      id="myToolbar"
      class=" tw-absolute tw-bg-transparent tw-z-40 tw-justify-center tw-left-1/2 tw-transform tw--translate-x-1/2 tw-top-[30px]"
    >
      <div class="xeokit-toolbar">
        <div class="xeokit-btn-group" role="group">
          <button
            type="button"
            class="xeokit-i18n xeokit-reset xeokit-btn fa fa-home fa-2x disabled"
            data-xeokit-i18ntip="toolbar.resetViewTip"
            data-tippy-content="Reset view"
          ></button>
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
        class="tw-absolute tw-h-full tw-w-full tw-z-10"
      ></canvas>
      <canvas
        id="myNavCubeCanvas"
        class="tw-absolute tw-right-0 tw-bottom-0 tw-z-50"
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
  onMounted(() => {
    explorerTab.value = 'models'
    explorerTab.value = 'objects'
    explorerTab.value = 'classes'
    explorerTab.value = 'storeys'
    explorerTab.value = 'properties'
      launchViewer();
  });

  const isExplorerOpen = ref(true)
  const isInspectorOpen = ref(true)
  const explorerTab=ref('models')

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
          explorerElement: document.getElementById("myExplorerInspector"), // Left panel
          toolbarElement: document.getElementById("myToolbar"), // Toolbar
          inspectorElement: document.getElementById("myExplorerInspector"), // Right panel
          navCubeCanvasElement: document.getElementById("myNavCubeCanvas"),
          busyModelBackdropElement: document.getElementById("myViewer"),
          enableEditModels: false
      });

      /*         bimViewer.localeService.on("updated", () => {
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
              }); */

      //bimViewer.setConfigs({
      //    "showSpaces": false, // Default
      //    "selectedGlowThrough": true,
      //    "highlightGlowThrough": true,
      //    "dtxEnabled": true // Enable data texture scene representation for models - may be slow on low-spec GPUs
      // });

      bimViewer.on("openExplorer", () => {

          isExplorerOpen.value = true
      });

      bimViewer.on("openInspector", () => {
          isInspectorOpen.value = true
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
