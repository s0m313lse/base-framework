<template>
  <q-card v-if="selectedDingus._id.length>0" class="card">
    <q-toolbar class="card-header">
      <q-toolbar-title>Dingus Detail</q-toolbar-title>
    </q-toolbar>
    <q-form ref="formComponent">
      <q-item>
        <q-item-section>
          <q-input
            id="name" v-model="formName"
            type="text"
            label="Dingus name:"
            :rules="[requiredRule]"
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-input
            id="description" v-model="formDescription"
            type="textarea"
            label="Dingus description:"
            :rules="[requiredRule]"
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <strong>Status: </strong>{{ selectedDingus.verified ? "Verified" : "Pending" }}
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <div class="nav-row">
            <div v-if="selectedDingus.verified" class="nav-button">
              <app-btn
                color='warning'
                label="Unverify"
                full
                @click="onUnVerify"
              ></app-btn>
            </div>
            <div v-if="!selectedDingus.verified" class="nav-button">
              <app-btn
                color='positive'
                label="Verify"
                full
                @click="onVerify"
              ></app-btn>
            </div>
            <div v-if="isDirty" class="nav-button">
              <app-btn
                color='primary'
                label="Update"
                full
                @click="onUpdate"
              ></app-btn>
            </div>
            <div v-if="!isDirty" class="nav-button">
              <q-space  />
            </div>
            <div class="nav-button">
              <app-btn
                color='negative'
                label="Delete"
                full
                @click="showDeleteDingus=true"
              ></app-btn>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-form>
  </q-card>

  <div v-if="selectedDingus._id.length<1">
    <nothing-here
      icon="mdi-cancel"
      label="There is no selected Dingus"
    />
  </div>

  <app-dialog
    v-model="showDeleteDingus" persistent
    :label="deleteLabel"
    @submit="onDelete"
  >
    Are you sure you want to Delete {{ selectedDingus.name }} ?
    <template #buttons>
      <app-btn
        v-close-popup
        color="negative"
        :label="'Cancel'"
        @click="showDeleteDingus = false"
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
// import { ref, computed, onMounted } from 'vue';
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';

import { Confirm, Dingus, nullDingus } from '../../interfaces';
import { useDingusStore} from '../../stores/dingus-store';
const $q = useQuasar();
const dingusStore = useDingusStore();

const deleteLabel = computed(() => 'Delete ' + selectedDingus.value.name)

const selectedDingus = computed(()=>{
  return dingusStore.getSelectedDingus ? dingusStore.getSelectedDingus : nullDingus
})

const isDirty = computed(() => {
  let dirty = false;
  if(formName.value != selectedDingus.value.name) dirty = true;
  if(formDescription.value != selectedDingus.value.description) dirty = true;
  return dirty
})


const showDeleteDingus = ref(false)

const formName = ref<string>(selectedDingus.value.name);
const formDescription = ref<string>(selectedDingus.value.description);
const formComponent = ref();

const requiredRule = (val: string) => (val && val.length > 0) || 'This field cannot be empty'

async function onUpdate() {
  const validated = await formComponent.value.validate()

  if (validated){
    const d = {
      _id: selectedDingus.value._id,
      name: formName.value,
      description: formDescription.value,
      author: selectedDingus.value.author,
      verified: selectedDingus.value.verified
    }
    updateDingus(d);
  }
}

async function updateDingus(d:Dingus){
  const dataLoaded:Confirm = await dingusStore.updateDingus(d);
  setUpdated(dataLoaded);
}

function setUpdated(conifirm:Confirm){
  if(conifirm.code == 'success'){
    $q.notify({
      message: confirm.name + ' updated successfully',
      color: 'positive',
      position: 'top'
    })
  }
}

async function onVerify() {
  const dataLoaded:Confirm = await dingusStore.setVerified(formName.value);
  setVerified(dataLoaded)
}

function setVerified(confirm:Confirm){
  if(confirm.code == 'success'){
    $q.notify({
      message: confirm.name + ' has been verified',
      color: 'positive',
      position: 'top'
    })
  }
}

async function onUnVerify() {
  const dataLoaded:Confirm = await dingusStore.unsetVerified(selectedDingus.value.name);
  unsetVerified(dataLoaded);
}

function unsetVerified(confirm:Confirm){
  if(confirm.code == 'success'){
    $q.notify({
      message: confirm.name + ' has been unverified',
      color: 'positive',
      position: 'top'
    })
  }
}

async function onDelete() {
  const dataLoaded:Confirm = await dingusStore.deleteDingus();
  setDelete(dataLoaded)
}

function setDelete(confirm:Confirm){
  if(confirm.code == 'success'){
    $q.notify({
      message: confirm.name + ' has been deleted',
      color: 'positive',
      position: 'top'
    })
    showDeleteDingus.value = false;
  }
}

</script>
