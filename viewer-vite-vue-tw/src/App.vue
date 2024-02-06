<template>
  <div class="tw-h-full tw-h-full">
   <!--  <input type="checkbox" id="explorer_toggle"/>
<label for="explorer_toggle" class="xeokit-i18n explorer_toggle_label xeokit-btn fas fa-2x fa-sitemap" data-xeokit-i18ntip="toolbar.toggleExplorer" data-tippy-content="Toggle explorer"></label>
<input type="checkbox" id="inspector_toggle"/>
<label id="inspector_toggle_label" for="inspector_toggle" class="xeokit-i18n inspector_toggle_label xeokit-btn fas fa-info-circle fa-2x" data-xeokit-i18ntip="toolbar.toggleProperties" data-tippy-content="Toggle properties"></label> -->
<div id="myExplorer" class=" tw-absolute tw-h-screen tw-md:w-1/3 tw-sm:w-2/3 tw-w-40  tw-bg-red-200 tw-z-10"></div>
<div id="myToolbar"></div>
<div id="myInspector"></div>
<div id="myViewer ">
    <canvas id="myCanvas"></canvas>
    <canvas id="myNavCubeCanvas"></canvas>
</div>
  </div>

</template>
<script setup>
import { Server, BIMViewer, LocaleService } from './assets/bim-viewer-xkt-src/index' 
import { ref, onMounted } from 'vue'
import { messages as localeMessages } from './assets/locales/messagesRu'
onMounted(()=> {
  ()=> {
    const projectId = 'Duplex'

if (!projectId) {
  throw new Error
}

const server = new Server({
  dataDir: './assets/data'
})

const bimViewer = new BIMViewer(server, {
  localeService: new LocaleService({
    messages: localeMessages,
    locale: 'ru'
  }), 
  canvasElement: document.getElementById("myCanvas"), // WebGL canvas
  explorerElement: document.getElementById("myExplorer"), // Left panel
  toolbarElement: document.getElementById("myToolbar"), // Toolbar
  inspectorElement: document.getElementById("myInspector"), // Right panel
  navCubeCanvasElement: document.getElementById("myNavCubeCanvas"),
  busyModelBackdropElement: document.getElementById("myViewer"),
  enableEditModels: false
})

/**
 * Полагаю, здесь идет локализация  с выбором элемнтов через классы
 * .xeokit-i18n - классы лучше пока не трогать
 * а потом, возможно, локализовать по-другому или добавлять messages
 */

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

/**
 * Изучить конфиги подробнее, ихъ больше!
 */
bimViewer.setConfigs({
    "showSpaces": false, // Default
    "selectedGlowThrough": true,
    "highlightGlowThrough": true,
    "dtxEnabled": false // Enable data texture screpresentation for models - may be slow on low-spec GPUs
});

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
            },
            (errorMsg) => {
                console.error(errorMsg);
            });
  }
 })


</script>