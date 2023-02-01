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
     store.filterdVehicles = store.vehicles.filter(vehicle => {
      return (
        vehicle.category.toLowerCase().includes(this.category.toLowerCase()) &&
        vehicle.brand.toLowerCase().includes(this.brand.toLowerCase()) &&
        vehicle.fuel.toLowerCase().includes(this.fuelTyp.toLowerCase()) &&
        vehicle.transmission.toLowerCase().includes(this.transmision.toLowerCase()) &&
        vehicle.status.toLowerCase().includes(this.status.toLowerCase())
        );
      });
    },
    
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
      <option value="Available">Avalible</option>
      <option value="sell">Sell</option>
    </select>
    <base-button :type="submit" :buttonStyles="{backgroundColor: '#000',  color: '#fff' }">Searche</base-button>
 </form>
</template>

<style scoped lang="scss">
form{
  display: flex; justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
input{
  height: 43px;
  width: 130px;
} 
select{
  height: 43px;
  width: 130px;
}
</style>