<script>
    import { customers } from '../data/dataBase'
    export default {
        name: 'CustomersInfo',
        data() {
            return {
                customers
                
            }
        },

        methods: {
            currentImage: function(img) {
            return new URL(`../../assets/img/${img}.png`, import.meta.url).href;
            },
        }
    }
</script>

<template>
    <div class="background">
        <div class="container">
            <div class="customers-header mb-5">
                <div class="hand-icon">
                    <i class="fa-regular fa-thumbs-up"></i>
                </div>
                <div class="stars">
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <h2 class="mt-4"><strong>What Are Our Customers Saying?</strong></h2>
                <p>Opinions from our happy customers</p>
            </div>
            <div class="d-flex flex-wrap justify-content-between">
                
                <div v-for="customer in customers" :key="customer.id" class="my-card">
                    <p>{{ customer.description }}</p>
                    <img  class="my-4" :src="currentImage(customer.img)" alt="">
                    <p>{{ customer.name }}</p>
                </div>    
            </div>
            
                    
            
        </div>
    </div>
</template>

<style scoped lang="scss">
    .background{
        height: 750px;
        width: 100%;
        background-image: url(../../assets/img/comment-bg-autocar.jpg);
        background-position: center;
        background-size: cover;
    }
    .customers-header{
        color: #fff;
        text-align: center;
        padding-top: 4rem;
        i{
            font-size: 20px;
        }
        .fa-thumbs-up{
            font-size: 50px;
        }

    }
    .my-card{
        width: 15rem;
        min-height: 18rem;
        background-color: #fff;
        border-radius: 10px;
        padding: 2rem;
        text-align: center;
        img{
            width: 90px;
        }
    }
</style>