import React from 'react'
import { closePopup, setPopupType } from '../redux/slices/headerSlice';
import { useAppDispatch } from '../redux/store';
import axios from 'axios';
import { setUser } from '../redux/slices/userSlice';

const close =  require('../images/close.png')


const Authorization = () => {
	
	const dispatch = useAppDispatch()

	async function authorization() {
		const { data } = await axios.get(`http://localhost:5000/api/user/${login}/${password}`)

		document.cookie = `id=${data.user_id}`
		
		if(data) {
			dispatch(setUser(data))
			dispatch(closePopup())
		}
	}


  const [login, setLogin] = React.useState("")
  const [password, setPassword] = React.useState("")


  return (
    <div className="popup">
			<h2 className="popup__title">Войти</h2>
			<form className="popup__form" autoComplete="off">
				<input type="email" autoComplete='off' value={login} className="popup__input" name='login' placeholder='Логин' onChange={(e) => setLogin(e.target.value)}/>
				<input type="password" autoComplete='off' value={password}  className="popup__input" name='password' placeholder='Пароль' onChange={(e) => setPassword(e.target.value)}/>
				<button onClick={(e) => {
					authorization()
					e.preventDefault()
				}} className="popup__button">Войти</button>
			</form>
			<div>Ещё нет аккаунта? <span onClick={() => dispatch(setPopupType())}>Зарегестрируйтесь</span></div>
			<img className='popup__close' src={close} alt="" onClick={() => {
				dispatch(closePopup())
			}} />
	</div>
  )
}

export default Authorization