var input = document.querySelector('.form-main__input');
var popupWrong = document.querySelector('.popup-wrong--js');
var popupSuccess = document.querySelector('.popup-success--js');
var buttonForm = document.querySelector('.form-main__button');
var closePopup = document.querySelector('.close-popup-wrong');
var closePopupSuccess = document.querySelector('.close-popup-success');
popupWrong.classList.remove('popup-wrong--off');
popupSuccess.classList.remove('popup-success--off');
closePopup.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupWrong.classList.remove('popup-wrong--off');
});
closePopupSuccess.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupSuccess.classList.remove('popup-success--off');
});
buttonForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  if(input.validity.valid) {
    popupWrong.classList.remove('popup-wrong--off');
    popupSuccess.classList.add('popup-success--off');
  } else {
    popupSuccess.classList.remove('popup-success--off');
    popupWrong.classList.add('popup-wrong--off');
  }
});
