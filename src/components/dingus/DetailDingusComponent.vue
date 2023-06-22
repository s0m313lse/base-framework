<template>
  <div v-if="currentDingus" class="edit-form">
    <h4>Dingus</h4>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name"
          v-model="currentDingus.name"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentDingus.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentDingus.verified ? "Verified" : "Pending" }}
      </div>
    </form>

    <div class="app-btn">
          <q-btn
            color='warning'
            label="Unverify"
          />
        </div>
    <div class="app-btn">
          <q-btn
            color='primary'
            label="Verify"
          />
        </div>

        <div class="app-btn">
          <q-btn
            color='negative'
            label="Delete"
          />
        </div>

    <div class="app-btn">
          <q-btn
            color='primary'
            label="Update"
          />
        </div>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Dingus...</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { Dingus } from '../../interfaces';

const currentDingus = ref<Dingus>(null)

const message = ref<string>('')
</script>

<style scoped lang="scss">

</style>
