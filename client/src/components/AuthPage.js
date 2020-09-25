import React, {useState, useEffect, useContext} from 'react'
import {useHttp} from './../hooks/http.hook'
import {useMessage} from './../hooks/message.hook'
import {AuthContext} from './../context/AuthContext'

const AuthPage = () => {
  const auth = useContext(AuthContext)
  const {loading, error, request, clearError} = useHttp()
  const [form, setForm] = useState({email: '', password: ''})
  const message = useMessage()
  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const changeHandler = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      message(data.message)
    } catch (e) {}
  }
  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
    } catch (e) {}
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1 className="center-align">Сократи ссылку</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
            <div>
              <div className="input-field">
                <input
                  placeholder="Введите email"
                  id="email"
                  type="text"
                  name="email"
                  className="yellow-input"
                  onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  placeholder="Введите пароль"
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input"
                  onChange={changeHandler}
                />
                <label htmlFor="password">Пароль</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn yellow darken-3"
              style={{marginRight: '10px'}}
              disabled={loading}
              onClick={loginHandler}
            >
              Войти
            </button>
            <button
              disabled={loading}
              onClick={registerHandler}
              className="btn grey lighten-1"
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
