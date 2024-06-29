<template>
<CityForm @cityNameSubmitted = "handleCityNameSubmitted" />
<WeatherIcon :weatherIconSource="weatherIconSource"/>
<WeatherInfo :temp="+temp" :humidity="humidity" :windSpeed="windSpeed"/>


</template>


<script setup>
import CityForm from './components/CityForm.vue'
import WeatherIcon from './components/WeatherIcon.vue'
import WeatherInfo from './components/WeatherInfo.vue'
import { ref, computed} from 'vue';

const apiKey = 'bf968c470f74c616ce9d261feca2c2f4';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`

let temp = ref(0);
let humidity = ref(0);
let weatherIconSource = ref('');
let windSpeed = ref(0);

async function getWeather(city){
    const response = await fetch(apiUrl + `&q=${city}`);
    let weatherData = await response.json();
    temp.value = weatherData.main.temp;
    humidity.value = weatherData.main.humidity;
    weatherIconSource.value = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    windSpeed.value = weatherData.wind.speed;
}

const handleCityNameSubmitted = (cityName) =>{
    getWeather(cityName);
}

</script>