import keys from '../keys.json';

const image = document.getElementById('bg');
const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('username');
const enterBtn = document.getElementById('enter-btn');

const checkIfUserCanEnter = (username, password, keys) => {
	console.log(username);
	console.log(password);
	console.log(keys);
};

const testFunc = () => {
	console.log('test');
};

enterBtn.addEventListener('click', testFunc);
