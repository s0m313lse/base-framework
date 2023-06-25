<template>
  <q-btn
    :label="props.label"
    :color="props.color"
    class="text-size-16"
    :class="{ 'full-width': full}"
    padding=".2rem .3rem"
    nocaps
    unelevated
  />
</template>

<script setup lang="ts">

interface AppBtnProps {
  label: string;
  color: string;
  full?: boolean;
}
const props = defineProps<AppBtnProps>()
</script>
