function getDistance(distanceTraveled, traveledPercent) {
	const allDistanceTraveled = distanceTraveled * (100 / traveledPercent);
	return 'distance between village and capital: ' + String(allDistanceTraveled) + 'm';
}

module.exports = getDistance;