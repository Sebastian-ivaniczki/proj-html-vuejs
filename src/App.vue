<script>
import { store } from './components/data/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  components: { AppHeader, AppMain, AppFooter},
  data() {
    return {
      store,
      
    }
  },
  
  methods:{
    
  },
 
}
</script>

<template>
<app-header></app-header>
<div class="container">
  <app-main></app-main>
  <app-footer></app-footer>

</div>
</template>

<style lang="scss">

</style>
