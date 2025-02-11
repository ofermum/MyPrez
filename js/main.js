/* globals MYPREZ, gtag */
(function() {
  const monthSelector = document.getElementById('month'),
        dayInput = document.getElementById('day'),
        yearInput = document.getElementById('year'),
        tellMeButton = document.getElementById('tell-me'),
        wikipediaLinks = document.getElementById('wikipedia-links'),
        resultP = document.getElementById('result');

  function isValidDate() {
    let birthday;

    if (monthSelector.value === '--Month--') {
      return false;
    }

    if (!Number.isInteger(parseFloat(dayInput.value)) || !Number.isInteger(parseFloat(yearInput.value))) {
      return false;
    }

    birthday = new Date(monthSelector.value + '/' + dayInput.value + '/' + yearInput.value);

    if (isNaN(birthday)) {
      return false;
    }

    return true;
  }

  function isSupportedDate() {
    let birthday,
        today;

    if (parseInt(yearInput.value) < 1900) {
      return false;
    }

    birthday = new Date(monthSelector.value + '/' + dayInput.value + '/' + yearInput.value);
    today = new Date();

    if (birthday > today) {
      return false;
    }

    return true;
  }

  function showError(message) {
    resultP.className = 'error';
    resultP.innerText = message;
  }

  function tellMe() {
    wikipediaLinks.replaceChildren();  // Delete existing content

    if (isValidDate()) {
      if (isSupportedDate()) {
        const birthday = new Date(monthSelector.value + '/' + dayInput.value + '/' + yearInput.value);
        const administration = MYPREZ.findAdministration(birthday.getTime());

        if (administration) {
          const wikipediaImageLink = document.createElement('a'),
                pic = document.createElement('img'),
                wikipediaLink = document.createElement('a');

          wikipediaImageLink.href = administration.href;
          pic.src = 'img/' + administration.image;
          pic.alt = administration.president;
          wikipediaImageLink.appendChild(pic);

          wikipediaLink.href = administration.href;
          wikipediaLink.id = 'wikipedia-link';
          wikipediaLink.textContent = 'Wikipedia: ' + administration.president;

          wikipediaLinks.appendChild(wikipediaImageLink);
          wikipediaLinks.appendChild(wikipediaLink);

          resultP.className = '';
          resultP.textContent = 'You are a child of the ' + administration.administration + ' administration!';
        } else {
          showError('Unexpected error. Could not determine administration.');
        }
      } else {
        showError('Only dates between 1900 and today are supported.');
      }
    } else {
      showError('Invalid date.');
    }
  }

  tellMeButton.addEventListener('click', tellMe);
})();
