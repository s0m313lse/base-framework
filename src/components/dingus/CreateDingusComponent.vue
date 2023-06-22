<template>
  <div class="submit-form component">
    <div v-if="!submitted"  class="form-component">
      <q-input v-model="dingus.name"
        label="Dingus name:"
        placeholder="Placeholder"
        hint="Enter a name for your dingus"
        dense="true"
      />
      <q-input v-model="dingus.description"
        label="Dingus description:"
        placeholder="Placeholder"
        hint="Enter a description of your dingus"
        dense="true"
      />
      <div class="app-btn">
        <q-btn
            color='primary'
            label="Add Dingus"
        />
      </div>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success">Add</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { Dingus } from '../../interfaces';

const submitted = ref<boolean>(false);
const dingus = ref<Dingus>({
  name: '',
  description: ''
})

</script>

<style scoped lang="scss">

</style>
