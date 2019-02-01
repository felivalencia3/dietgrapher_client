/* eslint-disable */
let $password = $('#password');

  
var $confirmPassword = $('#confirm_password');

function isPasswordValid() {
  return $password.val().length > 6;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent() {
  isPasswordValid() ? $password.next().hide() : $password.next().show();
}

function confirmPasswordEvent() {
  arePasswordsMatching() ? $confirmPassword.next().hide() : $confirmPassword.next().show();
}

function enableSubmitEvent() {
  $('#submit').prop('disabled', !canSubmit());
}
$('form span').hide(), $password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent), $confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent), enableSubmitEvent();