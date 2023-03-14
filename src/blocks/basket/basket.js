o2.basket = {
	state: {
		summary: 0,
		amount: 0,
		items:
		[
		{
			id: 1,
			price: 5601,
			amount: 1,
			brand: 'Aesop',
			name: 'Rose Hair & Scalp Moisturising Masque',
			webp: 'img/img1.webp',
			jpg: 'img/img1.jpg',
		},
		{
			id: 2,
			price: 5602,
			amount: 1,
			brand: 'Aesop',
			name: 'Citrues Melange Body Cleanser',
			webp: 'img/img2.webp',
			jpg: 'img/img2.jpg',
		},
		{
			id: 3,
			price: 5603,
			amount: 1,
			brand: 'Aesop',
			name: 'Shine Hair & Beard Oil',
			webp: 'img/img3.webp',
			jpg: 'img/img3.jpg',
		},
		]
	},

	init() {
		this.calculateBasket();
		this.renderBasket();
		this.renderAllItem()
	},
	onClick(instance, change){
		this.changeItemAmount(instance, change);
		this.renderItem(instance);
		this.calculateBasket();
		this.renderBasket(instance);
	},

	calculateBasket() {
		this.calculateBasketAmaunt();
		this.calculateBasketSummary();
	},

	renderBasket(instance) {
		this.renderBasketAmount(instance);
		this.renderBasketSummury(instance);
	},

	calculateBasketAmaunt() {
		let itemsAmount = 0;

		for (let item of this.state.items) {
			itemsAmount += item.amount;
		}

		this.state.amount = itemsAmount;
	},

	calculateBasketSummary() {
		let itemsSummary = 0;

		for (let item of this.state.items) {
			itemsSummary += item.amount * item.price;
		}

		this.state.summary = itemsSummary;
	},

	changeItemAmount(instance, change) {
		const basketItem = instance.closest('._basket-item');
		const currentCardId = +basketItem.dataset.indexItem;
		const cardId = this.state.items.findIndex( (item) => (item.id === currentCardId) )
		const sign = change[0];
		const quantity = +change.substring(1);

		let targetItem = this.state.items[cardId]
		if (sign === '+') {
			targetItem.amount += quantity
		} else if (targetItem.amount >0 ){
			targetItem.amount -= quantity
		}
	},

	renderBasketAmount(instance=null) {
		const basketAmount = !instance ? document.querySelector('._basket-amount') : instance.closest("._basket").querySelector('._basket-amount');
		basketAmount.textContent = `${this.state.amount} ${this.formatAmount(this.state.amount, ['товар', 'товара', 'товаров'])}`;
	},

	renderBasketSummury(instance=null) {
		const basketSummury = !instance ? document.querySelector('._basket-summary') : instance.closest("._basket").querySelector('._basket-summary');
		basketSummury.textContent = this.formatPrice(this.state.summary);
	},

	renderAllItem() {
		const allItem = document.querySelectorAll("._basket-input");
		allItem.forEach( (input) => this.renderItem(input) )
	},

	renderItem(instance) {
		const basketItem = instance.closest('._basket-item');
		const currentCardId = +basketItem.dataset.indexItem;
		const cardId = this.state.items.findIndex( (item) => (item.id === currentCardId) );
		this.renderItemAmount(basketItem, cardId);
		this.renderItemPrice(basketItem, cardId);
		this.renderItemBrand(basketItem, cardId);
		this.renderItemName(basketItem, cardId);
		this.addItemImageSrc(basketItem, cardId);
		this.addMaskForItem(basketItem, cardId);
	},

	addMaskForItem(basketItem, cardId) {
		if (this.state.items[cardId].amount < 1) basketItem.querySelector('._item-mask').classList.add("basket__item-mask--open");
	},

	removeMaskForItem(instance) {
		instance.closest('._item-mask').classList.remove("basket__item-mask--open");
	},

	deleteItem(instance) {
		console.log("deleteItem");
		const basketItem = instance.closest('._basket-item');
		basketItem.remove();
	},

	renderItemAmount(basketItem, cardId) {
		const currentInput = basketItem.querySelector("._basket-input");
		currentInput.textContent = this.state.items[cardId].amount;
	},

	renderItemPrice(basketItem, cardId) {
		const currentPrice = basketItem.querySelector("._basket-price");
		currentPrice.textContent = this.formatPrice(this.state.items[cardId].price);
	},

	renderItemBrand(basketItem, cardId) {
		const currentPrice = basketItem.querySelector("._item-brand");
		currentPrice.textContent = `${this.state.items[cardId].brand}`;
	},

	renderItemName(basketItem, cardId) {
		const currentPrice = basketItem.querySelector("._item-name");
		currentPrice.textContent = `${this.state.items[cardId].name}`;
	},

	addItemImageSrc(basketItem, cardId) {
		const currentImg = basketItem.querySelector("._item-jpg")
		currentImg.src = `${this.state.items[cardId].jpg}`;
		const currentSource = basketItem.querySelector("._item-source");
		currentSource.srcset = `${this.state.items[cardId].webp}`
	},

	formatPrice(num) {
		return String(num).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + " ₽";
	},

	formatAmount(value, words) {
		const cases = [2, 0, 1, 1, 1, 2];
		return words[(value % 100 > 4 && value % 100 < 20) ? 2 : cases[(value % 10 < 5) ? value % 10 : 5]];
	},

}

o2.basket.init();