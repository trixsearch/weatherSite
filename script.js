const button = document.getElementById("searchBtn");
const input = document.getElementById("cityName");
const cityName = document.getElementById("cName");
const cityTime = document.getElementById("cTime");
const cityTemp = document.getElementById("cTemp");

async function getData(cityName){
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=d27797080aad4f6199e133626240403&q=${cityName}&aqi=yes`);
    return await data.json();
}

button.addEventListener("click",async () => {
    const value = input.value;
    const result =  await getData(value);
    // console.log(result);
    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    cityTime.innerText =`Time : ${result.location.localtime}, Last Updated : ${result.current.last_updated}`;
    cityTemp.innerText = `Temperature : ${result.current.temp_c} celcius`;
});

// http://api.weatherapi.com/v1/current.json?key=d27797080aad4f6199e133626240403&q=London&aqi=yes
