function getTimeOfDay() {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "Good Afternoon";
  } else if (currentHour >= 17 && currentHour < 20) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}
if(localStorage.getItem('userIsLoggedIn')){
    const timeHeading = document.getElementById('top-playlist-time');
    timeHeading.innerText = getTimeOfDay();
}