o2.popup = {
	open(contentClass) {
		const overlay = document.querySelector('._overlay');
		const body = document.querySelector('body');
		let contentHtml = document.querySelector(`.${contentClass}`).innerHTML;
		overlay.innerHTML = contentHtml;
		document.querySelector(`.${contentClass}`).remove(); // for basket
		overlay.classList.add('_open');
		body.style.overflow = 'hidden';
	},

	close() {
		const overlay = document.querySelector('._overlay');
		const body = document.querySelector('body');
		body.style.overflow = 'visible';
		overlay.classList.remove('_open');
	},

	outsideClick(event) {
		const openClass = document.querySelector('._open');
		const boolOpen = event.composedPath().includes(openClass);

		if ((boolOpen == true) && (event.target.classList.contains('_open') === true)) {
			this.close();
		}

		this.setEscEvent();
	},

	setEscEvent()
	{
		window.onkeydown = () => { (event.key === 'Escape') && (this.close()) };
	},
}

window.addEventListener('click', () => o2.popup.outsideClick(event));