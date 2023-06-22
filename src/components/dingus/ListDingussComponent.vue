<template>
  <div class="component q-pa-md">
    <div class="sub-component">
      <q-toolbar class="bg-primary text-white shadow-2">
        <q-toolbar-title>List of Dinguss</q-toolbar-title>
      </q-toolbar>
      <q-list bordered separator>
        <q-item v-for="(dingus, index) in dinguss"
        :key="index"
        :class="{ active: index == currentIndex }"
        clickable
        v-ripple
        >
        <q-item-section>
          <q-item-label overline>{{ dingus.name }}</q-item-label>
          <q-item-label>{{ dingus.description }}</q-item-label>
        </q-item-section>
        </q-item>
      </q-list>
      <div v-if="currentDingus.name==''">
        Click any Dingus to view more info
      </div>
      <div>
        <q-input v-model="currentName"
        label="Search for a dingus by name"
        placeholder="Search by dingus name"
        hint="Enter the name of a dingus"
        dense="true"
        />
        <div class="app-btn">
          <q-btn
            color='primary'
            label="Search"
          />
        </div>
      </div>
      <div class="app-btn">
        <q-btn
            color='negative'
            label="Remove All"
        />
      </div>
    </div>
    <div v-if="currentDingus.name!=''" class="sub-component">
        <div>
          <label><strong>Name:</strong></label> {{ currentDingus.name }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentDingus.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ published ? "Published" : "Pending" }}
        </div>

        <div class="app-btn">
          <q-btn
            color='primary'
            label="Edit"
          />
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { Dingus } from '../../interfaces';

const dinguss = ref<Dingus[]>([
  {
    name: 1,
    description: 'ct1'
  },
  {
    name: 2,
    description: 'ct2'
  },
  {
    name: 3,
    description: 'ct3'
  },
  {
    name: 4,
    description: 'ct4'
  },
  {
    name: 5,
    description: 'ct5'
  }
]);
const currentDingus = ref<Dingus>({
  name:'',
  description:''
})

const published = ref<boolean>(false);

const currentIndex = ref<number>(-1);

const currentName = ref<string>('');

</script>

<style scoped lang="scss">

</style>
