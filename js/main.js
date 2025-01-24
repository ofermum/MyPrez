(function() {
  const birthdayInput = document.getElementById('birthday'),
        resultP = document.getElementById('result');

  function onDateChange() {
    const birthdayTime = new Date(this.value).getTime();

    /* global MYPREZ */
    resultP.innerText = 'You are a child of the ' + MYPREZ.findAdministration(birthdayTime) + ' administration!';
  }

  birthdayInput.max = new Date().toISOString().split('T')[0];  // Set to today's date
  birthdayInput.addEventListener('change', onDateChange);
})();
