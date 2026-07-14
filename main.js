const input = document.querySelector("input");
const outPut = document.querySelector(".output");
const btn = document.querySelector("#btn");

async function gateData() {
  try {
    const inputval = input.value.trim();
    function check() {
      if (inputval === "") {
        alert("space is not allow");
        return false;
      }
      return true;
    }

    check();

    const api = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${inputval}&aqi=no`,
    );
    const data = await api.json();
    input.value = "";
    outPut.innerHTML = "";

    console.log(inputval);
    console.log(data.current.temp_c);
    console.log(data.current.temp_f);
    console.log(data.location.name);
    console.log(data.location.region);

    const condition = data.current.condition.text;
    const divOne = document.createElement("div");
    divOne.setAttribute("class", "view");
    const image = document.createElement("img");
    image.setAttribute("class", "iMg");

    if (condition === "Moderate or heavy rain with thunder") {
      image.src = "./image/rainy-5.svg";
    } else if (condition === "Clear") {
      image.src = "./image/day.svg";
    } else if (condition === "Sunny") {
      image.src = "./image/day.svg";
    } else if (condition === "Partly cloudy") {
      image.src = "./image/cloudy-day-1.svg";
    } else if (condition === "Overcast") {
      image.src = "./image/rainy-4.svg";
    } else if (condition === "Cloudy") {
      image.src = "./image/cloudy-day-3.svg";
    } else if (condition === "Mist") {
      image.src = "./image/rainy-6.svg";
    } else if (condition === "Light rain shower") {
      image.src = "./image/rainy-6.svg";
    } else if (condition === "Heavy rain") {
      image.src = "./image/rainy-6.svg";
    } else if (condition === "Light rain") {
      image.src = "./image/rainy-5.svg";
    } else if (condition === "Moderate rain") {
      image.src = "./image/rainy-7.svg";
    } else if (condition === "Patchy light rain with thunder") {
      image.src = "./image/rainy-4.svg";
    } else if (condition === "Patchy rain nearby") {
      image.src = "./image/rainy-7.svg";
    } else if (condition === "Thundery outbreaks possible") {
      image.src = "./image/thunder.svg";
    } else if (condition === "Light snow") {
      image.src = "./image/snowy-4.svg";
    } else if (condition === "Heavy snow") {
      image.src = "./image/snowy-6.svg";
    } else if (condition === "Blizzard") {
      image.src = "./image/snowy-2.svg";
    } else {
      image.src = "./image/day.svg";
    }

    const mainContainer = document.createElement("div");
    mainContainer.setAttribute("class", "main-container");
    const divTwo = document.createElement("div");
    divTwo.setAttribute("class", "details");
    const location = document.createElement("div");
    location.textContent = data.location.name;
    location.setAttribute("class", "location");

    const temp = document.createElement("div");
    temp.textContent = `Temp:${data.current.temp_c}`;

    const feels = document.createElement("diiv");
    feels.textContent = `Feels:${data.current.temp_f}`;

    mainContainer.appendChild(divOne);
    divOne.appendChild(image);
    mainContainer.appendChild(divTwo);
    divTwo.appendChild(location);
    divTwo.appendChild(temp);
    divTwo.appendChild(feels);
    // mainContainer.appendChild(temp);
    // mainContainer.appendChild(feels);
    // outPut.appendChild(image);
    outPut.appendChild(mainContainer);
  } catch (error) {
    const newDiv = document.createElement("div");
    newDiv.textContent = "This is not valid location";
    outPut.appendChild(newDiv);
  }
}

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") gateData();
});
btn.addEventListener("click", () => {
  gateData();
});
