let button = document.querySelector('button');
let advice = document.querySelector('.advice-text');
let number = document.querySelector('.advice-number');


//random button//
button.addEventListener("click", askAdvice());

// asking the advice //
function askAdvice() {
  fetch("https://api.adviceslip.com/advice")
  .then((response) => {
    if(!response.ok) {
      throw new Error (`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((response) => {
    advice.innerHTML = `"${response.slip.advice}"`;
    number.innerHTML = `#${response.slip.id}`;
  })
  .catch((error) => {
    advice.textContent = `Could not fetch advice: ${error}`;
  });
}

//to ask another advice - reload the page//
button.addEventListener('click', function(){

  location.reload();
  return false;

});