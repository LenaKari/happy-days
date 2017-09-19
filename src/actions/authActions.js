import firebase, { googleProvider, now } from '../firebase';

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
		dispatch(sendVerificationEmail())
		dispatch({ type: 'REGISTRATION_SUCCESS' })
	})
	.catch(error => {
		if (error.code === 'auth/email-already-in-use') {
			dispatch({ type: 'REGISTRATION_FAILED', error: 'An account already exists for this email address.' })
		}
	})
}

export const loginUser = (email, pass) => dispatch => {
	firebase.auth().signInWithEmailAndPassword(email, pass)
	.then(response => {
		let user = response
		dispatch(updateLastLoggedIn(user.uid, user.email));
		dispatch({
			type: 'LOGIN_SUCCESS',
			user: user
		})
	})
	.catch(error => {
		if (error.code === 'auth/wrong-password') {
			dispatch({ type: 'LOGIN_FAILED', error: 'The email and password you entered do not match our records. Please try again.' })
		} else if(error.code === 'auth/user-not-found') {
			dispatch({ type: 'LOGIN_FAILED', error: 'There is no account registered with the email address you entered. Please try again, or register a new account.' })
		}
	})
}

export const createAccountWithProvider = () => dispatch => {
	let user;
	firebase.auth().signInWithPopup(googleProvider)
	.then(response => {
		user = response.user;
		let name = user.displayName;
		let email = user.providerData[0].email;
		let usersRef = firebase.database().ref().child('users').child(user.uid);
		usersRef.update({
			name: name.toLowerCase(),
			email: email,
			userKey: user.uid
		});
	})
	.then(() => {
		dispatch({ type: 'REGISTRATION_SUCCESS' });
	})
	.then(() => {
		dispatch(updateLastLoggedIn(user.uid, user.email));
		dispatch({ type: 'LOGIN_SUCCESS', user: user });
	})
	.catch(error => {
		dispatch({ type: 'REGISTRATION_FAILED', error: error.message })
	})
}

export const signInWithProvider = () => dispatch => {
	firebase.auth().signInWithPopup(googleProvider)
	.then(response => {
		let user = response.user;
		dispatch({ type: 'LOGIN_SUCCESS', user: user });
		dispatch(updateLastLoggedIn(user.uid, user.email));
	})
	.catch(error => {
		dispatch({ type: 'LOGIN_FAILED', error: error.message})
	})
}

// const fetchUser = user => dispatch => {
// 	firebase.database().ref('users').child(user).on('value', snap => {
// 		let user = snap.val();
// 		dispatch({ type: 'USER_DETAILS_FETCHED', user: user });
// 	})
// }

export const updateLastLoggedIn = (user, email) => dispatch => {
	firebase.database().ref().child('users').child(user).update({
		email: email,
		lastConnectTime: now
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

export const userResetPassword = email => {
	return dispatch => {
		dispatch({ type: 'PASSWORD_RESET_REQUEST' })
		firebase.auth().sendPasswordResetEmail(email).then(() => {
			dispatch({ type: 'PASSWORD_RESET_SENT' })
		}, error => {
			dispatch({ type: 'PASSWORD_RESET_FAILED', error: error.message })
		})
	}
}

export const sendVerificationEmail = () => dispatch => {
	dispatch({ type: 'EMAIL_VERIFICATION_REQUEST' })
	firebase.auth().currentUser.sendEmailVerification().then(function() {
		dispatch({ type: 'EMAIL_VERIFICATION_SENT' })
	}, function(error) {
		dispatch({ type: 'EMAIL_VERIFICATION_FAILED' })
	});
}

export const closeRegistrationError = () => dispatch => {
	dispatch({ type: 'REGISTER_ERROR_ACKNOWLEDGED' });
}

export const closeLoginError = () => dispatch => {
	dispatch({ type: 'LOGIN_ERROR_ACKNOWLEDGED' });
}
