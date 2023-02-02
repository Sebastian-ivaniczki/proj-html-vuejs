<script>
import { links } from './data/dataBase';
export default {
  name: 'AppFooter',
  data() {
    return {
      links
    }
  },
  methods:{
    onSubmit(){
      console.log('do somethink')
    }
  }
}

</script>

<template>
 <div class="nav">
  <div class="container d-flex pt-5">
    <div class="nav-box nav-left">
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

        <div class="brands pt-5">
          <i class="fa-brands fa-facebook-f me-5"></i>
          <i class="fa-brands fa-instagram  me-5"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
    <div class="nav-box nav-mid">
      <h4><strong>Join Our Newsletter</strong></h4>
      <p>Subscribe to be informed about our service and products.</p>
      <form @submit.prevent="onSubmit" class="d-flex flex-column align-items-center">
        <input type="email" class="email-form p-2" placeholder="Your Email Adres">
        <button class="footer-button" type="submit">Subscribe <i class="fa-solid fa-arrow-right"></i></button>
      </form>
      <div class="text-end mt-5">
        <span><i class="fa-regular fa-copyright"></i> 2022 Autocar - All Rights Reserved</span>
      </div>
    </div>
    <div class="nav-box nav-right d-flex">
      <div class="link-left">
        <h4><strong>My Account</strong></h4>
        <ul>
          <li class="d-flex align-items-center mt-2">
            <div class="my-border"></div>
            <a href="#">My Account</a>
          </li>

          <li class="d-flex align-items-center mt-2">
            <div class="my-border"></div>
            <a href="#">Checkout</a>
          </li>

          <li class="d-flex align-items-center mt-2">
            <div class="my-border"></div>
            <a href="#">Cart</a>
          </li>

          <li class="d-flex align-items-center mt-2">
            <div class="my-border"></div>
            <a href="#">Packages</a>
          </li>

          <li class="d-flex align-items-center mt-2">
            <div class="my-border"></div>
            <a href="#">Add Car</a>
          </li>
        </ul>
      </div>
      <div class="link-right ms-5">
        <h4><strong>Quick Links</strong></h4>
        <ul>
          <li class="d-flex align-items-center mt-2">
            <div class="my-border"></div>
            <a href="#">Home</a>
          </li>

          <li class="d-flex align-items-center mt-2">
            <div class="my-border"></div>
            <a href="#">About Us</a>
          </li>

          <li class="d-flex align-items-center mt-2">
            <div class="my-border"></div>
            <a href="#">Blog</a>
          </li>

          <li class="d-flex align-items-center mt-2">
            <div class="my-border"></div>
            <a href="#">Contact</a>
          </li>

          <li class="d-flex align-items-center mt-2">
            <div class="my-border"></div>
            <a href="#">Refund & returns</a>
          </li>
          
        </ul>
      </div>
    </div>

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
.brands{
  i{
    font-size: 30px;
  }
}
.nav-box{
  width: calc(100% / 3);
  padding: 1rem;
}
.email-form{
  height: 3rem;
  width: 100%;
  border-radius: 5px;
  margin-top: 2.5rem;
}
.footer-button{
  height: 3rem;
  width: 100%;
  border-radius: 5px;
  margin-top: 1rem;
}
ul{
  list-style:none ;
}
.my-border{
  width: 10px;
  height: 5px;
  background-color: #fff;
  border-radius: 5px;
}
.nav-right{
  h4{
    margin-left: 26px;
  }
}
li{
  a{
    text-decoration: none;
    color: #fff;
    margin-left: 10px;
  }
}
</style>
