import { d7input } from "../input"

function Manifold() {

	let splits = 0

	for (let line of d7input) {
		let beamOn = []
		console.log(line)
		for (let [index, char] of line) {
			console.log(char)
			char === "s"
				? beamOn.push(index)
				: char === "^" && prevBeamOnamOn.includes(index)
				? (beamOn.push(index - 1, index + 1), splits++)
				: char === "." && prevBeamOn.includes(index)
				? beamOn.push(index)
				: null
		}
		let prevBeamOn = beamOn
		beamOn = []

	}

	return <p>{splits}</p>
}

export default Manifold
