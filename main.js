function generateFields(div) {
	if (div) {
		for (let x = 0; x < 4; x++) {
			for (let y = 0; y < 4; y++) {
				const field = document.createElement('div');
				field.dataset.x = x;
				field.dataset.y = y;
				div.appendChild(field);				
			}
		}		
	}			
}

class Character {
	#src = 'https://github.com/netology-code/ahj-homeworks/raw/AHJ-50/dom/pic/goblin.png';
	#x = 0;
	#y = 0;

	constructor(src) {
		if (src) {
			this.#src = src;
		}
	}

	#getRandomNumber(min, max) {
		return Math.round(min - 0.5 + Math.random() * (max - min + 1));
	} 

	setParent(parent) {
		this.parent = parent;
	}
	
	#move() {
		if (this.parent) {
			const field = this.parent.querySelector(`[data-x='${this.#x}'][data-y='${this.#y}']`);	
			if (field) {
				const img = document.createElement('img');
				img.src = this.#src;
				field.appendChild(img);				
			}			
		}
	}
	
	#remove() {
		if (this.parent) {
			const field = this.parent.querySelector(`[data-x='${this.#x}'][data-y='${this.#y}']`);	
			if (field) {
				field.textContent = "";
			}
		}
	}
	
	init() {
		this.#x = this.#getRandomNumber(0,3);	
		this.#y = this.#getRandomNumber(0,3);	
		this.#move();
	}
	
	nextStep() {
		let x = this.#getRandomNumber(0,3);	
		let y = this.#getRandomNumber(0,3);	
			
		while (x == this.#x && y == this.#y) {
			x = this.#getRandomNumber(0,3);	
			y = this.#getRandomNumber(0,3);	
		}
			
		this.#remove();	
		
		this.#x = x;	
		this.#y = y;			
		this.#move();	
	}
}

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

