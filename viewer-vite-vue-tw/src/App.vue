<template>
  <div class="tw-h-full tw-w-full flex">
<!--     <input type="checkbox" id="explorer_toggle"/>
<label for="explorer_toggle" class="xeokit-i18n explorer_toggle_label xeokit-btn fas fa-2x fa-sitemap" data-xeokit-i18ntip="toolbar.toggleExplorer" data-tippy-content="Toggle explorer"></label>
<input type="checkbox" id="inspector_toggle"/>
<label id="inspector_toggle_label" for="inspector_toggle" class="xeokit-i18n inspector_toggle_label xeokit-btn fas fa-info-circle fa-2x" data-xeokit-i18ntip="toolbar.toggleProperties" data-tippy-content="Toggle properties"></label> -->
<div id="myExplorer" class="tw-absolute tw-left-0 tw-h-full tw-z-30 ">

</div>
<div id="myToolbar" class=" tw-absolute tw-bg-transparent tw-z-40 tw-justify-center tw-left-1/2 tw-transform tw--translate-x-1/2 tw-top-[30px]">

</div>
<div id="myInspector" class="tw-absolute tw-right-0 tw-w-48 tw-bg-red-600 tw-z-30">
<div class="xeokit-tabs">
    <div class="xeokit-tab xeokit-propertiesTab">
        <a href="#" disabled class="xeokit-i18n xeokit-tab-btn" data-xeokit-i18n="propertiesInspector.title"> Properties</a>
        <div class="xeokit-tab-content"></div>
        <div class="xeokit-properties"></div>
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
onMounted(() => {
  launchViewer();
});

const isExplorerOpen = ref(true)
const isInspectorOpen = ref(true)


function launchViewer() {
        const requestParams = {

        }
  
        const locale = "ru";
        const projectId = 'Duplex' ;

        if (!projectId) {
            return;
        }

       // const openExplorer = true;
        //setExplorerOpen(openExplorer === "true");

        

        const server = new Server({
            dataDir:  "/data"
        });

        const bimViewer = new BIMViewer(server, {
            localeService: new LocaleService({
                messages: localeMessages,
                locale: locale
            }),
            canvasElement: document.getElementById("myCanvas"), // WebGL canvas
            keyboardEventsElement: document, // Optional, defaults to document
            explorerElement: document.getElementById("myExplorer"), // Left panel
            toolbarElement: document.getElementById("myToolbar"), // Toolbar
            inspectorElement: document.getElementById("myInspector"), // Right panel
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
            //setExplorerOpen(true);
            isExplorerOpen.value = true
            
        });

        bimViewer.on("openInspector", () => {
            //setInspectorOpen(true);
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
/*         function setExplorerOpen(explorerOpen) {
            const toggle = document.getElementById("explorer_toggle");
            if (toggle) {
                toggle.checked = explorerOpen;
            }loadP
        }

        function setInspectorOpen(inspectorOpen) {
            const toggle = document.getElementById("inspector_toggle");
            if (toggle) {
                toggle.checked = inspectorOpen;
            }
        } */

      

        function getHashParams() {
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
        }
      }
</script>