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
	sumContainer: false,
	countContainer: false,
	collectFirst: true,
	itemsAll: null,
	state:{
		sum: 0,
		count: 0,
		itemsLength: 0,
		items: {
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
		},
	},


	onButton(instance, size, sign) {
		if (this.collectFirst === true) {
			this.collectData(instance);
		}
		this.collectFirst = false;

		this.isCount(instance, size, sign);

		this.render(instance);
	},

	checkAmount(instance) {
		console.log('checkAmount')
		if (this.collectFirst === true) {
			this.itemsAll = instance.closest('._basket-list').querySelectorAll('._basket-item');
			this.itemsAll.forEach( () => ++this.state.itemsLength);
		}
	},

	createIdObjects() {
		console.log('createIdObjects');
		for (let id = 0; id < this.state.itemsLength; id++) {
			this.state.items[`${id}`] = {};
		}
	},

	createCountersValue(){
		console.log('createCountersValue');
		let id = 0;
		this.itemsAll.forEach( (element) => {
			const counter = element.querySelector('._counter');
			let counterContent = counter.textContent;
			let count = Number(counterContent);
			this.state.items[`${id}`].count = count ;
			++id;
		});
	},

	createPricesValue(){
		console.log('createPricesValue');
		let id = 0;
		this.itemsAll.forEach( (element) => {
			const priceSelect = element.querySelector('._price');
			let priceContent = priceSelect.textContent;
			let price = parseInt(priceContent.replace(/ /g,''), 10);
			this.state.items[`${id}`].price = price ;
			++id;
		});
	},

	collectData(instance) {
		this.checkAmount(instance);
		this.createIdObjects();
		this.createCountersValue();
		this.createPricesValue();
		console.log('collectData')
		console.log(this.state.items);
	},


	isCount(instance, size, sign) {
		console.log('isCount');
		const counter = instance.closest('._buttons').querySelector('._counter');
		let idCounter = Number(counter.dataset.idCounter);

		if (sign === true) {
			this.state.items[`${idCounter}`].count += size;
			this.state.count += size;
			this.state.sum += this.state.items[`${idCounter}`].price;
		} else if (this.state.items[`${idCounter}`].count > 0) {
			this.state.items[`${idCounter}`].count -= size;
			this.state.count -= size;
			this.state.sum -= this.state.items[`${idCounter}`].price;
		}

		console.log(this.state.items[`${idCounter}`].count);
		console.log("state count", this.state.count)
		console.log("state sum", this.state.sum)
	},

	render(instance) {
		console.log('render');
		console.log(instance.closest('._buttons').querySelector('._counter'))
		const counterContainer = instance.closest('._buttons').querySelector('._counter');
		let counterId = Number(countContainer.dataset.idCounter);
		const sumContainer = document.querySelector('._sum');
		const allCountContainer = document.querySelector('._counters');

		countContainer.textContent = this.state.items[`${counterId}`].count;
	}
}




























