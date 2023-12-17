// TODO: write your code here
import Character from './Character';
import generateFields from './generateFields';

document.addEventListener("DOMContentLoaded", () => {
	const div = document.querySelector('.grid');
	generateFields(div);
	
	const character = new Character();
	character.setParent(div);
	character.init();
	
	let intervalId = setInterval(() => character.nextStep(), 1000);
	
	const btn = document.querySelector('.btn-reset');
	btn.addEventListener( "click" , () => {
		if (btn.dataset.type == "stop") {
			clearInterval(intervalId);
			btn.dataset.type = "start";
			btn.textContent = "Start";
		} else
		if (btn.dataset.type == "start") {
			btn.dataset.type = "stop";
			btn.textContent = "Stop";
			intervalId = setInterval(() => character.nextStep(), 1000);
		}		
	});
});