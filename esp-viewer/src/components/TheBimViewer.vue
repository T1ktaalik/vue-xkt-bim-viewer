<template>
  <q-layout>
    <q-header>
      <q-toolbar class="row justify-between">
        <q-btn icon="account_tree" flat @click="isExplorerOpen = !isExplorerOpen"></q-btn>
        <q-btn
          icon="info"
          flat
          @click="isInspectorOpen = !isInspectorOpen"
          v-show="isInspectorRendered"
        ></q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer
      id="Explorer"
      :width="400"
      side="left"
      v-model="isExplorerOpen"
      class="bg-red-2"
      ref="theExplorer"
    >
      <div>Обозреватель модели</div>
      <q-tabs v-model="explorerPanelName" active-color="indigo-3">
        <q-tab v-for="item in explorerOptions" :name="item" :label="item" v-bind:key="item"></q-tab>
      </q-tabs>
      <q-tab-panels v-model="explorerPanelName">
        <q-tab-panel v-for="item in explorerOptions" :name="item" :label="item" v-bind:key="item">
          <q-btn-toggle
            v-model="toggling"
            :options="[
              { label: 'показать', value: true },
              { label: 'скрыть', value: false }
            ]"
          ></q-btn-toggle>
        </q-tab-panel>
      </q-tab-panels>
    </q-drawer>
    <q-drawer
      id="Inspector"
      side="right"
      v-model="isInspectorOpen"
      ref="theInspector"
      v-show="isInspectorRendered"
    >
      <div>Inspector</div>
    </q-drawer>
    <q-page-container>
      <q-page class="bg-pink-4">
        <q-btn-group ref="theViewerToolbar">
          <q-btn icon="home">
            <q-tooltip> К начальному виду </q-tooltip>
          </q-btn>
          <q-btn icon="domain_disabled">
            <q-tooltip> Переключить 2D/3D </q-tooltip>
          </q-btn>
          <q-btn icon="crop_rotate">
            <q-tooltip>Перспективный/ортогональный вид</q-tooltip>
          </q-btn>
          <q-btn icon="crop_free"> <q-tooltip> Фокус на объекте </q-tooltip></q-btn>
          <q-btn icon="man">
            <q-tooltip>От первого лица</q-tooltip>
          </q-btn>
          <q-btn icon="picture_in_picture">
            <q-tooltip>Показать IFC spaces</q-tooltip>
          </q-btn>
        </q-btn-group>
        <div ref="theViewer">
          <canvas ref="theViewerCanvas"></canvas>
          <canvas ref="theNavCubeCanvas"></canvas>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Server, BIMViewer } from '../assets/bim_viewer_src/index'
import { LocaleService } from '../assets/bim_viewer_src/index'
import { messages } from '../assets/bim_viewer_src/src/locales/messagesRu'
onMounted(() => {
  launchViewer()
})

const isExplorerOpen = ref(true)
const isInspectorOpen = ref(true)

const isInspectorRendered = ref(false)

const explorerOptions = ref(['Модели', 'Объекты', 'Классы', 'Уровни'])
const explorerPanelName = ref('Модели')

const theViewer = ref(null)
const theViewerCanvas = ref(null)
const theNavCubeCanvas = ref(null)
const theExplorer = ref(null)
const theInspector = ref(null)
const theViewerToolbar = ref(null)

const modelsTabElement = ref(null)
const loadModelsButtonElement = ref(null)
const unloadModelsButtonElement = ref(null)
const addModelButtonElement = ref(null)
const modelsElement = ref(null)

const objectsTabElement = ref(null)
const showAllObjectsButtonElement = ref(null)
const hideAllObjectButtonElement = ref(null)
const objectsElement = ref(null)

const classesTabElement = ref(null)
const showAllClassesButtonElement = ref(null)
const hideAllClassesButtonElement = ref(null)
const classesElement = ref(null)

const storeysTabElement = ref(null)
const showAllStoreysButtonElement = ref(null)
const hideAllStoreysButtonElement = ref(null)
const storeysElement = ref(nulls)

// пустышка
const toggling = ref(true)

function launchViewer() {
  const server = new Server({
    dataDir: '/public'
  })
  const bimViewer = new BIMViewer(server, {
    localeService: new LocaleService({
      messages: messages,
      locale: 'ru'
    }),
    canvasElement: theViewerCanvas.value,
    explorerElement: theExplorer.value,
    inspectorElement: theInspector.value,
    navCubeCanvasElement: theNavCubeCanvas.value,
    toolbarElement: theViewerToolbar.value
  })

  const projectId = 'duplex'
  /* bimViewer.localeService.on('updated', () => {  }) */

  bimViewer.setConfigs({})

  bimViewer.loadProject(projectId, () => {})
}

/**
 *
 */
const bimViewerFullDefaultConfig = {
  backgroundColor: [1.0, 1.0, 1.0],
  cameraNear: 0.05,
  cameraFar: 3000,
  smartPivot: true,
  saoEnabled: true,
  saoBias: 0.5, // [0.0...10.0] SAO bias
  saoIntensity: 100, // [0.0...200.0]
  saoScale: 500, // [0.0...1000.0]
  saoKernelRadius: 100, // [0.0...200.0]
  saoBlur: true,
  edgesEnabled: true,
  pbrEnabled: false, // Whether or not to enable Physically Based rendering (PBR). Improves rendering
  viewerFitFOV: 30, //Transition of animated fiitting object
  perspectoveFOV: 55, // [10.0...70.0] 	When in perspective projection, this is the field of view, in degrees, that the user sees
  objectColors: undefined, // A map of custom attributes for various IFC types Object
  externalMetadata: false, // 	Whether to load a metadata.json file with each geometry.xkt file
  xrayPickable: false, // Whether we can interact with X-rayed objects using mouse/touch input
  selectedGlowThrough: true, //светиться через другие элементы Whether selected objects appear to “glow through” other objects
  highlightGlowThrough: true, //Whether highlighted objects appear to “glow through” other objects
  dtxEnabled: false, // Упростить рендеринг Whether to enable xeokit's data texture-based (DTX) scene representation and rendering mode. This has a lower memory footprint than the standard vertex buffer object-based (VBO) mode, and loads fast, but may be slower on low-spec GPUs.
  showSpaces: false
}
</script>
