<template>
  <q-card class="card">
    <q-toolbar class="bg-primary text-white">
      <q-toolbar-title>Add a new Dingus</q-toolbar-title>
    </q-toolbar>
    <q-form ref="formComponent">
      <q-item>
        <q-item-section>
          <q-input
            v-model="formName"
            label="Dingus name:"
            placeholder="Placeholder"
            hint="Enter a name for your dingus"
            :rules="[requiredRule]"
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-input
            v-model="formDescription"
            label="Dingus description:"
            placeholder="Placeholder"
            hint="Enter a description of your dingus"
            :rules="[requiredRule]"
        />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <app-btn
            color="positive"
            label="Add Dingus"
            @click="validateForm"
          />
        </q-item-section>
      </q-item>
    </q-form>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';

import { Confirm, Dingus } from '../../interfaces';
import { useDingusStore} from '../../stores/dingus-store'

const $q = useQuasar();
const dingusStore = useDingusStore();

const formComponent = ref()
const formName = ref<string>('');
const formDescription = ref<string>('');
const requiredRule = (val: string) => (val && val.length > 0) || 'This field cannot be empty'

async function validateForm(){
  const validated = await formComponent.value.validate()

  if (validated){
    const dingus = {
      _id:'',
      name: formName.value,
      description: formDescription.value,
      author: 'user_palceholder',
      verified: false
    }
    saveDingus(dingus);
  }
}

async function saveDingus(d:Dingus){
  const dataLoaded:Confirm = await dingusStore.createDingus(d);
  setSubmitted(dataLoaded)
}

function setSubmitted(confirm:Confirm){
  if(confirm.code == 'success'){
  $q.notify({
      message: 'Dingus "' + confirm.name + '" has been created',
      color: 'positive',
      position: 'top'
    })
  }
  formComponent.value.reset()
  formName.value = '';
  formDescription.value = ''
}

</script>
