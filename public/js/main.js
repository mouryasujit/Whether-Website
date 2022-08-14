const submitbtn = document.getElementById("submitbtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temperature = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
let data_hide = document.querySelector(".data_hide");

const showalert = async (event) => {
  event.preventDefault();
  let cityval = cityname.value;
  if (cityval === "") {
    city_name.innerText = "City name Cannot be Empty";
    city_name.style.color = "red";
    data_hide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=993d535273da0e26f98fc01394a36d61`;
      let response = await fetch(url);
      const data = await response.json();
      const arrdata = [data];
      let country = arrdata[0].sys.country;
      temperature.innerText = arrdata[0].main.temp + "°C ";
      temp_symbol = arrdata[0].weather[0].main;
      console.log(temp_symbol);
      if (temp_symbol == "Rain") {
        temp_status.innerHTML =
          "<i class='fas  fa-6x fa-cloud-showers-heavy' style='color:#a4b0be;'></i>";
      } else if (temp_symbol == "Haze") {
        temp_status.innerHTML =
          "<i class='fas  fa-6x fa-cloud-showers-heavy' style='color:#a4b0be;'></i>";
      } else if (temp_symbol == "Clear") {
        temp_status.innerHTML =
          "<i class='fa-solid   fa-6x fa-sun' style='color:#eccc68;'></i>";
      } else {
        temp_status.innerHTML = "<i class='fa  fa-6x fa-cloud fa-6x'></i>";
      }
      city_name.innerText = `${cityval} | ${country}`;
      data_hide.classList.remove("data_hide");
    } catch {
      city_name.innerText = "This city does not Exist";
      city_name.style.color = "red";
      data_hide.classList.add("data_hide");
    }
  }
};

submitbtn.addEventListener("click", showalert);
