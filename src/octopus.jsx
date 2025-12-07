import { d6input, d6signs } from "../input"

function Octopus() {
	let total = 0

	console.log(d6input, d6signs)
	for (let [index, element] of d6signs.entries()) {
		let first = []
		let second = []
		let third = []
		let fourth = []
		if (d6input[0][index][3]) {
			first.push(d6input[0][index][3])
		}
		if (d6input[1][index][3]) {
			first.push(d6input[1][index][3])
		}
		if (d6input[2][index][3]) {
			first.push(d6input[2][index][3])
		}
		if (d6input[3][index][3]) {
			first.push(d6input[3][index][3])
		}
		if (d6input[0][index][2]) {
			second.push(d6input[0][index][2])
		}
		if (d6input[1][index][2]) {
			second.push(d6input[1][index][2])
		}
		if (d6input[2][index][2]) {
			second.push(d6input[2][index][2])
		}
		if (d6input[3][index][2]) {
			second.push(d6input[3][index][2])
		}

		if (d6input[0][index][1]) {
			third.push(d6input[0][index][1])
		}
		if (d6input[1][index][1]) {
			third.push(d6input[1][index][1])
		}
		if (d6input[2][index][1]) {
			third.push(d6input[2][index][1])
		}
		if (d6input[3][index][1]) {
			third.push(d6input[3][index][1])
		}

		if (d6input[0][index][0]) {
			fourth.push(d6input[0][index][0])
		}
		if (d6input[1][index][0]) {
			fourth.push(d6input[1][index][0])
		}
		if (d6input[2][index][0]) {
			fourth.push(d6input[2][index][0])
		}
		if (d6input[3][index][0]) {
			fourth.push(d6input[3][index][0])
		}

		let fir = Number(first.join(""))
		let sec = Number(second.join(""))
		let thi = Number(third.join(""))
		let fou = Number(fourth.join(""))

		if (element === "+") {
			total += fir + sec + thi + fou
		} else {
			if (fir === 0) {
				fir++
			}
			if (sec === 0) {
				sec++
			}
			if (thi === 0) {
				thi++
			}
			if (fou === 0) {
				fou++
			}
			total += fir * sec * thi * fou
		}
	}

	return <p>{total}</p>
}

export default Octopus
