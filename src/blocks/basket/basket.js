// o2.basket = {
// 	sumContainer: false,
// 	countContainer: false,

// 	state:{
// 		sum: 0,
// 		count: 0,
// 		items: {
// 			1111: {
// 				sum: 0,
// 				count: 0
// 			}
// 		},
// 	},

// 	plus() {
// 		const counter = event.target.closest('._buttons').querySelector('._counter');
// 		let counterContent = event.target.closest('._buttons').querySelector('._counter').textContent;
// 		let count = Number(counterContent) + 1;
// 		counter.innerText = count;
// 		this.counters();

// 		let price = event.target.closest('.basket__item').querySelector('._price').textContent;
// 		let unitPrice = parseInt(price.replace(/ /g,''), 10);
// 		this.sum(true, unitPrice);
// 	},

// 	// minus(instance) {
// 	minus() {
// 		const counter = event.target.closest('._buttons').querySelector('._counter');
// 		let counterContent = event.target.closest('._buttons').querySelector('._counter').textContent;
// 		let count = Number(counterContent) - 1;

// 		let price = null;
// 		let unitPrice = null;
// 		let priceInt = 0;

// 		if (count !== -1){
// 			counter.innerText = count;
// 			price = event.target.closest('.basket__item').querySelector('._price').textContent;
// 			unitPrice = parseInt(price.replace(/ /g,''), 10);
// 		}

// 		this.counters();

// 		this.sum(false, unitPrice);
// 	},

// 	counters() {
// 		const counters = document.querySelector('._counters');
// 		const counterAll = document.querySelectorAll('._counter');
// 		let num = 0;
// 		counterAll.forEach( function(element) {
// 			num += Number(element.textContent);
// 		});

// 		counters.textContent = String(num) + " товаров";
// 	},

// 	sum(signBool, unitPrice) {
// 		const sumObj = document.querySelector('._sum');
// 		let sumInt = 0;
// 		if (signBool === true){
// 			sumInt = parseInt(sumObj.textContent.replace(/ /g,''), 10) + unitPrice;
// 		} else {
// 			sumInt = parseInt(sumObj.textContent.replace(/ /g,''), 10) - unitPrice;
// 		}
// 		sumObj.textContent = String(sumInt).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + " ₽";
// 	},
// 	// render(){
// 	// 	asdas
// 	// }




// 	change(id, num)
// 	{
// 		//
// 	}
// }
// 
// 
// 



// o2.basket ={
// 	sumContainer: false,
// 	countContainer: false,
// 	state:{
// 		sum: 0,
// 		count: 0,
// 		items: {
// 			1111: {
// 				sum: 0,
// 				count: 0
// 			}
// 		},
// 	},


// 	onButton(instance, size, sign) {
// 		this.collectData(instance, size, sign);
// 	},

// 	collectData(instance, size, sign) {
// 		const buttons = instance.closest('._buttons');
// 		const counter = buttons.querySelector('._counter');
// 		let counterContent = counter.textContent;
// 		let count = Number(counterContent);

// 		let priceSelector = instance.closest('._basket-item').querySelector('._price');
// 		let priceStr = priceSelector.textContent;
// 		let price = parseInt(priceStr.replace(/ /g,''), 10);

// 		this.checkSign(sign, instance, size, count, price, counter);
// 	},

// 	checkSign(sign, instance, size, count, price, counter) {
// 		if (sign === true) {
// 			this.incrementCounter(count, size, counter);
// 			this.incrementSum(price);
// 		} else if (count > 0) {
// 			this.decrementCounter(count, size, counter);
// 			this.decrementSum(price);
// 		}
// 	},

// 	incrementCounter(count, size, counter) {
// 		count += size;
// 		this.state.count += size;
// 		this.render(count, counter, this.state.count);
// 	},

// 	decrementCounter(count, size, counter) {
// 		count -= size;
// 		this.state.count -= size;
// 		this.render(count, counter, this.state.count);
// 	},

// 	incrementSum(price) {
// 		this.state.sum += price;
// 		this.render( null, null, null, this.state.sum);
// 	},

// 	decrementSum(price) {
// 		this.state.sum -= price;
// 		this.render( null, null, null, this.state.sum);
// 	},

// 	render(count=null, counter=null, stateCount=null, sumInt=null) {
// 		const sumContainer = document.querySelector('._sum');
// 		const countContainer = document.querySelector('._counters');
// 		if(counter !== null) {
// 			counter.innerText = count;
// 		}
// 		if (stateCount !== null) {
// 			countContainer.textContent = String(stateCount) + " товаров";
// 		}
// 		if (sumInt !==null) {
// 			let sum = String(sumInt).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + " ₽";
// 			sumContainer.textContent = sum;
// 		}
// 	},
// }


o2.basket ={
	collectFirst: true,
	countFirst: true,
	renderFirst: true,
	itemsAll: null,
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
		console.log('init basket')

		this.calculate();
		this.render();
	},

	onClick(instance, change) {
		this.count(instance, change);
		this.calculate();
		this.render();
		this.cleanArray();
		console.log(this.state.items)
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
		let originalArray = this.state.items;
		let filteredArray = this.filterArray(originalArray);
		this.state.items = filteredArray;
	},

	filterArray(originalArray) {
		console.log('filterArray();')
		let filteredArray = originalArray.filter(item => item.count > 0);
		return filteredArray;
	},

	count(instance, change) {
		const card = instance.closest("._basket-item");
		const cardId = Number(card.dataset.idItem);
		let sign = change[0];
		size = Number(change.substring(1));
		// console.log({sign, size})

		const targetItem = this.state.items.find((item) => (item.id === cardId));
		if (sign === "+") {
			++targetItem.count;
		} else if (targetItem.count > 0){
			--targetItem.count;
		}

	},

	renderItems() {
		console.log('innerList')
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


