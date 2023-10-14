import {API_URI, JWT_TOKEN} from './config'

const authHeaders = {
  Authorization: `Bearer ${JWT_TOKEN}`
}

export default {
  getCurrentMovieOnTheaters: (query: { page: number, language: string }): Promise<any> => {
    return fetch(`${API_URI}/movie/now_playing?language=${query.language}&page=${query.page}`, {
      headers: authHeaders,
      method: 'GET'
    }).then(res => {
      if (res && res.ok) {
        return res.json()
      }
    })
  },
  getMovieDetails: (movieId: string, language: string): Promise<any> => {
    return fetch(`${API_URI}/movie/${movieId}?language=${language}'`, {
      headers: authHeaders,
      method: 'GET'
    }).then(res => {
      if (res && res.ok) {
        return res.json()
      }
    })
  }
}
