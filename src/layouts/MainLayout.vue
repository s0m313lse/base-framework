<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Base Quasar App w/ Axios, Mongo, Pinia & Vite
        </q-toolbar-title>

        <div class="gt-sm">Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="app-page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import EssentialLink from 'components/EssentialLink.vue';
import  { EssentialLinkProps } from '../interfaces';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Home',
    caption: 'Bringus to the dingus',
    icon: 'home',
    link: '/',
    local: true
  },
  {
    title: 'List of Dingus',
    caption: 'View all the dinguss',
    icon: 'list',
    link: 'list_dinguss',
    local: true
  },
  {
    title: 'Create Dingus',
    caption: 'Add a new dingus',
    icon: 'add',
    link: 'create_dingus',
    local: true
  }
];

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
