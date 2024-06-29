<template>
    <div class="weather-info-container">
        <div class="wind-speed-container">
            <figure>
                <img src="../assets/wind.png" alt="">
                <figcaption>Prędkość wiatru</figcaption>
            </figure>
            <p>{{ windSpeed }}km/h</p>
        </div>

        <div class="temp-container">
            <figure>
                <img src="../assets/temp.png" alt="">
                <figcaption>Temperatura</figcaption>
            </figure>
            <p>{{ temp }}</p>
        </div>

        <div class="humidity-container">
            <figure>
                <img src="../assets/humidity.png" alt="">
                <figcaption>Wilgotność</figcaption>
            </figure>
            <p>{{ humidity }}%</p>
        </div>

    </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    temp: {
        type: Number,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    },
    windSpeed: {
        type: Number,
        required: true
    }
});



</script>
