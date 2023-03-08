o2.basket ={
	state:{
		sum: 0,
		count: 0,
		items: [
			{
				id: 1,
				price: 2000,
				count: 1,
				webp: "./img/logo.webp",
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
		this.count(instance, change);
		this.calculate();
		this.render();
		this.cleanArray();
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

	cleanArray() {
			for (let item of this.state.items) {
				if (item.count < 1) {
					this.state.items.splice(item, 1);
				}
			}
	},

	count(instance, change) {
		const card = instance.closest("._basket-item");
		const cardId = Number(card.dataset.idItem);
		let sign = change[0];
		size = Number(change.substring(1));

		const targetItem = this.state.items.find((item) => (item.id === cardId));
		if (sign === "+") {
			++targetItem.count;
		} else if (targetItem.count > 0){
			--targetItem.count;
		}

	},

	renderItems() {
		const itemsList = document.querySelector("._basket-list");
		itemsList.innerHTML = "";

		for (let item of this.state.items) {
			if (item.count > 0) {
				itemsList.innerHTML += this.createItem(item);
			}
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
		console.log('createItems')
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

o2.basket.init();