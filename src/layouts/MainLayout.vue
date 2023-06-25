<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="!onMobile"
          flat
          dense
          round
          icon="mdi-menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-center">
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

    <q-page-container class="flex flex-center">
      <router-view />
    </q-page-container>

    <q-footer v-if="onMobile" class="bg-primary" style="height:4rem;line-height:1.2rem;">
      <q-tabs>
        <q-route-tab
          v-for="link in essentialLinks"
          :key="link.title"
          v-ripple
          class="text-white text-size-12 text-weight-bold"
          v-bind="link"
          active-class="text-secondary"
          :label="link.title"
          :icon="link.icon"
          :to="link.link"
          exact
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();



import EssentialLink from 'components/EssentialLink.vue';
import  { EssentialLinkProps } from '../interfaces';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Home',
    caption: 'Bringus to the Dingus',
    icon: 'mdi-home',
    link: '/',
    local: true
  },
  {
    title: 'List of Dinguss',
    caption: 'View all the Dinguss',
    icon: 'mdi-format-list-bulleted',
    link: '/list_dinguss',
    local: true
  },
  {
    title: 'Create Dingus',
    caption: 'Add a new Dingus',
    icon: 'mdi-plus-circle',
    link: '/create_dingus',
    local: true
  }
];
const onMobile = computed(() => {
  return $q.screen.lt.sm
})

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
