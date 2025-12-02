import { d2input } from "../../input"

function DoubleNumbers() {
    let total = 0
	for (let inputRange of d2input) {
		let [aHalf, bHalf] = inputRange.split("-")
		

		for (let i = aHalf; i <= bHalf; i++) {
			let splitIndex = Math.ceil(i.length / 2)
			let cHalf = i.toString().slice(0, splitIndex)
			let dHalf = i.toString().slice(splitIndex)
			console.log(i, splitIndex, cHalf, dHalf)
			aHalf === bHalf ? (total += parseInt(aHalf)) : null
		}
		
	}

	return <p>{total}</p>
}

export default DoubleNumbers
