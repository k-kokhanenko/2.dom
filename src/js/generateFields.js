export default function generateFields(div) {
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