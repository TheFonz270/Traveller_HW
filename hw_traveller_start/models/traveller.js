const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
const result = this.journeys.map(a => a.startLocation);
return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map(a => a.endLocation);
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let result = this.journeys.filter(a => a.transport == transport)
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let result = this.journeys.filter(a => a.distance > minDistance);
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let result = this.journeys.reduce((previousValue, currentValue) => previousValue + currentValue.distance, 0);
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transports = this.journeys.map(a => a.transport);
  const result = transports.filter((item, index) => transports.indexOf(item) === index);
  return result;
};


module.exports = Traveller;
