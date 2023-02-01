<script>
import BaseButton from './BaseButton.vue';
export default {
  name: 'Filter',
  components: { BaseButton },
  methods: {
    onSubmit() {
     console.log('clicked')
    }
  }
}

</script>

<template>
 <form  @submit.prevent="onSubmit">
    <input placeholder="keywords" type="text">
    <input placeholder="location" type="text">
    <select>
      <option value="">1</option>
    </select>
    <select>
      <option value="">1</option>
    </select>
    <select>
      <option value="">1</option>
    </select>
    <select>
      <option value="">1</option>
    </select>
    <select>
      <option value="">1</option>
    </select>
    <base-button :type="submit" :buttonStyles="{backgroundColor: '#000',  color: '#fff' }">Searche</base-button>
 </form>
</template>

<style scoped lang="scss">

</style>