<template>
<div>
  <input v-show="false" type="checkbox" id="explorer_toggle"/>
<label v-show="false" for="explorer_toggle" class="xeokit-i18n explorer_toggle_label xeokit-btn fas fa-2x fa-sitemap" data-xeokit-i18ntip="toolbar.toggleExplorer" data-tippy-content="Toggle explorer"></label>
<input v-show="false" type="checkbox" id="inspector_toggle"/>
<label v-show="false" id="inspector_toggle_label" for="inspector_toggle" class="xeokit-i18n inspector_toggle_label xeokit-btn fas fa-info-circle fa-2x" data-xeokit-i18ntip="toolbar.toggleProperties" data-tippy-content="Toggle properties"></label>
<div v-show="false" id="myExplorer"></div>
<div v-show="false" id="myToolbar"></div>
<div v-show="false" id="myInspector"></div>
<!-- Forte banner start -->
<div class="absolute z-[40] mt-5 top-0 left-1/2 transform -translate-x-1/2 bg-opacity-80 bg-white p-3 rounded-md border border-gray-200"><!--  tw-top-1/2 tw-left-1/2 tw-transform -translate-x-1/2 -translate-y-1/2 -->
<div>
    <h1 class="text-3xl text-red-700 m-1" >Forte Logistics</h1> 
<h2 class="text-lg uppercase m-2">3PL логистический провайдер</h2> 
<h3 class="text-md uppercase m-1">Комплексные складские и транспортные услуги на юге России</h3> 

</div>
<!-- radio button group start -->
<fieldset class="flex flex-wrap gap-1 z-[40] mt-5">
  <legend class="sr-only">Color</legend>

  <div class="w-[180px]" id="mainView">
    <label
      for="ColorBlack"
      class="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-1 py-1 text-red-700 hover:border-gray-200 has-[:checked]:border-red-700 has-[:checked]:bg-red-700/80 has-[:checked]:text-white"
    >
      <input
        type="radio"
        name="ColorOption"
        value="ColorBlack"
        id="ColorBlack"
        class="sr-only"
        checked
      />

      <p class="text-sm font-normal uppercase" >Площадь 12 тыс. м2</p>
    </label>
  </div>

  <div class="w-[180px]" id="wareHouseRoom">
    <label
      for="ColorRed"
      class="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-1 py-1 text-red-700 hover:border-gray-200 has-[:checked]:border-red-700 has-[:checked]:bg-red-700/80 has-[:checked]:text-white"
    >
      <input type="radio" name="ColorOption" value="ColorRed" id="ColorRed" class="sr-only" />

      <p class="text-sm font-normal uppercase" >30 тыс. палетомест</p>
    </label>
  </div>

  <div class="w-[180px]" id="storeLevels">
    <label
      for="ColorBlue"
      class="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-1 py-1 text-red-700 hover:border-gray-200 has-[:checked]:border-red-700 has-[:checked]:bg-red-700/80 has-[:checked]:text-white"
    >
      <input type="radio" name="ColorOption" value="ColorBlue" id="ColorBlue" class="sr-only" />
      <p class="text-sm font-normal uppercase" >8 уровней хранения</p>
    </label>
  </div>

  <div class="w-[180px]" id="dockShelters">
    <label
      for="ColorGold"
      class="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-1 py-1 text-red-700 hover:border-gray-200 has-[:checked]:border-red-700 has-[:checked]:bg-red-700/80 has-[:checked]:text-white"
    >
      <input type="radio" name="ColorOption" value="ColorGold" id="ColorGold" class="sr-only" />

      <p class="text-sm font-normal uppercase" >Погрузочные рампы</p>
    </label>
  </div>
</fieldset>
<!-- radio button group end -->

</div>
<!-- Forte banner end-->


<div id="myViewer" class="absolute h-screen w-screen top-0 left-0 bg-red-200 overflow-hidden ">
    <canvas id="myCanvas" class=" h-full w-full z-[20]"></canvas>
    <canvas id="myNavCubeCanvas" class="absolute bottom-0 right-0 z-[30]"></canvas>
