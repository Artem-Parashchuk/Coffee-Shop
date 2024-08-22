const errorName = document.querySelector('.error-name');
const errorEmail = document.querySelector('.error-email');
const errorPhone = document.querySelector('.error-phone');
const errorFooterEmail = document.querySelector('.footer-error__email');

document.addEventListener('DOMContentLoaded', () => {
  // Обробник для основної форми
  const submitForm = document.querySelector('.form-btn');
  if (submitForm) {
    submitForm.addEventListener('click', (event) => {
      event.preventDefault();

      const inputName = document.querySelector('.reservation-name').value.trim();
      const inputEmail = document.querySelector('.reservation-email').value.trim();
      const inputPhone = document.querySelector('.reservation-phone').value.trim();

      let isValid = true;

      if (inputName.length < 2) {
        errorName.style.display = 'block';
        isValid = false;
      } else {
        errorName.style.display = 'none';
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(inputEmail)) {
        errorEmail.style.display = 'block';
        isValid = false;
      } else {
        errorEmail.style.display = 'none';
      }

      const phonePattern = /^\+380\d{9}$/;
      if (!phonePattern.test(inputPhone)) {
        errorPhone.style.display = 'block';
        isValid = false;
      } else {
        errorPhone.style.display = 'none';
      }

      if (!isValid) {
        return;
      }

      // Додаткові дії, якщо форма валідна
    });
  }

  // Обробник для форми у футері
  const submitFooterForm = document.querySelector('.footer-form__btn');
  if (submitFooterForm) {
    submitFooterForm.addEventListener('click', (event) => {
      event.preventDefault();

      const emailFooterInput = document.querySelector('.footer-email__input').value.trim();

      let isValid = true;

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailFooterInput)) {
        errorFooterEmail.style.display = 'block';
        isValid = false;
      } else {
        errorFooterEmail.style.display = 'none';
      }

      if (!isValid) {
        return;
      }

      // Додаткові дії, якщо форма валідна
    });
  }
});
