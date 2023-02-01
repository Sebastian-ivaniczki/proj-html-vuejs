<script>
import { store } from './data/store';
import Filter from './partials/Filter.vue';
import Cards from './partials/Cards.vue';
export default {
  name: 'AppMain',
  components: { Filter, Cards },
  data() {
    return {
      store,
      
    }
  }
}

</script>

<template>
 <Filter></Filter>
 <cards></cards>
</template>

<style scoped lang="scss">

</style>
