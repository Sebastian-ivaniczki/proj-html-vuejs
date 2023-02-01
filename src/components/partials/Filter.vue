<script>
import { store } from '../data/store.js';
import BaseButton from './BaseButton.vue';
export default {
  name: 'Filter',
  components: { BaseButton },
  data() {
    return {
     store,
      keyword: '',
      location: '',
      category: '', 
      brand: '',
      fuelTyp: '',
      transmision: '', 
      status: '',
      
    }
  },
 computed: {
  
 },
  methods: {
    onSubmit() {
     console.log('clicked')
     this.filteredVehicles
    },
    filteredVehicles() {
      return store.vehicles.filter(vehicle => {
      return (
      vehicle.category.includes(this.category) ||
      vehicle.brand.includes(this.brand) ||
      vehicle.fuelTyp.includes(this.fuelTyp) ||
      vehicle.transmission.includes(this.transmision) ||
      vehicle.status.includes(this.status)
        );
      });
    }
  },
  
    
  
}

</script>

<template>
 <form  @submit.prevent="onSubmit">
    <!-- keywords -->
    <input v-model="keyword" placeholder="keywords" type="text">
    <!-- location -->
    <input v-model="location" placeholder="location" type="text">
    <!-- categori -->
    <select v-model="category">
      <option value="cabrio">Cabrio</option>
      <option value="hatchback">hatchback</option>
      <option value="sev">SUV</option>
      <option value="sedan">Sedan</option>
      <option value=""></option>
    </select>
    <!-- brand -->
    <select v-model="brand">
      <option value="bmw">BMW</option>
      <option value="seat">Seat</option>
      <option value="wolswagen">Wolswagen</option>
    </select>
    <!-- fuel type -->
    <select v-model="fuelTyp">
      <option value="gasoline">Gasoline</option>
      <option value="electric">Electric</option>
      <option value="diesel">Diesel</option>
    </select>
    <!-- transmision -->
    <select v-model="transmision">
      <option value="automatic">Automatic</option>
      <option value="manual">Manual</option>
    </select>
    <!-- status -->
    <select v-model="status">
      <option value="avalible">Avalible</option>
      <option value="sell">Sell</option>
    </select>
    <base-button :type="submit" :buttonStyles="{backgroundColor: '#000',  color: '#fff' }">Searche</base-button>
 </form>
</template>

<style scoped lang="scss">

</style>