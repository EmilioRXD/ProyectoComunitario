function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const url = 'https://bptstnuslddxmbsbenpm.supabase.co/rest/v1/';
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwdHN0bnVzbGRkeG1ic2JlbnBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5NTQ2MjQsImV4cCI6MjAzNzUzMDYyNH0.efhMi9nfxrcgRhg4LAF4pCCrZ8FH5DzML-xIf7Ku1-M';

function getDataBaseSupabase() {
  fetch(url, {
    method: 'GET',
    headers: {
      'apikey': apiKey,
      'Authorization': `Bearer ${apiKey}`
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
}


const form = document.getElementById('system-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const person = [];
  const relationship = [];

  if (form.boss.value == 1) {
    for (let i = 1; i <= form.family.value; i++) {
      person.push({
        cedula: document.getElementById(`cedula${i}`).value,
        firstname: document.getElementById(`firstname${i}`).value,
        lastname: document.getElementById(`lastname${i}`).value,
        gender: document.getElementById(`gender${i}`).value,
        kinship: i == 1 ? 'Jefe de Familia' : document.getElementById(`kinship${i}`).value,
        boss: form.streetBoss.value
      });
    }
    for (let i = 2; i <= form.family.value; i++) {
      relationship.push({
        cedula_jefe: form.cedula1.value,
        cedula: document.getElementById(`cedula${i}`).value
      })
    }

    await fetch(`${url}Persona`, {
      method: 'POST',
      headers: {
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(person)
    })
      .then(response => {
        if (response.ok) {
          console.log('Data successfully sent.');
        } else {
          console.error('Error:', response.statusText);
        }
      })
      .catch(error => console.error('Request failed:', error));

    await fetch(`${url}Relacion`, {
      method: 'POST',
      headers: {
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(relationship)
    })
      .then(response => {
        if (response.ok) {
          console.log('Data successfully sent.');
        } else {
          console.error('Error:', response.statusText);
        }
      })
      .catch(error => console.error('Request failed:', error));

    await fetch(`${url}Contacto`, {
      method: 'POST',
      headers: {
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        cedula: form.cedula1.value,
        phone: form.phone.value,
        email: form.email.value,
        address: form.address.value
      })
    })
      .then(response => {
        if (response.ok) {
          console.log('Data successfully sent.');
        } else {
          console.error('Error:', response.statusText);
        }
      })
      .catch(error => console.error('Request failed:', error));
  } else if (form.boss.value == 0) {
    await fetch(`${url}Persona`, {
      method: 'POST',
      headers: {
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        cedula: form.cedula1.value,
        firstname: form.firstname1.value,
        lastname: form.lastname1.value,
        gender: form.gender1.value,
        kinship: form.kinship1.value,
        boss: form.streetBoss.value
      })
    })
      .then(response => {
        if (response.ok) {
          console.log('Data successfully sent.');
        } else {
          console.error('Error:', response.statusText);
        }
      })
      .catch(error => console.error('Request failed:', error));

    await fetch(`${url}Relacion`, {
      method: 'POST',
      headers: {
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        cedula_jefe: form.relationship.value,
        cedula: form.cedula1.value
      })
    })
      .then(response => {
        if (response.ok) {
          console.log('Data successfully sent.');
        } else {
          console.error('Error:', response.statusText);
        }
      })
      .catch(error => console.error('Request failed:', error));
  }
  document.getElementById('system-form').classList.remove('mostrar');
  await sleep(1000)
  document.getElementById('exito').classList.add('mostrar');
});