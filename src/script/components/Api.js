//////////ТОКЕН//////////////
// Токен: 4e3158fe-c157-45ee-9ba8-36277de198c7
// Идентификатор группы: cohort-25
/////////*****//////////////


class Api {
  constructor (config) {
    this._url = config.baseUrl;
    this._token = config.token;
    this._avatar = document.querySelector(config.userAvatarSelector);
    this._userName = document.querySelector(config.userNameSelector);
    this._userInfo = document.querySelector(config.userInfoSelector);
  }

  getUserInfo () {

    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._token,
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    })
    .then((result) => {
      return result;
    });

  }

  getInitialCards () {

    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._token,
      },
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    })
    .then((result) => {
      return result;
     });

  }

  editUserProfile (userName, userInfo) {

    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userName,
        about: userInfo,
      }),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`)
    })
    .then(result => {
      return result;
    });

  }

  addCard (cardTitle, cardLink) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: cardTitle,
        link: cardLink,
      }),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    })
    .then(result => {
      return result;
    });
  }

  deleteCard (cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    })
    .then(result => {
      return result;
    });
  }

  addLike (cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
      },
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    })
    .then(result => {
      return result;
    });
  }

  removeLike (cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    })
    .then(result => {
      return result;
    });
  }

  editAvatar (newUrl) {

    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: newUrl,
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    })
    .then(result => {
      return result;
    });

  }

}

export { Api };
