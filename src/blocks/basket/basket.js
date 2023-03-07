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
			// {
			// id: dasd
			// 	price: 0,
			// 	count: 0,
			// 	img: null,
			// 	name: null,
			// 	brand: null,
			// },
			// 1: {
			// 	price: 0,
			// 	count: 0
			// },
			// 2: {
			// 	price: 0,
			// 	count: 0
			// },
			// 3: {
			// 	price: 0,
			// 	count: 0
			// },
			],
	},

	init() {
		console.log('init basket')
		this.collectData();
		this.countInit();
		this.render();
	},

	onButton(instance, size) {
		this.isCount(instance, size);
		this.render(instance);
		// this.deleteElementOfArray();
		console.table(this.state)
	},

	createBasket(){
		const contant = document.querySelector("._overlay");

	},

	collectData() {
		this.itemsAll = document.querySelectorAll('._basket-item');
		for (let item of this.itemsAll) {
			const price = this.readDOMValue(item, "._price");
			const count = this.readDOMValue(item, "._counter");

			const product = {
				price: price,
				count: count
			}

			this.state.items.push(product);
		}
	},

	readDOMValue(nodeElement, cssClass) {
		const field = nodeElement.querySelector(cssClass);
		let fieldValue = field.textContent;
		fieldValue = parseInt(fieldValue.replace(/ /g,''), 10);
		return fieldValue;
	},

	countInit() {
		console.log('countInit');
		console.log(this.state.items.length)
		for (let id = 0; id < this.state.items.length ; id++) {
			this.state.count += this.state.items[`${id}`].count;
			this.state.sum += this.state.items[`${id}`].count * this.state.items[`${id}`].price;
		}
		console.log(this.state.count);
	},

	isCount(instance, size) {
		console.log('isCount');
		console.table(this.state);
		let sign = size[0];
		size = Number(size.substring(1));
		const item = instance.closest('._basket-item');
		let idItem = Number(item.dataset.idItem);

		if (sign === "+") {
			this.state.items[`${idItem}`].count += size;
			this.state.count += size;
			this.state.sum += this.state.items[`${idItem}`].price;
		} else if (this.state.items[`${idItem}`].count > -1) {
			this.state.items[`${idItem}`].count -= size;
			this.state.count -= size;
			this.state.sum -= this.state.items[`${idItem}`].price;
		}
	},

	render() {
		console.log('render');
		const allCounterContainer = document.querySelector('._counters');
		const sumContainer = document.querySelector('._sum');
		let counterContainer = null;
		let counterId = 0;
		if (this.renderFirst === true) {
			allCounterContainer.innerText = String(`${this.state.count} товаров`);
			sumContainer.innerText = String(this.state.sum).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + " ₽";
		} else {
			counterContainer = event.target.closest('._buttons').querySelector('._counter');
			counterId = Number(counterContainer.dataset.idCounter);
			counterContainer.innerText = this.state.items[`${counterId}`].count;
			allCounterContainer.innerText = String(`${this.state.count} товаров`);
			sumContainer.innerText = String(this.state.sum).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + " ₽";
		}
		this.renderFirst = false;

		if (this.state.items[`${counterId}`].count < 1){
			event.target.closest('._basket-item').remove();
		}
	},

	// deleteElementOfArray(){
	// 	const index = this.state.items.findIndex(item => item.count === 0);
	// 	this.state.items.splice(index, 1);
	// },
}


o2.basket.init();


