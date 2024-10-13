fetch("../data.json")
  .then((request) => {
    if (!request.ok) {
      console.log("Oops! Something went wrong.");
      return null;
    }

    return request.json();
  })
  .then((data) => {
    for (const item in data) {
      const main = document.querySelector("#main");
      const dashboardSection = document.createElement("li");
      const daily = document.querySelectorAll(".daily");
      const weekly = document.querySelectorAll(".weekly");
      const monthly = document.querySelectorAll(".monthly");
      const toggleDaily = document.querySelector("#toggle-daily");
      const toggleWeekly = document.querySelector("#toggle-weekly");
      const toggleMonthly = document.querySelector("#toggle-monthly");
      const time = data[item].timeframes;
      const title = data[item].title;

      main.appendChild(dashboardSection);
      dashboardSection.innerHTML = /* HTML */ `
        <div
          class="bg-lavender-700 rounded-md p-6 transition hover:brightness-125"
        >
        <img src="../images/icon-${title.toLowerCase()}.svg">
          <div class="flex items-center justify-between mb-2">
            <h2 class="font-rubik font-medium text-white">${title}</h2>
            <img src="../images/icon-ellipsis.svg">
          </div>
          <div class="daily flex justify-between items-center">
            <p class="font-rubik font-light text-white text-4xl">
              <span class="sr-only">Current - </span>${time.daily.current}hrs
            </p>
            <p class="font-rubik  text-lavender-100 font-normal ">Last Day - ${time.daily.previous}hrs</p>
          </div>
          <div class="weekly hidden justify-between items-center">
            <p class="font-rubik font-light text-white text-4xl">
              <span class="sr-only">Current - </span>${time.weekly.current}hrs
            </p>
            <p class="font-rubik  text-lavender-100 font-normal ">Last Week - ${time.weekly.previous}hrs</p>
          </div>
          <div class="monthly hidden justify-between items-center">
            <p class="font-rubik font-light text-white text-4xl">
              <span class="sr-only">Current - </span>${time.monthly.current}hrs
            </p>
            <p class="font-rubik  text-lavender-100 font-normal ">Last Month - ${time.monthly.previous}hrs</p>
          </div>
        </div>
      `;

      toggleDaily.onclick = function () {
        toggleDaily.classList.add("border-green-400");
        toggleDaily.classList.remove("border-red-400");
        toggleWeekly.classList.add("border-red-400");
        toggleWeekly.classList.remove("border-green-400");
        toggleMonthly.classList.add("border-red-400");
        toggleMonthly.classList.remove("border-green-400");

        for (const element of daily) {
          element.classList.add("flex");
          element.classList.remove("hidden");
        }
        for (const element of weekly) {
          element.classList.add("hidden");
          element.classList.remove("flex");
        }
        for (const element of monthly) {
          element.classList.add("hidden");
          element.classList.remove("flex");
        }
      };

      toggleWeekly.onclick = function () {
        toggleDaily.classList.add("border-red-400");
        toggleDaily.classList.remove("border-green-400");
        toggleWeekly.classList.add("border-green-400");
        toggleWeekly.classList.remove("border-red-400");
        toggleMonthly.classList.add("border-red-400");
        toggleMonthly.classList.remove("border-green-400");

        for (const element of daily) {
          element.classList.add("hidden");
          element.classList.remove("flex");
        }
        for (const element of weekly) {
          element.classList.add("flex");
          element.classList.remove("hidden");
        }
        for (const element of monthly) {
          element.classList.add("hidden");
          element.classList.remove("flex");
        }
      };

      toggleMonthly.onclick = function () {
        toggleDaily.classList.add("border-red-400");
        toggleDaily.classList.remove("border-green-400");
        toggleWeekly.classList.add("border-red-400");
        toggleWeekly.classList.remove("border-green-400");
        toggleMonthly.classList.add("border-green-400");
        toggleMonthly.classList.remove("border-red-400");

        for (const element of daily) {
          element.classList.add("hidden");
          element.classList.remove("flex");
        }
        for (const element of weekly) {
          element.classList.add("hidden");
          element.classList.remove("flex");
        }
        for (const element of monthly) {
          element.classList.add("flex");
          element.classList.remove("hidden");
        }
      };
    }
  });
