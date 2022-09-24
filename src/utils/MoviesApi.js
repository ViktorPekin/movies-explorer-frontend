class MoviesApi {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._header = config.header;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((res) => {
      if (res.validation) {
        throw new Error(res.validation.body.message);
      } else {
        throw new Error(res.message);
      }
    })
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: 'GET',
      headers: this._header
    }).then(this._checkResponse);
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co",
  header: {
    "Content-Type": "application/json"
  }
});
