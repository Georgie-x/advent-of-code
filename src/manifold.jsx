import { d7input } from "../input"

function Manifold() {
	let prevBeamCounts = {}

	for (let line of d7input) {
		let beamCounts = {}

		for (let [index, char] of line.entries()) {
			const count = prevBeamCounts[index] || 0
			
			if (char === "S") {
				beamCounts[index] = (beamCounts[index] || 0) + 1
			} else if (char === "^" && count > 0) {
				beamCounts[index - 1] = (beamCounts[index - 1] || 0) + count
				beamCounts[index + 1] = (beamCounts[index + 1] || 0) + count
			} else if (char === "." && count > 0) {
				beamCounts[index] = (beamCounts[index] || 0) + count
			}
		}
		
		prevBeamCounts = beamCounts
	}

	// Sum all beam counts at the end
	const totalPaths = Object.values(prevBeamCounts).reduce((sum, count) => sum + count, 0)
	return <p>{totalPaths}</p>
}

export default Manifold
