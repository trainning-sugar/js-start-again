async function fetchData () {

  const loading = document.getElementById('loading');
  const data = document.getElementById('data');

  loading.style.display = 'block';
  data.textContent = '';

  try {

    const response = await new Promise((resolve, reject) => {

      setTimeout(() => {
        Math.random()> 0.5 ? resolve('Data complete load') : reject('Hubo un error al momento de cargar los datos');
      }, 3000);
    });
    
    data.textContent = response;
    data.style.color = "green";

  } catch (error) {
    console.error(error);
    data.textContent = error;
    data.style.color = "red";
  } finally {
    loading.style.display = 'none';
  }

}