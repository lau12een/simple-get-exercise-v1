'use strict';

function getDogImage(num) {
  const url = 'https://dog.ceo/api/breeds/image/random/3' + num;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Uh oh, something went wrong. Try again.'));
}

function checkValidInput(val) {
  if(val >= 1 && val <= 50) {
    return true;
  }
  else {
    return false;
  }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let resultNum = $('#num').val();
    if(checkValidInput(resultNum)) {
      console.log(`Results to retrieve: ${resultNum}`);
      getDogImage(resultNum);
    }
    else {
      alert('Not quite, please enter a number between 1 and 50. Try again.')
    }
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});