<script>
import CompanyInfo from './partials/CompanyInfo.vue';
import { store } from './data/store';
import Cardiponibilites from './partials/Cardiponibilites.vue';
import Filter from './partials/Filter.vue';
import Cards from './partials/Cards.vue';
export default {
  name: 'AppMain',
  components: { Filter, Cards, Cardiponibilites, CompanyInfo },
  data() {
    return {
      store,
      
    }
  }
}

</script>

<template>
 <Filter></Filter>
 <Cardiponibilites></Cardiponibilites>
 <cards></cards>
 <company-info></company-info>
</template>

<style scoped lang="scss">

</style>
