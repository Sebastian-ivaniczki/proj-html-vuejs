<script>
import { links, slides } from './data/dataBase';
import AppSlider from './partials/AppSlider.vue'
export default {
  name: 'AppHeader',
  components: { AppSlider },
  data() {
    return {
      links,
      slides
    } 
  }
}

</script>

<template>
  <header>
    <div class="container">

      <div class="d-flex align-items-center justify-content-between">
        <img src="../assets/img/logo-autocar11.png" alt="Logo">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item" v-for="link in links" :key="link.id">
               <strong> <a class="nav-link" :href="link.link">{{ link.description }}</a></strong>
              </li>
            </ul>
          </div>
        </nav>
        <div class="d-flex align-items-center">
          <div class="img-container ms-2">
            <img src="../assets/img/free-fa-brands-400.svg-fonta.svg" alt="">
            <p>My acount</p>
          </div>
          <div class="img-container ms-2">
            <img src="../assets/img/free-fa-solid-900.svg-fonta.svg" alt="">
            <p>Add car</p>
          </div>
          <i class="fa-solid fa-bars"></i>
          <div class="img-container ms-2">
            <img src="../assets/img/free-fa-v4deprecations.svg-fonta.svg" alt="">
            <p>+1(234)5678910</p>
          </div>
          
       </div>
      </div>
    </div>
  </header>
 <app-slider :slides="slides"></app-slider>
</template>

<style scoped lang="scss">
div{
  height: 70px;
  img{
     width: 110px;
     display: block;
  }
}
.img-container{
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #000000;
  height: 60px;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  img{
    height: 55px;
  }
}
p{
  margin-bottom: 0;
  margin-top: 0;
}
.fa-bars{
  font-size: 25px;
  margin-right: 10px;
  margin-left: 10px;
}
</style>
