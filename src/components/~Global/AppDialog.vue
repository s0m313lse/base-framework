<template>
  <q-dialog
    transition-show="slide-up"
    transition-hide="slide-down"
    :maximized="$q.screen.lt.sm ? true : false"
  >
    <div class="dialog-bg">
      <div class="card-header">
        <q-form @submit="$emit ('submit')">
        <q-toolbar
            v-if="label"
          >
            <q-toolbar-title class="card-header text-center">
              {{ props.label }}
            </q-toolbar-title>
        </q-toolbar>
        <q-card class="app-dialog bg-backdrop">

          <q-card-section class="q-pt-none text-dark">
            <slot />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <slot name="buttons"></slot>
          </q-card-actions>
        </q-card>

      </q-form>
      </div>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">

import { useQuasar } from 'quasar'
const $q = useQuasar()

interface AppDialogProps {
  label: string;
}

const props = defineProps<AppDialogProps>();

</script>
