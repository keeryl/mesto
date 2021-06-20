
class UserInfo {

  constructor({ nameSelector, infoSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userInfo = document.querySelector(infoSelector);
  }

  getUserInfo() {
    const profileContent = { name: this._userName.textContent, description: this._userInfo.textContent};
    return profileContent;
  }

  setUserInfo(newUserName, newUserInfo) {
    this._userName.textContent = newUserName;
    this._userInfo.textContent = newUserInfo;
  }

}

export { UserInfo };