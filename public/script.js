window.onload = function () {
  const gamesButton = document.getElementById("games");
  const statsButton = document.getElementById("stats");
  const leadsButton = document.getElementById("leads");

  gamesButton.onclick = function () {
    console.log("games clicked");
  };
  statsButton.onclick = function () {
    console.log("stats clicked");
  };
  leadsButton.onclick = function () {
    console.log("leads clicked");
  };
};
