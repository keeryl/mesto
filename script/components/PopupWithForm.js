
// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.


import { Popup } from './Popup.js';

export default Class PopupWithForm extends Popup {

  constructor() {
    // Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
  }

  _getInputValues() {
    // собирает данные всех полей формы.
  }

  setEventListeners() {
    // Перезаписывает родительский метод setEventListeners.
    // Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика
    // иконке закрытия, но и добавлять обработчик сабмита формы.
  }

  close() {
    // Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
  }
}
