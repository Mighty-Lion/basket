o2.basket ={
	closeSvg: "{% include '/assets/svg/close.svg' %}",
	state:{
		sum: 0,
		count: 0,
		items: [
			{
				id: 1,
				price: 2000,
				count: 1,
				webp: "./img/image.webp",
				jpg: "./img/logo.jpg",
				name: "Rose Hair & Scalp Moisturising Masque",
				brand: "Aesop",
			},

			{
				id: 2,
				price: 500,
				count: 2,
				webp: "./img/image.webp",
				jpg: "./img/image.jpg",
				name: "Citrues Melange Body Cleanser",
				brand: "Aesop",
			},

			{
				id: 3,
				price: 1,
				count: 3,
				webp: "./img/image.webp",
				jpg: "./img/image.jpg",
				name: "Shine Hair & Beard Oil",
				brand: "Aesop",
			},
		],
	},

	init() {
		this.calculate();
		this.render();
	},

	onClick(instance, change) {
		this.changeCount(instance, change);
		this.calculate();
		this.render();
		// this.deleteItem();
	},

	open() {
		const overlay = document.querySelector('._overlay');
		const body = document.querySelector('body');
		let contentHtml = this.createBasket();
		overlay.innerHTML = contentHtml;
		overlay.classList.add('_open');
		body.style.overflow = 'hidden';
		this.init();
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

	createBasket() {
		// console.log("createBasket")
		basketHtml =
				`
					<div class="basket">
						<div class="basket__close" onclick="o2.basket.close()">
							<picture>
								<source srcset="./svg/close.svg" type="svg/webp">
								<img class="basket__img" src="./svg/close.svg" alt="image name">
							</picture>
						</div>
						<h2 class="basket__header">Корзина</h2>
						<div class="basket__list _basket-list">
						</div>
						<div class="basket__footer">
							<div class="basket__footer-text">
								<span class="basket__price _sum">0 ₽</span>
								<span class="basket__counter _counters">0 товаров<span>
							</div>
							<button class="basket__footer-button">Оформить заказ</button>
						</div>
					</div>
				`;
		return basketHtml;
	},

	calculate() {
		this.calculateSum();
		this.calculateCounters();
	},

	render() {
		this.renderSum();
		this.renderCounters();
		this.renderItems();
	},

	deleteItem(index) {
		console.log("DELETE", index);
		this.state.items.splice(index, 1)
	},

	changeCount(instance, change) {
		const card = instance.closest("._basket-item");
		const cardId = Number(card.dataset.idItem);
		let sign = change[0];
		size = Number(change.substring(1));

		const cardIndex = this.state.items.findIndex((item) => (item.id === cardId));

		const targetItem = this.state.items[cardIndex];

		if (sign === "+") {
			++targetItem.count;
		} else if (sign === "-") {
			--targetItem.count;
			if (targetItem.count < 1) this.deleteItem(cardIndex)
		}
	},

	renderItems() {
		const itemsList = document.querySelector("._basket-list");
		itemsList.innerHTML = "";

		for (let item of this.state.items) {
			itemsList.innerHTML += this.createItem(item);
		}
	},

	calculateSum() {
		let sum = 0;

		for (item of this.state.items) {
			sum += item.count * item.price;
		}

		this.state.sum = sum;
	},

	renderSum() {
		const sumContainer = document.querySelector('._sum');
		sumContainer.innerText = this.formatPrice(this.state.sum);
	},

	calculateCounters() {
		let count = 0;

		for (item of this.state.items) {
			count += item.count ;
		}

		this.state.count = count;
	},

	renderCounters() {
		const countContainer = document.querySelector('._counters');
		countContainer.innerText = String(`${this.state.count} товаров`);
	},

	createItem(item){
		itemHtml = `<div class="basket__item _basket-item" data-id-item="${item.id}">
						<picture>
							<source srcset="${item.webp}" type="image/webp">
							<img class="basket__img" src="${item.jpg}" alt="image name">
						</picture>
						<div class="basket__text">
							<div class="basket__text-title">${item.brand}</div>
							<div class="basket__text-name">${item.name}</div>
							<div class="basket__text-price _price">${this.formatPrice(item.price)}</div>
						</div>
						<div class="basket__buttons _buttons">
							<button class="basket__button" onclick="o2.basket.onClick(this, '-1')">
								<picture>
									<source srcset="./svg/busketMinus.svg" type="svg/webp">
									<img class="basket__img" src="./svg/busketMinus.svg" alt="image name">
								</picture>
							</button>
							<div class="basket__button basket__button--color-inversion _counter">${item.count}</div>
							<button class="basket__button" onclick="o2.basket.onClick(this, '+1')">
								<picture>
									<source srcset="./svg/busketPlus.svg" type="svg/webp">
									<img class="basket__img" src="./svg/busketPlus.svg" alt="image name">
								</picture>
							</button>
						</div>
					</div>`;
		return itemHtml;
	},

	formatPrice(num) {
		return String(num).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + " ₽";
	},
}

window.addEventListener('click', () => o2.basket.outsideClick(event));