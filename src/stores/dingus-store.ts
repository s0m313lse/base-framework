import { defineStore } from 'pinia'
import {v4 as uuidv4} from 'uuid';
// import { useStorage } from '@vueuse/core'

import { Confirm, Dingus } from '../interfaces'

type Nullable<T> = T | null;

interface DingusStoreState {
  dinguss: Dingus[];
  selectedDingus: Nullable<Dingus>;
  loading: boolean;
  error: Nullable<string>
}

export const useDingusStore = defineStore({
  id: 'dingus',
  state: (): DingusStoreState => ({
    dinguss: [
      {
        _id: uuidv4(),
        name: 'The first Dingus',
        description: 'A description of dingus 1',
        author: 'user',
        verified: false
      },
      {
        _id: uuidv4(),
        name: 'The second Dingus',
        description: 'A description of dingus 2',
        author: 'user',
        verified: false
      },
      {
        _id: uuidv4(),
        name: 'Dingus 3',
        description: 'A description of dingus 3',
        author: 'user',
        verified: true
      },
      {
        _id: uuidv4(),
        name: 'Dingus the fourth',
        description: 'A description of dingus 4',
        author: 'user',
        verified: false
      },
      {
        _id: uuidv4(),
        name: 'Mighty Dingus 5',
        description: 'A description of dingus 5',
        author: 'user',
        verified: false
      }
    ],
    selectedDingus: null,
    loading: false,
    error: null
  }),
  getters: {
    getDingusList: (state) => state.dinguss,
    getDingus: (state) => {
      return (name: string) => state.dinguss.filter((dingus) => dingus.name === name)
    },
    getSelectedDingus: (state) => {
      return state.selectedDingus
    }
  },
  actions: {
    createDingus(dingus:Dingus) {
      if (dingus.name.length > 0 && dingus.description.length > 0){
        const d:Dingus =  {
          _id: uuidv4(),
          name: dingus.name,
          description: dingus.description,
          author: 'user',
          verified: false
        }

        this.dinguss = [...this.dinguss, d]
        return {
          code:'success',
          id: d._id,
          name: d.name
        }
      }
    },

    selectDingus(name:string) {
      const filter:Array<Dingus> = this.dinguss.filter((dingus:Dingus) => dingus.name === name);
      this.selectedDingus = filter[0];
    },

    updateDingus(dingus:Dingus) {
      const i = this.dinguss.findIndex((e) => e._id == dingus._id);
      this.dinguss[i] = {
        _id: dingus._id,
        name: dingus.name,
        description: dingus.description,
        author: dingus.author,
        verified: dingus.verified
      };
      this.selectedDingus = this.dinguss[i];
      return {
        code:'success',
        id: this.dinguss[i]._id,
        name: this.dinguss[i].name
      };
    },

    deleteDingus() {
      this.dinguss = this.dinguss.filter((dingus:Dingus) => dingus._id !== this.selectedDingus._id);
      const confirm:Confirm = {
        code: 'success',
        id: this.selectedDingus._id,
        name: this.selectedDingus.name
      }
      this.selectedDingus = null;
      return confirm;
    },

    deleteAllDinguss() {
      this.dinguss = [];
      this.selectedDingus = null;
    },

    setVerified(name:string){
      const filter:Array<Dingus> = this.dinguss.filter((dingus:Dingus) => dingus.name === name);
      filter[0].verified = true;
      this.selectedDingus = filter[0];
      return {
        code:'success',
        id: filter[0]._id,
        name: filter[0].name
      };
    },

    unsetVerified(name:string){
      const filter:Array<Dingus> = this.dinguss.filter((dingus:Dingus) => dingus.name === name);
      filter[0].verified = false;
      return {
        code:'success',
        id: filter[0]._id,
        name: filter[0].name
      };
    }
  }
})
