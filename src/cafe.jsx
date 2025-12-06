import { d5input } from "../input"

function Cafe() {
	let total = 0
	let prevRangeTop = 0

	for (let range of d5input) {
		console.log(d5input, prevRangeTop, range)
		if (prevRangeTop >= range[1]) {
			continue
		}
		if (prevRangeTop >= range[0]) {
			total += range[1] - prevRangeTop
		} else {
			total += range[1] - range[0] + 1
		}
		if (range[1] > prevRangeTop) {
			prevRangeTop = range[1]
		}
	}
	return <p>{total}</p>
}

export default Cafe
