<template>
 <img :src="weatherIconSource" alt="">
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