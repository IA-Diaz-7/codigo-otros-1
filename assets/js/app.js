//IBER ALEJANDRO PEREZ DIAZ CAL:4

//Se corrigio las rutas del CCS y del JS para que estuviera bien conectados con el html
//se agrego async en la function para que funcionara el await
//y se corrigio parte de la fuction que manda el error.

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.getElementsByClassName('name');
const $b = document.getElementsByClassName('blog');
const $l = document.getElementsByClassName('location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(`Algo salió mal, ${err}`);
  //n.textContent =
}

displayUser('stolinski').catch(handleError);