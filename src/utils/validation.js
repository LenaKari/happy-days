export const isValidEmail = (email) => {
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};


export const isValidPassword = (password) => {
	const isMinLength = password.length > 7;
	let containsSpecialCharacter = false;
	let containsLetter = false;

	if(isMinLength) {
		for (var i = 0; i < password.length; i++) {
			const isLetter = password[i].toLowerCase() !== password[i].toUpperCase();

			if (isLetter && !containsLetter) {
				containsLetter = true;
			} else if (!isLetter && !containsSpecialCharacter) {
				containsSpecialCharacter = true;
			}

			// Do we already know that this is a valid password?
			if (containsLetter && containsSpecialCharacter) { return true; }
		}
	}

	return false;

};

export const passwordsMatch = (pass, passConfirm) => {return pass === passConfirm ? true : false; };

export const isValidName = (name) => { return name.length > 0 ? true : false };

export const requiredError = () => { return "This field is required."; }

export const emailError = () => { return "Please enter a valid email address."; }

export const passwordError = () => {
	return "Passwords must be at least 8 characters. They must also contain at least one letter and one non-alpha character.";
}

export const passwordConfirmError = () => { return "The passwords you have entered do not match. Please try again."; }
