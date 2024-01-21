<template>
  <q-layout>
    <q-header>
    <q-toolbar class="row justify-between">
      <q-btn icon="account_tree" flat @click="isExplorerOpen = !isExplorerOpen"></q-btn>
      <q-btn icon="info" flat @click="isInspectorOpen = !isInspectorOpen"></q-btn>
    </q-toolbar>
  </q-header>
  <q-drawer id="Explorer" side='left' v-model='isExplorerOpen'> 
    <div>Обозреватель модели</div>
    <q-option-group
    v-model="explorerPanelName"
    :options="explorerOptions"
    inline
    @click="showExplorerPanelName()">
    </q-option-group>
<!--  <q-tab-panels>
  <q-tab-panel ></q-tab-panel>
  <q-tab-panel ></q-tab-panel>
  <q-tab-panel ></q-tab-panel>
  <q-tab-panel ></q-tab-panel>
 </q-tab-panels> -->
  </q-drawer>
        <q-drawer id="Inspector" side='right' v-model='isInspectorOpen' > <div> Inspector </div> </q-drawer>
    <q-page-container>

      <q-page class="bg-pink-4">
        
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import  { ref } from 'vue'
const isExplorerOpen = ref(true)
const isInspectorOpen = ref(true)
const explorerOptions = ref([
  {label: 'Models', value: 'Models'},
  {label: 'Objects', value: 'Objects'},
  {label: 'Classes', value: 'Classes'},
  {label: 'Storeys', value: 'Storeys'}
  ])
  const explorerPanelName = ref('Models')
  function showExplorerPanelName() {
    console.log(explorerPanelName.value)
  }
</script>
