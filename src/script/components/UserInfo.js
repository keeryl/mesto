
class UserInfo {

  constructor({ nameSelector, infoSelector, avatarSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userInfo = document.querySelector(infoSelector);
    this._avatar = document.querySelector(avatarSelector)
  }

  getUserInfo () {
    const profileContent = { name: this._userName.textContent, description: this._userInfo.textContent, avatar: this._avatar.src};
    return profileContent;
  }

  setUserInfo (newUserName, newUserInfo) {
    this._userName.textContent = newUserName;
    this._userInfo.textContent = newUserInfo;
  }

  setUserAvatar (newAvatarLink) {
    this._avatar.src = newAvatarLink;
  }

}

export { UserInfo };
