import keys from './keys.json';

console.log('hi');
console.log(keys);

const image = document.getElementById('bg');
const enterBtn = document.getElementById('enter-btn');
const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('username');

console.log(image);

const showVideo = () => {
	console.log('Button clicked');
	image.style.display = 'block';
};

const checkIfUserCanEnter = () => {
	const enteredUsername = usernameInput.value;
	const enteredPassword = passwordInput.value;

	// Check if entered credentials match any keys from keys.json
	const isValidUser = some(
		(key) =>
			key.username === enteredUsername && key.password === enteredPassword
	);

	if (isValidUser) {
		console.log('Login successful');
		showVideo();
	} else {
		console.log('Invalid credentials');
	}
};

enterBtn.addEventListener('click', checkIfUserCanEnter);
