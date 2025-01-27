/* global MYPREZ */
(function() {
  const birthdayInput = document.getElementById('birthday'),
        pic = document.getElementById('pic'),
        resultP = document.getElementById('result');

  function onDateChange() {
    const birthdayTime = new Date(this.value).getTime(),
          administration = MYPREZ.findAdministration(birthdayTime);

    pic.src = 'img/' + administration.image;
    pic.alt = administration.president;
    resultP.innerText = 'You are a child of the ' + administration.administration + ' administration!';
  }

  birthdayInput.max = new Date().toISOString().split('T')[0];  // Set to today's date
  birthdayInput.addEventListener('change', onDateChange);
})();
