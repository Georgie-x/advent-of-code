import { d5nums, d5arr } from "../input"

function Cafe() {
	let fresh = new Set([])

	for (let num of d5nums) {
		for (let [start, end] of d5arr) {
			Number(num) >= Number(start) && Number(num) <= Number(end)
				? (fresh = new Set([...fresh, num]))
				: null
		}
	}

	return <p>{fresh.size}</p>
}

export default Cafe
