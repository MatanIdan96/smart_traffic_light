const image = document.getElementById('bg');
const enterBtn = document.getElementById('enter-btn');
const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('username');

const showVideo = () => {
	console.log('Button clicked');
	image.style.display = 'block';
};

const testClick = () => {
	console.log('click');
};

const checkIfUserCanEnter = async () => {
	// Fetch the keys.json file
	const response = await fetch('keys.json');
	const keys = await response.json();

	const enteredUsername = usernameInput.value;
	const enteredPassword = passwordInput.value;

	// Check if entered credentials match any keys from keys.json
	const isValidUser = keys.some(
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

const handleShowStream = () => {
	testClick();
	const url = 'http://127.0.0.1:5000/video_feed';
	window.location.href = url;
};

// enterBtn.addEventListener('click', checkIfUserCanEnter);

enterBtn.addEventListener('click', handleShowStream);
