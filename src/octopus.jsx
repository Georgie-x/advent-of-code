import { d6input, d6signs } from "../input"

function Octopus() {
	let total = 0
	console.log(d6input, d6signs)
	for (let [index, element] of d6signs.entries()) {
		console.log(element, total,index)
		// if (element === "+") {
		// 	total += Number(d6nums[0][index]) + Number(d6nums[1][index]) + Number(d6nums[2][index]) + Number(d6nums[3][index])
		// } else if (element === "-") {
		// 	total += Number(d6nums[0][index]) - Number(d6nums[1][index]) - Number(d6nums[2][index]) - Number(d6nums[3][index])
		// } else if (element === "*") {
		// 	total += Number(d6nums[0][index]) * Number(d6nums[1][index]) * Number(d6nums[2][index]) * Number(d6nums[3][index])
		// } else if (element === "/") {
		// 	total += Number(d6nums[0][index]) / Number(d6nums[1][index]) / Number(d6nums[2][index]) / Number(d6nums[3][index])
		// } else {
		// 	console.log(`problem at ${index}}`)
		// }
	}

	return <p>{total}</p>
}

export default Octopus
