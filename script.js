// Await for a response

async function getContent() {
  try {
    const response = await fetch("http://localhost:4567/");
    console.log(response);

    const data = await response.json();
    showData(data);

  } catch (error) {
    console.log(error);
  }
}

getContent();

function showData(users) {

  let output = '';

  for (let user of users) {
    output += `<li>${user.name}</li>`;
  }

  document.querySelector('p').innerHTML = output;
}
