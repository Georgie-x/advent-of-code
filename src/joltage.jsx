import { d3input } from "../input"

function Joltage() {
	let totaller = 0

	for (let line of d3input) {
		let max1 = Math.max(...line.slice(0, -1))
		let ind1 = line.indexOf(max1)
		let max2 = Math.max(...line.slice(ind1 + 1))
		totaller += (Number(`${max1}${max2}`))
	}

	return <p>{totaller}</p>
}

export default Joltage
