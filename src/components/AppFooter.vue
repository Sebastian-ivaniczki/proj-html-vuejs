<script>
import { links } from './data/dataBase';
export default {
  name: 'AppFooter',
  data() {
    return {
      links
    }
  }
}

</script>

<template>
 <div class="nav">
  <div class="container pt-5">
    <div class="nav-left">
      <img src="../assets/img/logo-footer-autocar11.png" alt="logo">
      <div class="info pt-3">
        <div>
          <i class="fa-solid fa-location-dot me-2"></i>
          <span>New Jersey, USA</span>
        </div>
        
        <div class="pt-3">
          <i class="fa-solid fa-phone-volume  me-2"></i>
          <span>+1(234) 567 89 10</span>
        </div>

        <div class="pt-3">
          <i class="fa-regular fa-envelope me-2"></i>
          <span>example@example.com</span>
        </div>
      </div>
    </div>
    <div class="nav-mid"></div>
    <div class="nav-right"></div>

  </div>
 </div>
</template>

<style scoped lang="scss">
.nav{
  background-color: #000;
  color: #fff;
  min-height: 400px;
  margin-top: 8rem;
}
img{
  display: block;
  width: 190px;
}
</style>
