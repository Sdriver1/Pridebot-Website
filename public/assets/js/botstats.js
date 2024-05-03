async function fetchBotStats() {
  try {
    const response = await fetch("https://api.pridebot.xyz/api/stats");
    const data = await response.json();
    document.getElementById("totalServers").textContent =
      data.currentGuildCount.toLocaleString();
    document.getElementById("totalUsers").textContent =
      data.totalUserCount.toLocaleString();
    document.getElementById("totalcommandsCount").textContent =
      data.commandsCount.toLocaleString();
    document.getElementById("totalcommandUsage").textContent =
      data.totalUsage.toLocaleString();
  } catch (error) {
    console.error("Failed to fetch bot stats:", error);
  }
}

window.onload = fetchBotStats;
