fetch("../data.json")
  .then((request) => {
    if (!request.ok) {
      console.log("Oops! Something went wrong.");
      return null;
    }

    return request.json();
  })
  .then((data) => {
    console.log(data);
    for (const item in data) {
      const main = document.querySelector("#main");
      const toggleDaily = document.querySelector("#toggle-daily");
      const toggleWeekly = document.querySelector("#toggle-weekly");
      const toggleMonthly = document.querySelector("#toggle-monthly");
      const div = document.createElement("div");
      const title = document.createElement("h2");
      const currentDaily = document.createElement("p");
      const previousDaily = document.createElement("p");
      const currentWeekly = document.createElement("p");
      const previousWeekly = document.createElement("p");
      const currentMonthly = document.createElement("p");
      const previousMonthly = document.createElement("p");
      const time = data[item].timeframes;
      const hour = "hrs";
      title.textContent = data[item].title;

      currentDaily.textContent = time.daily.current + hour;
      previousDaily.textContent = "Last Day - " + time.daily.previous + hour;
      currentWeekly.textContent = time.weekly.current + hour;
      previousWeekly.textContent = "Last Week - " + time.weekly.previous + hour;
      currentMonthly.textContent = time.monthly.current + hour;
      previousMonthly.textContent =
        "Last Month - " + time.monthly.previous + hour;

      div.classList.add(
        "bg-lavender-700",
        "rounded-md",
        "p-6",
        "hover:brightness-150",
        "transition",
      );

      currentDaily.classList.add("daily");
      previousDaily.classList.add("daily");
      currentWeekly.classList.add("weekly");
      previousWeekly.classList.add("weekly");
      currentMonthly.classList.add("monthly");
      previousMonthly.classList.add("monthly");

      main.appendChild(div);
      div.appendChild(title);
      div.appendChild(currentDaily);
      div.appendChild(previousDaily);
      div.appendChild(currentWeekly);
      div.appendChild(previousWeekly);
      div.appendChild(currentMonthly);
      div.appendChild(previousMonthly);
    }
    toggleDaily.addEventListener("click", function () {
      document.body.style.background = "red";
    });
  });
