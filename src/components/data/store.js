import { reactive } from 'vue';

export const store = reactive({
    vehicles: [
        {
          id: "1",
          category: "Cabrio",
          brand: "BMW",
          fuel: "Electric",
          transmission: "Automatic",
          status: "Available",
          type: "M9",
          image: "bmw-8-series-convertible-technical-data-sp-desktop-400x300",
          price: '34,000'
        },
        {
          id: "2",
          category: "Cabrio",
          brand: "BMW",
          fuel: "Diesel",
          transmission: "Manual",
          status: "Avalible",
          type: "M8",
          image: "bmw88-400x300",
          price: '34,000'
        },
        {
          id: "3",
          category: "Cabrio",
          brand: "BMW",
          fuel: "Diesel",
          transmission: "Automatic",
          status: "Available",
          type: "M4",
          image: "bmw442-400x300",
          price: '34,000'
        },
        {
          id: "4",
          category: "hatchback",
          brand: "Seat",
          fuel: "Electric",
          transmission: "Automatic",
          status: "Available",
          type: "Ibiza",
          image: "yeni-ibiza-2-400x300",
          price: '27,000'
        },
        {
          id: "5",
          category: "SUV",
          brand: "Seat",
          fuel: "Gasoline",
          transmission: "Manual",
          status: "Available",
          type: "Acrona",
          image: "makyajli-2022-seat-arona-1-400x300",
          price: '68,000'
        },
        {
          id: "6",
          category: "SUV",
          brand: "Wolswagen",
          fuel: "Electric",
          transmission: "Automatic",
          status: "Available",
          type: "taigo",
          image: "vw-taigo3832-400x300",
          price: '52,000'
        },
        {
          id: "7",
          category: "SUV",
          brand: "Wolswagen",
          fuel: "Diesel",
          transmission: "Automatic",
          status: "Available",
          type: "T-Cross",
          image: "2019-vw-t-cross-400x300",
          price: '47,000'
        },
        {
          id: "8",
          category: "Sedan",
          brand: "Wolswagen",
          fuel: "Diesel",
          transmission: "Automatic",
          status: "Available",
          type: "Passat",
          image: "volkswagen-passat-1280x720-1-400x300",
          price: '32,000'
        },
      ],

      filterdVehicles:[]
});