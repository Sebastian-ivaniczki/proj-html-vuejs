<script>
import BaseButton from './BaseButton.vue';
import { store } from '../data/store';
export default {
  name: 'Cards',
  components: { BaseButton },
  data() {
    return {
     store
    }
  },
  
  methods: {
    currentImage: function(img) {
        return new URL(`../../assets/img/${img}.jpg`, import.meta.url).href;
      }
  }

  }

</script>

<template>
  <div class="d-flex flex-wrap">

    <div v-for="vehicle in store.filterdVehicles" :key="vehicle.id" class="card p-2" style="width: 20rem;">
     <img :src="currentImage(vehicle.image)" class="card-img-top" :alt="vehicle.brand">
     <div class="card-body">
       <p class="card-text">{{ vehicle.brand }} {{ vehicle.type }}</p>
       <p>{{ vehicle.category }}</p>
       <span><strong>$</strong> {{ vehicle.price }}</span> 
       <span><i class="fa-solid fa-car"></i>{{  vehicle.brand }}</span> 
       <span><i class="fa-solid fa-gas-pump"></i>{{ vehicle.fuel }}</span>
      </div>
    </div>
     
  </div>
  <div class="d-flex justify-content-center my-3">
    <base-button :buttonStyles="{backgroundColor: '#000',  color: '#fff' }">Show more <i class="fa-solid fa-arrow-right"></i></base-button>
  </div>
</template>
     
  
  

<style scoped lang="scss">
span{
  margin-right: 1rem;
}
</style>