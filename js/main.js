/* globals MYPREZ, gtag */
(function() {
  const birthdayInput = document.getElementById('birthday'),
        wikipediaLinks = document.getElementById('wikipedia-links'),
        result = document.getElementById('result');

  let wikipediaImageLink,
      wikipediaLink,
      pic;

  function onDateChange() {
    wikipediaLinks.replaceChildren();  // Delete children

    if (birthdayInput.value) {
      const birthdayDate = new Date(birthdayInput.value),
            birthdayTime = birthdayDate.getTime(),
            administration = MYPREZ.findAdministration(birthdayTime),
            today = new Date();

      if (administration && birthdayDate < today) {
        wikipediaImageLink = document.createElement('a');
        wikipediaImageLink.href = administration.href;

        pic = document.createElement('img');
        pic.src = 'img/' + administration.image;
        pic.alt = administration.president;

        wikipediaImageLink.appendChild(pic);

        wikipediaLink = document.createElement('a');
        wikipediaLink.href = administration.href;
        wikipediaLink.id = 'wikipedia-link';
        wikipediaLink.textContent = 'Wikipedia: ' + administration.president;

        wikipediaLinks.appendChild(wikipediaImageLink);
        wikipediaLinks.appendChild(wikipediaLink);

        result.className = '';
        result.textContent = 'You are a child of the ' + administration.administration + ' administration!';

        gtag('event', 'select_date', {
          'president': administration.administration
        });
      } else {
        result.className = 'error';
        result.innerText = 'Could not determine administration. Only dates between 1900 and today are supported.';

        gtag('event', 'error', {
          'type': 'Administration not found',
          'date': birthdayInput.value
        });
      }
    } else {  // Use case: Clear/Reset date picker
      result.innerText = '';
    }
  }

  birthdayInput.max = new Date().toISOString().split('T')[0];  // Set to today's date
  birthdayInput.addEventListener('change', onDateChange);
})();
