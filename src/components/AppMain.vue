<script>
import { store } from './data/store';
import Cardiponibilites from './partials/Cardiponibilites.vue';
import Filter from './partials/Filter.vue';
import Cards from './partials/Cards.vue';
export default {
  name: 'AppMain',
  components: { Filter, Cards, Cardiponibilites },
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
</template>

<style scoped lang="scss">

</style>
