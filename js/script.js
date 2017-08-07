window.onload = function () {
  var contactType = document.getElementById('contact-type').children[0];
  contactType.addEventListener("change", function() {toggleContact(contactType.value)})
};

function toggleContact(value) {
  var toShow = document.getElementsByClassName(value);
  var toHide;

  if (value === 'phone') {
    toHide = document.getElementsByClassName('email');
  } else if (value === 'email') {
    toHide = document.getElementsByClassName('phone');
  };

  for (i = 0; i < toShow.length; i++) {
    toShow[i].style.display = "block";
  };

  for (i = 0; i < toHide.length; i++) {
    toHide[i].style.display = "none";
  };
};
