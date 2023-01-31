<script>
import BaseButton from './BaseButton.vue'
export default {
  name: 'AppSlider',
  components: {BaseButton},
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
        <div class="description">
          <h1>Buy And Sell Your Car At Its Value</h1>
          <p>Find the right price and dealer.</p>
            <base-button :buttonStyles="{ color: '#fff' }">Learn More <i class="fa-solid fa-arrow-right"></i></base-button>
        </div>
       <i @click="previousSlide" class="fas fa-chevron-left"></i>
       <i  @click="nextSlide" class="fas fa-chevron-right"></i>
      </div>
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
.slider{
  position: relative;
}
.description{
  color: #fff;
  position: absolute;
  left: 142px;
    top: 339px;
    width: 329px;
}


.fas{
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  color: #fff;
  text-shadow: 2px 2px #000000;
}
.fa-chevron-left{
  top: 50%;
  left: 60px;
}
.fa-chevron-right{
  top: 50%;
  right: 60px;
}
</style>