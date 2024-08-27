let addfill = (event) => {
    if (event.target.tagName === 'LI') {
      document.getElementById('listValue').innerText = `My favorite language is ${event.target.textContent}`;
    }
  }
  
  document.getElementById('myList').addEventListener('click', addfill);
  