<template>
<form @submit.prevent="onSubmit">
    <input type="text" name="city" id="city" v-model="city" placeholder="podaj miasto...">
    <button><img src="../assets/search_24dp_FILL0_wght400_GRAD0_opsz24.png" alt=""> </button>
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