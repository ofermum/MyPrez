/* globals MYPREZ, gtag */
(function() {
  const birthdayInput = document.getElementById('birthday'),
        wikipediaImageLink = document.getElementById('wikipedia-image-link'),
        wikipediaLink = document.getElementById('wikipedia-link'),
        pic = document.getElementById('pic'),
        result = document.getElementById('result');

  function onDateChange() {
    if (birthdayInput.value) {
      const birthdayTime = new Date(birthdayInput.value).getTime(),
            administration = MYPREZ.findAdministration(birthdayTime);

      pic.src = 'img/' + administration.image;
      pic.alt = administration.president;
      wikipediaImageLink.href = administration.href;
      wikipediaLink.innerText = 'Wikipedia: ' + administration.president;
      wikipediaLink.href = administration.href;
      result.innerText = 'You are a child of the ' + administration.administration + ' administration!';

      gtag('event', 'select_date', {
        'president': administration.administration
      });
    }
  }

  birthdayInput.max = new Date().toISOString().split('T')[0];  // Set to today's date
  birthdayInput.addEventListener('change', onDateChange);
})();
