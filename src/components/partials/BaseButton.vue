<script>
export default {
  name: 'BaseButton',
  props: {
    buttonStyles: {
      type: Object,
      default: () => ({})
    }
  }
}

</script>

<template>
 <button class="neutral-button" :style="buttonStyles">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
  .neutral-button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: transparent;
    
    font-size: 16px;
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>