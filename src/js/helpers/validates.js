/** @format */

const regExpDic = {
  email:
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
  password: /^[0-9a-zA-Z]{4,}$/,
};
/**
 * function validate .Check Input on RegExp provided in regExDic by input data-required type
 * @param {HTMLInputElement} el
 * @returns {Boolean}  -REturn true if input valid or doesn't has data-reqiured attr
 */

export function validate(el) {
  const regExpName = el.dataset.required;
  console.log(regExpName);
}
