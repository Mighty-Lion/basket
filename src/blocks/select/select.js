o2.sel ={
	toggle(instanse) {
		console.log('toggle')
		const currentSelect = instanse.closest("._select").querySelector('._select-list');
		console.log({currentSelect})
		currentSelect.classList.toggle('select__open')
	},

	inActive(event) {
		console.log('close')
		const currentSelect = event.target.closest("._select").querySelector('._select-list');
		currentSelect.classList.remove('select__open')
	},

	changeValue(instanse) {
		console.log("changeValue");
		console.log(instanse)
		const value = instanse.textContent;
		console.log({value})
		const selectHeader = instanse.closest("._select").querySelector("._select-value");
		console.log(selectHeader)
		selectHeader.textContent = value;
		this.inActive(event);
	},
}