</div>
</div>
</template>
<script setup>
import { onMounted } from "vue";
import {Server, BIMViewer, LocaleService} from "./assets/dist-xkt-bim-viewer/xeokit-bim-viewerM2.es.js";
import {messages as localeMessages} from "./assets/dist-xkt-bim-viewer/messagesRu.js";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
onMounted(()=> { 
  launchForteLogisticsDemoModel() 
})

const homeView = {
    "perspective_camera": {
        "camera_view_point": {
            "x": 11.589427746978966,
            "y": 153.49664285651457,
            "z": 8.407385365722757
        },
        "camera_direction": {
            "x": 0.37488353313795675,
            "y": -0.9270711736007312,
            "z": 0.001172885572168351
        },
        "camera_up_vector": {
            "x": -0.0004396957896971921,
            "y": 0.001087349151801416,
            "z": 0.9999993121694807
        },
        "field_of_view": 60
    },
    "components": {
        "visibility": {
            "view_setup_hints": {
                "spaces_visible": false,
                "space_boundaries_visible": false,
                "openings_visible": false,
                "spaces_translucent": false,
                "space_boundaries_translucent": false,
                "openings_translucent": false
            },
            "exceptions": [],
            "default_visibility": true
        },
        "coloring": [],
        "selection": [],
        "translucency": []
    }
}

const placesView = {
    "perspective_camera": {
        "camera_view_point": {
            "x": 48.04201777749158,
            "y": 156.03656843680582,
            "z": 34.6180740223639
        },
        "camera_direction": {
            "x": 0.005511308420105785,
            "y": -0.9171627149554464,
            "z": -0.398474816989798
        },
        "camera_up_vector": {
            "x": 0.00239442568851327,
            "y": -0.3984676229013784,
            "z": 0.9171792737654655
        },
        "field_of_view": 60
    },
    "clipping_planes": [
        {
            "location": {
                "x": 96.0860349450368,
                "y": 126.13914322191295,
                "z": 14.621697066406666
            },
            "direction": {
                "x": 0,
                "y": 0.0002777000170622645,
                "z": -0.9999999614413497
            }
        }
    ],
    "components": {
        "visibility": {
            "view_setup_hints": {
                "spaces_visible": false,
                "space_boundaries_visible": false,
                "openings_visible": false,
                "spaces_translucent": false,
                "space_boundaries_translucent": false,
                "openings_translucent": false
            },
            "exceptions": [],
            "default_visibility": true
        },
        "coloring": [
            {
                "color": "4d0e0e0e",
                "components": [
                    {
                        "ifc_guid": "Базовая крыша ADSK_Технониколь ТН-кровля Гарант_RE15 [1071768]",
                        "originating_system": "xeokit.io"
                    }
                ]
            }
        ],
        "selection": [],
        "translucency": [
            {
                "ifc_guid": "Базовая крыша ADSK_Технониколь ТН-кровля Гарант_RE15 [1071768]",
                "originating_system": "xeokit.io"
            }
        ]
    }
}

const storeLevelsView ={
    "perspective_camera": {
        "camera_view_point": {
            "x": 3.1297140019178293,
            "y": 68.46973147177253,
            "z": 4.700821938291471
        },
        "camera_direction": {
            "x": 0.8425431626446882,
            "y": -0.5182097563387993,
            "z": -0.14690019576559107
        },
        "camera_up_vector": {
            "x": 0.1251272207980796,
            "y": -0.07696002943942802,
            "z": 0.989151319305611
        },
        "field_of_view": 60
    },
    "components": {
        "visibility": {
            "view_setup_hints": {
                "spaces_visible": false,
                "space_boundaries_visible": false,
                "openings_visible": false,
                "spaces_translucent": false,
                "space_boundaries_translucent": false,
                "openings_translucent": false
            },
            "exceptions": [],
            "default_visibility": true
        },
        "coloring": [],
        "selection": [],
        "translucency": []
    }
}

