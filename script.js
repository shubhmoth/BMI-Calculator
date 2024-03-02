const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  console.log(height);
  console.log(weight);
  const result = document.querySelector('#results');
  if (height == '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please Give A Valid Height';
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please Give A Valid Weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `<span>Your BMI is ${bmi} and you are Under Weight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span>Your BMI is ${bmi} and you are NORMAL</span>`;
    } else {
      result.innerHTML = `<span>Your BMI is ${bmi} and you are Overweight</span>`;
    }
  }
});
