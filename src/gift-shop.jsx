import { d2input } from "../input"

function DoubleNumbers() {
	let total = 0
	let nummos = []

	for (let inputRange of d2input) {
		let [aHalf, bHalf] = inputRange.split("-")
		let start = Number(aHalf)
		let end = Number(bHalf)

		for (let i = start; i <= end; i++) {
			let iString = i.toString()
			;(iString.length >= 2 && new Set(iString.match(/.{1,1}/g)).size === 1) ||
			(iString.length >= 4 && new Set(iString.match(/.{1,2}/g)).size === 1) ||
			(iString.length >= 6 && new Set(iString.match(/.{1,3}/g)).size === 1) ||
			(iString.length >= 8 && new Set(iString.match(/.{1,4}/g)).size === 1) ||
			(iString.length >= 10 && new Set(iString.match(/.{1,5}/g)).size === 1)
				? ((total += i), nummos.push(i))
				: null
		}
	}



	return <p>{total}</p>
}

export default DoubleNumbers
