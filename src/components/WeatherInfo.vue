<template>
    <div class="weather-info-container">
        <div class="wind-speed-container info">
            <img src="../assets/wind.png" alt="">
            <p>{{ windSpeed }}km/h</p>
        </div>

        <div class="temp-container info">
            <img src="../assets/temp.png" alt="">
            <p>{{ temp }}&deg;C</p>
        </div>

        <div class="humidity-container info">
            <img src="../assets/humidity.png" alt="">
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
