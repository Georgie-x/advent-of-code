import { d7input } from "../input"

function Manifold() {
	let splits = 0
	let prevBeamOn = []
	let counter = 0

	for (let line of d7input) {
		let beamOn = []
		counter++


		for (let [index, char] of line.entries()) {

			char === "S"
				? beamOn.push(index)
				: char === "^" && prevBeamOn.includes(index)
				? (beamOn.push(index - 1, index + 1))
				: char === "." && prevBeamOn.includes(index)
				? beamOn.push(index)
				: null
		}
if (counter % 2 === 0) {splits += beamOn.length}
	
		console.log(splits)
		prevBeamOn = beamOn

	}

	return <p>{splits}</p>
}

export default Manifold
