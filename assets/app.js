
let currentIndex = 0;
let incidents = [];

async function loadIncidents() {
  const response = await fetch('data/incidents.json');
  incidents = await response.json();
  displayIncident();
}

function displayIncident() {
  const incident = incidents[currentIndex];
  const container = document.getElementById('incident-container');
  container.innerHTML = `
    <h2>Catégorie : ${incident.category}</h2>
    <p><strong>N° de cas :</strong> <a href="${synergi_url}${incident.case_id}</a></p>
    <p><strong>Date :</strong> ${incident.date}, ${incident.time}</p>
    <p><strong>Comptage :</strong> ${incident.count}</p>
    <p><strong>Description :</strong> ${incident.description}</p>
  `;
}

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    displayIncident();
  }
});

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentIndex < incidents.length - 1) {
    currentIndex++;
    displayIncident();
  }
});

loadIncidents();
