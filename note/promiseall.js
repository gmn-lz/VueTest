function PromiseAll(promiseArr) {
	return new Promise((resolve, reject) => {
		if (!Array.isArray(promiseArr)) {
			reject(new TypeError('不是数组'))
		}
	
		let results = [];
		let num = 0;
		
		promiseArr.forEach((item, index) => {
			Promise.resolve(item).then((res) => {
				results[index] = res;
				num++;
				
				if (num == promiseArr.length) {
					resolve(results);
				}
			}).catch((err) => {
				reject(new Error(err));
			})
		})
	})
}

let a = new Promise((resolve) => (resolve(1)));
let b = new Promise((resolve) => (resolve(2)));
let c = new Promise((resolve) => (resolve(3)));

PromiseAll([a, b, c]).then(Res => {
	console.log(Res); // [1, 2, 3]
})



