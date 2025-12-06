import { d4input } from "../input"

function Paper() {
	let total = 0
	let rollsLeft = true
	let d4 = d4input.map((line) => [...line])
	let passCount = 0

	while (rollsLeft) {
		passCount++
		if (passCount > 100) {
			break
		}
		rollsLeft = false
		let cellsToChange = []

		for (let [i, line] of d4.entries()) {
			for (let [j, _slot] of line.entries()) {
				if (d4[i][j] !== "@") {
					continue
				}
				let holder = []
				if (d4[i - 1]?.[j - 1] !== undefined) {
					holder.push(d4[i - 1][j - 1])
				}
				if (j - 1 >= 0) {
					holder.push(d4[i][j - 1])
				}
				if (d4[i + 1]?.[j - 1] !== undefined) {
					holder.push(d4[i + 1][j - 1])
				}
				if (d4[i - 1]?.[j] !== undefined) {
					holder.push(d4[i - 1][j])
				}
				if (d4[i + 1]?.[j] !== undefined) {
					holder.push(d4[i + 1][j])
				}
				if (d4[i - 1]?.[j + 1] !== undefined) {
					holder.push(d4[i - 1][j + 1])
				}
				if (j + 1 < d4[i].length) {
					holder.push(d4[i][j + 1])
				}
				if (d4[i + 1]?.[j + 1] !== undefined) {
					holder.push(d4[i + 1][j + 1])
				}
				const matches = holder.toString().match(/[@#]/g)
				const matchTotal = matches ? matches.length : 0
				if (matchTotal < 4) {
					total++
					cellsToChange.push([i, j])
				}
			}
		}

		for (let [i, j] of cellsToChange) {
			d4[i][j] = `#`
		}

		for (let i = 0; i < d4.length; i++) {
			for (let j = 0; j < d4[i].length; j++) {
				if (d4[i][j] === "#") {
					d4[i][j] = "."
				}
			}
		}

		if (cellsToChange.length > 0) {
			rollsLeft = true
		}
	}

	return <p>{total}</p>
}

export default Paper
