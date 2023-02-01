<script>
import CostumersInfo from './components/partials/CostumersInfo.vue';
import { store } from './components/data/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  components: { AppHeader, AppMain, AppFooter, CostumersInfo },
  data() {
    return {
      store,
      
    }
  },
  
  methods:{
    
  },
  created() {
  store.filterdVehicles = this.store.vehicles;
},
}
</script>

<template>
<app-header></app-header>
<div class="container">
  <app-main></app-main>
</div>
 <costumers-info></costumers-info> 
<app-footer></app-footer>
</template>

<style lang="scss">

</style>
