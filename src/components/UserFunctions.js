import axios from 'axios'

export const register = newUser => {
    return axios
    .post('users/register', {
        email: newUser.email,
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        company: newUser.company,
        password: newUser.password
    })
    .then(res => {
        console.log("Registred")
    })
}

export const login = user => {
    return axios
      .post('users/login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        localStorage.setItem('usertoken', response.data)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }