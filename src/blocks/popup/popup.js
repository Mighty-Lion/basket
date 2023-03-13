o2.popup = {
	overlay: document.querySelector('._popup-overlay'),
	body: document.querySelector('body'),

	open(contentClass) {
		const contentHtml = document.querySelector(contentClass).innerHTML;
		this.overlay.innerHTML = contentHtml;
		this.body.style.overflow = "hidden";
		this.overlay.classList.add('popup-open');
	},

	close() {
		this.overlay.classList.remove('popup-open');
		this.body.style.overflow = "visible";
	},

	outsideClick(event) {
		const composedOverlayBool = event.composedPath().includes(this.overlay);
		const targetOverlay = event.target.contains(this.overlay);
		if (composedOverlayBool && targetOverlay)  this.close();
		this.setEscEvent(event);
	},

	setEscEvent(event) {
		window.onkeydown =  (event) => { (event.key === 'Escape' && this.close()) }
	}
}

window.addEventListener( "click", (event) => o2.popup.outsideClick(event))