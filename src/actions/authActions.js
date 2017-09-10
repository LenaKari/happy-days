import firebase from '../firebase';

export const createAccount = (name, email, pass) => dispatch => {
	firebase.auth().createUserWithEmailAndPassword(email, pass)
	.then(result => {
		const user = firebase.auth().currentUser
		let usersRef = firebase.database().ref().child('users').child(user.uid)
		usersRef.update({
			name: name.toLowerCase(),
			email: email.toLowerCase(),
			userKey: user.uid
		})
	})
	.then(() => {
		dispatch(loginUser(email, pass))
		dispatch({ type: 'REGISTRATION_SUCCESS' })
	})
	.catch(error => {
		console.log(error.code, error.message)
		if (error.code === 'auth/email-already-in-use') {
			alert('An account with this email address has already been registered')
		}
	})
}

export const loginUser = (email, pass) => dispatch => {
	firebase.auth().signInWithEmailAndPassword(email, pass)
	.then(response => {
		let user = response
		dispatch({
			type: 'LOGIN_SUCCESS',
			user: user
		})
	})
	.catch(error => {
		dispatch({ type: 'ERROR', payload: error })
	})
}

export const logoutUser = () => dispatch => {
	firebase.auth().signOut()
	.then(() => {
		dispatch({ type: 'LOGOUT_SUCCESS' })
	})
	.catch(error => {
		dispatch({ type: 'ERROR', payload: error })
	})
}
