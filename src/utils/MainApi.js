class MainApi {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._header = config.header;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  authUser(data) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    }).then(this._checkResponse);
  }

  registrationUser(data) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        name: data.name
      })
    }).then(this._checkResponse);
  }

  patchProfile(data, jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${jwt}`
      },
      authorization: `Bearer ${jwt}`,
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    }).then(this._checkResponse);
  }

  checkedToken(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${jwt}`
    }
    }).then(this._checkResponse);
  }
}

export const mainApi = new MainApi({
  baseUrl: "https://api.movies41.students.nomoredomains.sbs",
  header: {
    "Content-Type": "application/json"
  }
});
