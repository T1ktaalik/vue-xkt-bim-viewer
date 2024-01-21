<template>
  <q-layout>
    <q-header>
    <q-toolbar class="row justify-between">
      <q-btn icon="account_tree" flat @click="isExplorerOpen = !isExplorerOpen"></q-btn>
      <q-btn icon="info" flat @click="isInspectorOpen = !isInspectorOpen"></q-btn>
    </q-toolbar>
  </q-header>
  <q-drawer id="Explorer" side='left' v-model='isExplorerOpen' class="bg-red-2"> 
    <div>Обозреватель модели</div>
    <q-tabs
    v-model="explorerPanelName"
    active-color="indigo-3"
   >
   <q-tab v-for="item in explorerOptions"  :name="item" :label="item"></q-tab>
  </q-tabs>
 <q-tab-panels v-model="explorerPanelName">
  <q-tab-panel v-for="item in explorerOptions" :name="item" :label="item">
    <q-btn-toggle
    :options="[ {label: 'показать'}, {label: 'скрыть'}]"
    ></q-btn-toggle>
</q-tab-panel>
 </q-tab-panels>
  </q-drawer>
        <q-drawer id="Inspector" side='right' v-model='isInspectorOpen' > <div> Inspector </div> </q-drawer>
    <q-page-container>
      <q-page class="bg-pink-4"> 
        <q-btn-group>
          <q-btn>Reset view</q-btn>
          <q-btn>Toggle 3D / 2D</q-btn>
          <q-btn>Toggle perspective /  ortho</q-btn>
          <q-btn>View fit</q-btn>
          <q-btn>Toggle first person mode</q-btn>
          <q-btn>Show IFC spaces</q-btn>
        </q-btn-group>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import  { ref } from 'vue'
const isExplorerOpen = ref(true)
const isInspectorOpen = ref(true)
const explorerOptions = ref([ 'Модели', 'Объекты', 'Классы', 'Уровни'])
const explorerPanelName = ref('Модели')
</script>
