import { d4input } from "../input"

function Paper() {
	let count = 0
	

	
		for (let [i, line] of d4input.entries()) {
			for (let [j, _slot] of line.entries()) {
				let holder = []
				if (d4input[i][j] === ".") {
					continue
				}
				if (d4input[i - 1] && d4input[i - 1][j - 1] !== undefined) {
					holder.push(d4input[i - 1][j - 1])
				}
				if (d4input[i] && d4input[i][j - 1] !== undefined) {
					holder.push(d4input[i][j - 1])
				}
				if (d4input[i + 1] && d4input[i + 1][j - 1] !== undefined) {
					holder.push(d4input[i + 1][j - 1])
				}
				if (d4input[i - 1] && d4input[i - 1][j] !== undefined) {
					holder.push(d4input[i - 1][j])
				}
				if (d4input[i + 1] && d4input[i + 1][j] !== undefined) {
					holder.push(d4input[i + 1][j])
				}
				if (d4input[i - 1] && d4input[i - 1][j + 1] !== undefined) {
					holder.push(d4input[i - 1][j + 1])
				}
				if (d4input[i] && d4input[i][j + 1] !== undefined) {
					holder.push(d4input[i][j + 1])
				}
				if (d4input[i + 1] && d4input[i + 1][j + 1] !== undefined) {
					holder.push(d4input[i + 1][j + 1])
				}
				const matches = holder.toString().match(/[@#]/g)
				const matchCount = matches ? matches.length : 0
				if (matchCount < 4) {
					count++;
                    d4input[i][j] = `#`
				}
			}
		} 
	}

	return <p>{count}</p>

export default Paper
