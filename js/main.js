/* global MYPREZ */
(function() {
  const birthdayInput = document.getElementById('birthday'),
        link = document.getElementById('wikipedia_link'),
        pic = document.getElementById('pic'),
        resultP = document.getElementById('result');

  function onDateChange() {
    if (birthdayInput.value) {
      const birthdayTime = new Date(birthdayInput.value).getTime(),
            administration = MYPREZ.findAdministration(birthdayTime);

      pic.src = 'img/' + administration.image;
      pic.alt = administration.president;
      link.href = administration.href;
      resultP.innerText = 'You are a child of the ' + administration.administration + ' administration!';
    }
  }

  birthdayInput.max = new Date().toISOString().split('T')[0];  // Set to today's date
  birthdayInput.addEventListener('change', onDateChange);
})();
