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

      if (administration) {
        wikipediaImageLink.href = administration.href;
        pic.src = 'img/' + administration.image;
        pic.alt = administration.president;
        wikipediaLink.href = administration.href;
        wikipediaLink.innerText = 'Wikipedia: ' + administration.president;
        result.className = '';
        result.innerText = 'You are a child of the ' + administration.administration + ' administration!';

        gtag('event', 'select_date', {
          'president': administration.administration
        });
      } else {
        wikipediaImageLink.href = '';
        pic.src = '';
        pic.alt = '';
        wikipediaLink.href = '';
        wikipediaLink.innerText = '';
        result.className = 'error';
        result.innerText = 'Could not determine administration. Only dates after 1900 are supported.';
        gtag('event', 'error', {
          'type': 'Administration not found',
          'date': birthdayInput.value
        });
      }
    }
  }

  birthdayInput.max = new Date().toISOString().split('T')[0];  // Set to today's date
  birthdayInput.addEventListener('change', onDateChange);
})();