const dockSheltersView = {
    "perspective_camera": {
        "camera_view_point": {
            "x": 48.8483425461125,
            "y": 10.250106702412513,
            "z": 6.485794563145512
        },
        "camera_direction": {
            "x": 0.5253365487191498,
            "y": -0.7546224206457306,
            "z": -0.39314947900083846
        },
        "camera_up_vector": {
            "x": 0.2246237110722518,
            "y": -0.3226618993044581,
            "z": 0.9194745712423861
        },
        "field_of_view": 60
    },
    "components": {
        "visibility": {
            "view_setup_hints": {
                "spaces_visible": false,
                "space_boundaries_visible": false,
                "openings_visible": false,
                "spaces_translucent": false,
                "space_boundaries_translucent": false,
                "openings_translucent": false
            },
            "exceptions": [],
            "default_visibility": true
        },
        "coloring": [],
        "selection": [],
        "translucency": []
    }
}
function launchForteLogisticsDemoModel () {

    const requestParams = getRequestParams();
    
    //const projectId = requestParams.projectId;
    const projectId = 'forte-logistics';

    if (!projectId) {
        console.log('There is wrong projectId')
        return;
    }

    const openExplorer = requestParams.openExplorer;
    setExplorerOpen(openExplorer === "true");

   

    const server = new Server({
        //dataDir: requestParams.dataDir || "./data"
        dataDir: "/data"
    });

    const bimViewer = new BIMViewer(server, {
        localeService: new LocaleService({
            messages: localeMessages,
            locale: "ru"
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
        "dtxEnabled": true, // Enable data texture scene representation for models - may be slow on low-spec GPUs,
        "saoEnabled": true,
        "saoBias": 0.5,
        "saoIntensity": 0.1,
        "saoKernelRadius": 1,
        "saoBlur": true,
        "edgesEnabled": true
    });

    bimViewer.on("openExplorer", () => {
        setExplorerOpen(true);
    });

    bimViewer.on("openInspector", () => {
        setInspectorOpen(true);
    });

    bimViewer.on("addModel", (event) => { // "Add" selected in Models tab's context menu
        console.log("addModel: " + JSON.stringify(event, null, "\t"));
    });

    bimViewer.on("editModel", (event) => { // "Edit" selected in Models tab's context menu
        console.log("editModel: " + JSON.stringify(event, null, "\t"));
    });

    bimViewer.on("deleteModel", (event) => { // "Delete" selected in Models tab's context menu
        console.log("deleteModel: " + JSON.stringify(event, null, "\t"));
    });

   bimViewer.on('loaded')
    const viewerConfigs = requestParams.configs;
    if (viewerConfigs) {
        const configNameVals = viewerConfigs.split(",");
        for (let i = 0, len = configNameVals.length; i < len; i++) {
            const configNameValStr = configNameVals[i];
            const configNameVal = configNameValStr.split(":");
            const configName = configNameVal[0];
            const configVal = configNameVal[1];
            bimViewer.setConfig(configName, configVal);
        }
    }
    
    bimViewer.loadProject(projectId, () => {
            const modelId = requestParams.modelId;
            if (modelId) {
                bimViewer.loadModel(modelId);
            }
            const tab = requestParams.tab;
            if (tab) {
                bimViewer.openTab(tab);
            }
            watchHashParams();
            bimViewer.loadBCFViewpoint(homeView, {immediate: true})    
        },
        (errorMsg) => {
            console.error(errorMsg);
        });
    
        
        const wareHouseRoom = document.getElementById('wareHouseRoom')
        wareHouseRoom.addEventListener('click', function() {
            bimViewer.loadBCFViewpoint(placesView, {duration: 2000})
        })

        const storeLevels = document.getElementById('storeLevels')
        storeLevels.addEventListener('click', function(){
            bimViewer.loadBCFViewpoint(storeLevelsView)
        })

        const dockShelters= document.getElementById('dockShelters')
        dockShelters.addEventListener('click', function(){
            bimViewer.loadBCFViewpoint(dockSheltersView)
        })

        const mainView = document.getElementById('mainView')
        mainView.addEventListener('click', function() {
            bimViewer.loadBCFViewpoint(homeView)
        }
        )

    function watchHashParams() {
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

    function setExplorerOpen(explorerOpen) {
        const toggle = document.getElementById("explorer_toggle");
        if (toggle) {
            toggle.checked = explorerOpen;
        }
    }

    function setInspectorOpen(inspectorOpen) {
        const toggle = document.getElementById("inspector_toggle");
        if (toggle) {
            toggle.checked = inspectorOpen;
        }
    }

    function getRequestParams() {
        const vars = {};
        window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
            vars[key] = value;
        });
        return vars;
    }

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
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
