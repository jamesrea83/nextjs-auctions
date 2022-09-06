import { stringify } from 'querystring';

export function playground() {
	function getProduct(id: number) {
		return {
			id: id,
			name: 'Awesome Gadget',
			price: 99.5,
		};
	}

	const heading = document.querySelector('h1');

	let arr: (string | number)[] = [];

	arr.push('hmm');
	arr.push(1);

	let person: {
		name: string;
		age: number;
	};

	person = {
		name: 'John',
		age: 25,
	};

	// let greeting : (name: string) => string;

	let greeting = (name: string) => console.log(name);

	console.log(greeting('hey'));

	let employee: object = {
		firstName: 'John',
		lastName: 'Doe',
		age: 25,
		jobTitle: 'Web Developer',
	};

	console.log(employee);
}
