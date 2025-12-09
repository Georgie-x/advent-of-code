import { d8input } from "../input"

function Junction() {
	const distance = ([x0, y0, z0], [x1, y1, z1]) => Math.hypot(x1 - x0, y1 - y0, z1 - z0)


	let array1 = []
	let minDist = 0.1

	for (let coord of d8input) {
		let shortest = [100000000000000,[0,0,0],[0,0,0]]
		for (let i = 0; i <= d8input.length - 1; i++) {
            if(coord === d8input[i]){continue}
			let dist = distance(coord, d8input[i])

			if (dist < shortest[0] && dist > minDist) {
				shortest = [dist, d8input[i], coord]
			}
		}
		array1.push(shortest)
	}

	return <p>{array1}</p>
}

export default Junction
