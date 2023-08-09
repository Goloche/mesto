/*like*/
const buttons = document.querySelectorAll(".js_element__button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("element__button-like_liked");
  });
});

const profileEditButton = document.querySelector(".js_profile__button-edit");
const popup = document.querySelector(".js_popup");
const popupClosed = document.querySelector(".js_popup__button-close");

profileEditButton.addEventListener("click", () => {
  popup.classList.add("popup_opened");
});

popupClosed.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
});
