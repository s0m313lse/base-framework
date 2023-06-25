<template>
  <q-card v-if="getDingusList.length>0" class="card">
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>List of Dinguss</q-toolbar-title>
    </q-toolbar>
    <q-list bordered separator class="card-scroll-area">
      <q-item
      v-for="dingus, index in dingusNames"
      :key="index"
      v-ripple
      :class="{ active: index == currentIndex }"
      clickable
      @click="setActiveDingus(dingus, index)"
      >
      <q-item-section>
        <q-item-label>Name: <strong>{{ dingus.name }}</strong></q-item-label>
        {{ dingus.description }}
      </q-item-section>
      </q-item>
    </q-list>
    <div v-if="!getSelectedDingus" style="text-align: center;">
          Click any Dingus to view more info
    </div>
    <q-item>
      <q-item-section>
        <q-input
        v-model="searchName"
        label="Search for a dingus by name"
        placeholder="Search by dingus name"
        hint="Enter the name of a dingus"
        />
      </q-item-section>
    </q-item>
    <q-item-section class="q-pa-sm">
      <q-btn
          color='negative'
          label="Remove All"
          @click="showDeleteAllDinguss = true"
        />
    </q-item-section>
  </q-card>
  <q-card v-if="getSelectedDingus" class="card">
    <q-toolbar class="bg-accent text-white shadow-2">
      <q-toolbar-title>{{ getSelectedDingus.name }}</q-toolbar-title>
    </q-toolbar>
    <q-item>
      <q-item-section>
        {{ getSelectedDingus.description }}
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <label><strong>Status:</strong> {{ getSelectedDingus.verified ? "Verified" : "Pending" }}</label>
      </q-item-section>
      <q-item-section side>
        <q-btn :to="'/detail_dingus'" icon="mdi-pencil"></q-btn>
      </q-item-section>
    </q-item>
  </q-card>

  <div v-if="getDingusList.length==0" class="q-gutter-md">
    <nothing-here
      icon="mdi-cancel"
       label="You have no Dinguss"
    />
  </div>

  <app-dialog
    v-model="showDeleteAllDinguss" persistent
    :label="'Delete all the Dinguss'"
    @submit="removeAllDinguss"
  >
    Are you sure you want to Delete all the Dinguss ?
    <template #buttons>
      <app-btn
        v-close-popup
        color="negative"
        :label="'Cancel'"
        @click="showDeleteAllDinguss = false"
      />
      <app-btn
        type="submit"
        color='positive'
        :label="'Delete'"
      />
    </template>
  </app-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();

import { storeToRefs } from 'pinia'

import { Dingus } from '../../interfaces';

import { useDingusStore} from '../../stores/dingus-store'
const dingusStore = useDingusStore();
const { getDingusList } = storeToRefs(dingusStore)
const { getSelectedDingus } = storeToRefs(dingusStore)

const dingusNames = computed(() => {
  if(searchName.value.length>0) {
    let term = new RegExp(searchName.value,'i');
    return dingusStore.getDingusList.filter((d) => d.name.search(term)>-1)
  }
  else {return dingusStore.getDingusList}
})

function setActiveDingus(dingus:Dingus, index:number) {
  currentIndex.value = index;
  dingusStore.selectDingus(dingus.name);
}

function removeAllDinguss() {
  console.log('into removeAllDinguss');
  showDeleteAllDinguss.value = false;
  dingusStore.deleteAllDinguss();
}

const showDeleteAllDinguss = ref(false)

const currentIndex = ref<number>(-1);

const searchName = ref<string>('');

</script>
