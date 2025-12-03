import { d3input } from "../input"

function Joltage() {
	let totaller = 0

	for (let line of d3input) {
		let indStart = 0
		let indEnd = -11
		let innerTot = []

		while (indEnd < 1) {
			let maxNum =
				indEnd >= 0 ? Math.max(...line.slice(indStart)) : Math.max(...line.slice(indStart, indEnd))
			indStart =
				(indEnd >= 0
					? line.slice(indStart).indexOf(maxNum)
					: line.slice(indStart, indEnd).indexOf(maxNum)) +
				indStart +
				1
			indEnd++
			innerTot.push(maxNum)
		}
		totaller += Number(innerTot.join(""))
	}

	return <p>{totaller}</p>
}

export default Joltage
