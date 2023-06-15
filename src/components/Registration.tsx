import React from 'react'

import { closePopup, setPopupType } from '../redux/slices/headerSlice';
import { useAppDispatch } from '../redux/store';
import axios from 'axios';

const close =  require('../images/close.png')

const Registration = () => {

	async function registration() {
		const user = await axios.post("http://localhost:5000/api/user", {
			name: name,
			login: login,
			password: password,
		})
		console.log(user)
	}

    const dispatch = useAppDispatch()

    const [name, setName] = React.useState("")
    const [login, setLogin] = React.useState("")
    const [password, setPassword] = React.useState("")
  
    return (
      <div className="popup">
        <h2 className="popup__title">Регистрация</h2>
        <form className="popup__form">
					<input type="text" autoComplete='off' value={name} className="popup__input" name='login' placeholder='Логин' onChange={(e) => setName(e.target.value)}/>
					<input type="email" autoComplete='off' value={login} className="popup__input" name='login' placeholder='Логин' onChange={(e) => setLogin(e.target.value)}/>
					<input type="password" autoComplete='off' value={password}  className="popup__input" name='password' placeholder='Пароль' onChange={(e) => setPassword(e.target.value)}/>
					<button onClick={(e) => {
						registration()
						e.preventDefault()
					}} className="popup__button">Зарегестрироваться</button>
        </form>
        <div>Уже есть аккаунт? <span onClick={() => dispatch(setPopupType())}>Войти</span></div>
        <img className='popup__close' src={close} alt="" onClick={() => {
            dispatch(closePopup())
        }} />
      </div>
  )
}

export default Registration