<template>
  <div class="absolute-center text-center">
    <q-icon
      :name="props.icon"
      size="3rem"
      color="light"
    />
    <div class="text-size-21 text-light">
      {{props.label}}
    </div>
  </div>
</template>

<script setup lang="ts">

interface AppNothingHereProps{
  label: string;
  icon: string;
}
const props = defineProps<AppNothingHereProps>()
</script>
