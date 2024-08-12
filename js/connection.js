function getDataBaseSupabase() {
  fetch('https://bptstnuslddxmbsbenpm.supabase.co/rest/v1/countries?select=*', {
    method: 'GET',
    headers: {
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwdHN0bnVzbGRkeG1ic2JlbnBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5NTQ2MjQsImV4cCI6MjAzNzUzMDYyNH0.efhMi9nfxrcgRhg4LAF4pCCrZ8FH5DzML-xIf7Ku1-M', // Reemplaza con tu clave API
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwdHN0bnVzbGRkeG1ic2JlbnBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5NTQ2MjQsImV4cCI6MjAzNzUzMDYyNH0.efhMi9nfxrcgRhg4LAF4pCCrZ8FH5DzML-xIf7Ku1-M' // Reemplaza con tu clave API
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