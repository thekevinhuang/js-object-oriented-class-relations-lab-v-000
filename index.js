let driverId = 0
let tripId = 0
let passengerId = 0
let store = {drivers: [], passengers: [], trips:[]}

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(function(item){return this.id === item.driverId}.bind(this))
  }

  passengers() {
    let tripList = this.trips()
    let passengers = tripList.map(function(trip){return trip.passenger()})
    return passengers
  }
}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(function(item){return this.id === item.passengerId}.bind(this))
  }

  drivers() {
    let tripList = this.trips()
    let drivers = tripList.map(function(trip){return trip.driver()})
    return drivers
  }
}

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = ++tripId
    store.trips.push(this)
  }

  passenger() {
    return store.passengers.find(function(item){return item.id === this.passengerId}.bind(this))
  }

  driver() {
    return store.drivers.find(function(item){return item.id===this.driverId}.bind(this))
  }

}
