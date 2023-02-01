<script>
import BaseButton from './BaseButton.vue';
export default {
    name: 'CompaniInfo',
    components: { BaseButton }
}
</script>

<template>
<div class="d-flex ">
    <div class="banner">
        <img src="../../assets/img/aoutcar-about-1.png" alt="car">
        <div class="banner-text left">
            <h1>24</h1>
            <p>years of Experience</p>
        </div>

        <div class="banner-text right">
            <h1>240</h1>
            <p>Special Expert Team</p>
        </div>
    </div>
    <div class="banner-info px-5">
        <h2><strong>Want to buy or sell a vehicle?</strong></h2>
        <p>you can put your vehicles for sale by registerin on our website. whether you are a dealer or sell personally. sell your vehicle in the most profitable way. Whith this system. Which has hasmilions of members, you will be able to buy and sell vehicles quickly</p>
        <img src="../../assets/img/divider.jpg" alt="divider">
       <div class="vehicle-type">
            <div>
                <i class="fa-solid fa-car"></i>
            </div>
            <div>
                <h4><strong>Model Vehicle</strong></h4>
                <span>We are Sure that you will find vehicless of suitable models on our website.</span>
            </div>
        </div>

        <div class="vehicle-type mb-5">
            <div>
                <i class="fa-solid fa-car-rear"></i>
            </div>
            <div>
                <h4><strong>2nd Hand Vehicles</strong></h4>
                <span>You can put your used vehicles for sale by adding them to our website</span>
            </div>
        </div>
        <base-button :buttonStyles="{backgroundColor: '#000',  color: '#fff' }">Get to know us <i class="fa-solid fa-arrow-right"></i></base-button>
    </div>
</div>
</template>

<style scoped lang="scss">
.banner{
    background-image: url(../../assets/img/circle-auto-car-1.png);
   width: 50%;
   img{
    width: 100%;
   }
   position: relative;
}
.banner-text{
    position: absolute;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 3rem;

}
.left{
    top: 25px;
    left: 25px;
}
.right{
    bottom: 25px;
    right: 25px;
}
.banner-info{
    padding: 1rem;
    width: 50%;
   
   
}
.vehicle-type{
    display: flex;
    align-items: center;
    margin-top: 2rem;
    
    i{
        margin-right: 1rem;
        font-size: 50px;
       
    }
}
</style>