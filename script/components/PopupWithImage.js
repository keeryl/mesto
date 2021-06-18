
import { Popup } from './Popup.js';


export default class PopupWithImage extends Popup {
  constructor() {

  }

  open {
    // Этот класс должен перезаписывать родительский метод open
    // В методе open класса PopupWithImage нужно
    // вставлять в попап картинку и атрибут src изображения и подпись к картинке.
  }

}
