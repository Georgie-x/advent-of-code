import { d2input } from "../input"

function DoubleNumbers() {
	let total = 0
	for (let inputRange of d2input) {
		let [aHalf, bHalf] = inputRange.split("-")
		let start = Number(aHalf)
		let end = Number(bHalf)
		console.log(aHalf, bHalf)



		for (let i = start; i >= end; i++) {
			let splitIndex = Math.ceil(i.length / 2)
			let cHalf = i.toString().slice(0, splitIndex)
			let dHalf = i.toString().slice(splitIndex)
			console.log(cHalf, dHalf)
			cHalf === dHalf ? (total += 100) : null
		}
	}

	return <p>{total}</p>
}

export default DoubleNumbers
