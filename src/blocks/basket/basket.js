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



o2.basket ={
	sumContainer: false,
	countContainer: false,
	state:{
		sum: 0,
		count: 0,
		items: {
			1111: {
				sum: 0,
				count: 0
			}
		},
	},


	onButton(instance, size, sign) {
		this.collectData(instance, size, sign);
	},

	collectData(instance, size, sign) {
		const buttons = instance.closest('._buttons');
		const counter = buttons.querySelector('._counter');
		let counterContent = counter.textContent;
		let count = Number(counterContent);

		let priceSelector = instance.closest('._basket-item').querySelector('._price');
		let priceStr = priceSelector.textContent;
		let price = parseInt(priceStr.replace(/ /g,''), 10);

		this.checkSign(sign, instance, size, count, price, counter);
	},

	checkSign(sign, instance, size, count, price, counter) {
		if (sign === true) {
			this.incrementCounter(count, size, counter);
			this.incrementSum(price);
		} else if (count > 0) {
			this.decrementCounter(count, size, counter);
			this.decrementSum(price);
		}
	},

	incrementCounter(count, size, counter) {
		count += size;
		this.state.count += size;
		this.render(count, counter, this.state.count);
	},

	decrementCounter(count, size, counter) {
		count -= size;
		this.state.count -= size;
		this.render(count, counter, this.state.count);
	},

	incrementSum(price) {
		this.state.sum += price;
		this.render( null, null, null, this.state.sum);
	},

	decrementSum(price) {
		this.state.sum -= price;
		this.render( null, null, null, this.state.sum);
	},

	render(count=null, counter=null, stateCount=null, sumInt=null) {
		const sumContainer = document.querySelector('._sum');
		const countContainer = document.querySelector('._counters');
		if(counter !== null) {
			counter.innerText = count;
		}
		if (stateCount !== null) {
			countContainer.textContent = String(stateCount) + " товаров";
		}
		if (sumInt !==null) {
			let sum = String(sumInt).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + " ₽";
			sumContainer.textContent = sum;
		}
	},
}
































