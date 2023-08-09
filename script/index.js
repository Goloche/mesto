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

let formElement = document.querySelector(".form");

let nameInput = formElement.querySelector("#name-input");
let descriptionInput = formElement.querySelector("#description-input");

function handleFormSubmit(evt) {
  evt.preventDefault();

  let newName = nameInput.value;
  let newdescription = descriptionInput.value;

  let profileName = document.querySelector(".profile__name-title");
  let profileDescription = document.querySelector(".profile__name-description");

  profileName.textContent = newName;
  profileDescription.textContent = newdescription;

  nameInput.value = "";
  descriptionInput.value = "";
}

formElement.addEventListener("submit", handleFormSubmit);
