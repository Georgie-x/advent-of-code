import proData from "../../input"

function CrackCode() {
	let cumTot = 50
	let count = 0

	for (let number of proData) {
		const absMove = Math.abs(number)
		
		for (let i = 1; i <= absMove; i++) {
			if (number > 0) {
				cumTot = (cumTot + 1) % 100
			} else {
				cumTot = (cumTot - 1 + 100) % 100
			}
			
			if (cumTot === 0) {
				count++
			}
		}
	}

	return <p>{count}</p>
}

export default CrackCode