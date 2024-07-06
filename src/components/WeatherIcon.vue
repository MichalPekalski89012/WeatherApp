<template>
 <img :src="weatherIconSource" alt="Weather icon" class="weather-icon">
</template>

<script setup>
import {defineProps} from 'vue';
const props = defineProps({
    weatherIconSource:{
        type: String,
        required: true
    }
});

</script>