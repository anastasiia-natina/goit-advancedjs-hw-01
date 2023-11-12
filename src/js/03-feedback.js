import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

// Функція для збереження значень полів у локальне сховище з використанням throttle
const saveFormData = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500);

// Функція для відновлення значень полів форми з локального сховища
const restoreFormData = () => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (storedData) {
    try {
      const parsedData = JSON.parse(storedData);
      emailInput.value = parsedData.email;
      messageTextarea.value = parsedData.message;
    } catch (error) {
      console.error('Error parsing stored data:', error);
    }
  }
};

// Додаємо обробники подій
feedbackForm.addEventListener('input', saveFormData);
window.addEventListener('load', restoreFormData);

// Додаємо обробник події сабміту форми
feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Очищуємо сховище та поля форми
  localStorage.removeItem(STORAGE_KEY);
  emailInput.value = '';
  messageTextarea.value = '';

  // Виводимо об'єкт з полями у консоль
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(formData);
});
