class Vacation {
	constructor(destination, length) {
		this.destination = destination
		this.length = length
	}

	print() {
		console.log(`${this.destination} will take ${this.length} days.`)
	}
}

const trip = new Vacation("Santiago, Chile", 7)
trip.print()


export default class Expedition extends Vacation {
	constructor(destination, length, gear) {
		super(destination, length)
		this.gear = gear
	}

	print() {
		super.print()
		console.log(`Bring your ${this.gear.join(" and your ")}`)
	}
}

const trip1 = new Expedition("Mt. Whitney", 3, [
		"sunglass",
		"pray flags",
		"camera"
	])

trip1.print()
