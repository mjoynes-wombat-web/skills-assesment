window.onload = function () {
  var contactType = document.getElementById('contact-type').children[0];

  contactType.addEventListener("change", function() {

    var phoneNumbers = document.getElementsByClassName('phone');
    var emails = document.getElementsByClassName('email');

    if (contactType.value === 'phone') {

      for (i =0; i < phoneNumbers.length; i++) {
        phoneNumbers[i].classList.remove('hidden')
      }

      for (i =0; i < emails.length; i++) {
        emails[i].classList.add('hidden')
      }
    } else if (contactType.value === 'email') {

      for (i =0; i < phoneNumbers.length; i++) {
        phoneNumbers[i].classList.add('hidden')
      }

      for (i =0; i < emails.length; i++) {
        emails[i].classList.remove('hidden')
      }
    }
  })
}