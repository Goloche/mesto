/*like*/
const buttons = document.querySelectorAll(".element__button-like");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("element__button-like_liked");
  });
});

const profileEditButton = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
const popupClosed = document.querySelector(".popup__button-close");

profileEditButton.addEventListener("click", () => {
  popup.classList.add("popup_opened");
});

popupClosed.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
});
