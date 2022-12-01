/** @format */

import "bootstrap/dist/css/bootstrap.css";
import "../css/style.css";

import UI from "./config/ui.confi";
import { validate } from "./helpers/validates";

const { form, inputEmail, inputPassword } = UI;
const inputs = [inputEmail, inputPassword];
//Events
form.addEventListener("submit", (e) => {
  e.proventDefult();
  onSubmit();
});

//Handlers
function onSubmit() {
  const isValidForm = inputs.every((el) => {
    const isValidInput = validate(el);
    return isValidInput;
  });

  console.log(isValidForm);
}
