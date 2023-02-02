<script>
    import BaseButton from './BaseButton.vue';
    import { articles } from '../data/dataBase';
    export default {
        name: "ResentArticles",
        components: { BaseButton },
        dtata() {
            return {
                articles
            }
        }

    }
</script>

<template>
    <div class="container">
        <div class="section-title">
            <div class="sec-container">
                <i class="fa-regular fa-thumbs-up"></i>
            </div>
            <h3>Resent articles</h3>
            <p>useful information about car.</p>
        </div>
        <div class="card-dek">
            <div class="card" style="width: 18rem;">
                <img src="../../assets/img/news-autocar-1-300x180.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">06.07.2022 - Auto Car</p> 
                    <h4><strong>why is BMW loved?</strong></h4>
                    <p class="mb-5">BMWs have a diferent tline whith their designs and almost[...]</p>
                    <base-button :buttonStyles="{backgroundColor: '#000',  color: '#fff' }">More</base-button>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="../../assets/img/news-autocar-2-300x180.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">06.07.2022 - Auto Car</p> 
                    <h4><strong>How solid is audi?</strong></h4>
                    <p class="mb-5">According to Euro NCAP data with different test organizations, there[...]</p>
                    <base-button :buttonStyles="{backgroundColor: '#000',  color: '#fff' }">More</base-button>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="../../assets/img/news-autocar-6-300x180.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">06.07.2022 - Auto Car</p> 
                    <h4><strong>What brand is Skoda?</strong></h4>
                    <p class="mb-5">Skoda is one of the leading automotive manufactures on the[...]</p>
                    <base-button :buttonStyles="{backgroundColor: '#000',  color: '#fff' }">More</base-button>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="../../assets/img/news-autocar-5-300x180.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">06.07.2022 - Auto Car</p> 
                    <h4><strong>Is the auris diesel?</strong></h4>
                    <p class="mb-5">You will have vehicle that burns less thab[...]</p>
                    <base-button :buttonStyles="{backgroundColor: '#000',  color: '#fff' }">More</base-button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style scoped lang="scss">
 .section-title{
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .sec-container{
        height: 70px;
        width: 70px;
        border-radius: 50%;
        color: #fff;
        background-color: #000;
        text-align: center;

        i{
            font-size: 40px;
            padding: 1rem;
        }
    }
 }
 .card-dek{
    display: flex;
    justify-content: space-between;
 }
 .card-body{
    display: flex;
    flex-direction: column;
    align-items: center;
 }
</style>