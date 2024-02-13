const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const yellow = document.querySelector("#yellow");

document.querySelectorAll('.container').forEach(button => {
    button.addEventListener('click', function(event) {
      const color = event.target.id;
      document.getElementById('message').innerText = `You clicked on ${color}`;
      document.getElementById('message').style.display = 'block';
      setTimeout(function() {
        document.getElementById('message').style.display = 'none';
      }, 5000);
    });
  });