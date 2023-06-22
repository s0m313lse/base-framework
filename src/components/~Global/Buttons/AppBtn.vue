<template>
  <q-btn
    :label="$t(label)"
    :color="color"
    class="text-size-16"
    :class="{ 'full-width': fullWidth}"
    padding=".2rem .3rem"
    nocaps
    unelevated
  />
</template>

<script setup>
const props = defineProps({
  label: String,
  color: String,
  fullWidth: Boolean
})
</script>

<style lang="scss" scoped>

</style>
