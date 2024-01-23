<template>
  <q-layout>
    <q-header>
      <q-toolbar class="row justify-between">
        <q-btn icon="account_tree" flat @click="isExplorerOpen = !isExplorerOpen"></q-btn>
        <q-btn icon="info" flat @click="isInspectorOpen = !isInspectorOpen"></q-btn>
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
    <q-drawer id="Inspector" side="right" v-model="isInspectorOpen" ref="theInspector">
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
import { ref, onMounted } from 'vue'
import { Server, BIMViewer } from '../assets/bim_viewer_src/index'

onMounted(() => {
  console.log('TheBimViewer component is mounted')
})

const isExplorerOpen = ref(true)
const isInspectorOpen = ref(true)
const explorerOptions = ref(['Модели', 'Объекты', 'Классы', 'Уровни'])
const explorerPanelName = ref('Модели')
const theViewer = ref(null)
const theViewerCanvas = ref(null)
const theNavCubeCanvas = ref(null)
const theExplorer = ref(null)
const theInspector = ref(null)
const theViewerToolbar = ref(null)
// пустышка
const toggling = ref(true)

function launchViewer() {
  const server = new Server({
    dataDir: ''
  })
  const BIMViewer = new BIMViewer(server, {
    canvasElement: theViewerCanvas,
    explorerElement: theExplorer,
    inspectorElement: theInspector,
    navCubeCanvasElement: theNavCubeCanvas,
    toolbarElement: theViewerToolbar
  })
}
</script>
