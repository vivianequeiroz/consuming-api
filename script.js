// Await for a response

async function getContent() {
  try {
    const response = await fetch("http://localhost:4567/");
  } catch (error) {
    console.log(error);
  }
}

getContent();
