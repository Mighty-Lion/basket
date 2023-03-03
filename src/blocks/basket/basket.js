o2.basket = {
	// state:{

	// },

	plus() {
		const counter = event.target.closest('._buttons').querySelector('._counter');
		let counterContent = event.target.closest('._buttons').querySelector('._counter').textContent;
		let count = Number(counterContent) + 1;
		counter.innerText = count;
		this.counters();

		let price = event.target.closest('.basket__item').querySelector('._price').textContent;
		let unitPrice = parseInt(price.replace(/ /g,''), 10);
		let priceInt = unitPrice * count;
		this.sum(true, unitPrice);
	},

	// minus(instance) {
	minus() {
		const counter = event.target.closest('._buttons').querySelector('._counter');
		let counterContent = event.target.closest('._buttons').querySelector('._counter').textContent;
		let count = Number(counterContent) - 1;

		let price = null;
		let unitPrice = null;
		let priceInt = 0;

		if (count !== -1){
			counter.innerText = count;
			price = event.target.closest('.basket__item').querySelector('._price').textContent;
			unitPrice = parseInt(price.replace(/ /g,''), 10);
			priceInt = unitPrice * count;
		}

		this.counters();

		this.sum(false, unitPrice);
	},

	counters() {
		const counters = document.querySelector('._counters');
		const counterAll = document.querySelectorAll('._counter');
		let num = 0;
		counterAll.forEach( function(element) {
			num += Number(element.textContent);
		});

		counters.textContent = String(num) + " товаров";
	},

	sum(signBool, unitPrice) {
		const sumObj = document.querySelector('._sum');
		let sumInt = 0;
		if (signBool === true){
			sumInt = parseInt(sumObj.textContent.replace(/ /g,''), 10) + unitPrice;
		} else {
			sumInt = parseInt(sumObj.textContent.replace(/ /g,''), 10) - unitPrice;
		}
		sumObj.textContent = String(sumInt).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + " ₽";
	},
	// render(){
	// 	asdas
	// }
}