function updateTimeAndDay() {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');

    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[now.getUTCDay()];

    currentTimeElement.textContent = `Current Time in UTC: ${utcTime}`;
    currentDayElement.textContent = `Current Day: ${currentDay}`;
}

// Update the time and day immediately and then every minute
updateTimeAndDay();
setInterval(updateTimeAndDay, 60000);
