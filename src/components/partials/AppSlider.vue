<script>
export default {
  name: 'AppSlider',
  props: {
    slides: {
      type: Array,
      
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    currentImage: function(img) {
      return new URL(`../../assets/img/${img}.jpg`, import.meta.url).href;
    },
    previousSlide() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.slides.length - 1
      } else {
        this.currentIndex--
      }
      
    },
    nextSlide() {
      if (this.currentIndex === this.slides.length - 1) {
        this.currentIndex = 0
      } else {
        this.currentIndex++
      }
      
    }
  }
}

</script>

<template>
   <div>
      <div class="slider">
       <div class="slider-container"  v-for="(slide, index) in slides" :key="slide.id">

         <img :class="{ 'active': index === currentIndex }" :src="currentImage(slide.img)" :alt="slide.description">
       </div>
        
      </div>
      <button @click="previousSlide">Previous</button>
      <button @click="nextSlide">Next</button>
  </div>
</template>

<style scoped lang="scss">
.slider-container{
  img{

    width: 100%;
    height:  675px;
    object-fit: cover;
    display: none;
  }
  .active{
    display: block;
  }
}

</style>