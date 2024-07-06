<template>
<form @submit.prevent="onSubmit">
    <input type="text" name="city" id="city" v-model="city" placeholder="podaj miasto...">
    <button></button>
    <!-- <img src="../assets/search.png" alt="" class="search-icon">  -->
</form>
</template>


<script setup>
import {ref} from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();

const city = ref('');

const emit = defineEmits(['cityNameSubmitted']);

function onSubmit(){
    
    if(!city.value){
        toast.error('wypełnij pole!');
        return;
    }
    const cityName = city.value;
    emit('cityNameSubmitted',cityName);
}


</script>

<style scoped>
input{
    height: 64px;
    
}

img{
    width: 16px;
}

</style>