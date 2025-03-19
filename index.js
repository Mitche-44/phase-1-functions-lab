// Code your solution in this file!


function distanceFromHqInBlocks(streetNo) {
  return Math.abs(42 - streetNo)
}

function distanceFromHqInFeet(streetNo) {
  let distance = Math.abs(42 - streetNo);
  return distance * 264;
}

function distanceTravelledInFeet(start, end) {
  let distance = Math.abs(end - start);
  return distance * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = Math.abs(start - destination);
  const totalDistanceInFeet = distance * 264;

  if (totalDistanceInFeet < 400) {
      return 0;
  } else if (totalDistanceInFeet > 400 && totalDistanceInFeet < 2000) {
      return (totalDistanceInFeet - 400) * 0.02;

  } else if (totalDistanceInFeet < 2500) {
      return 25;
  }
  else {
      return 'cannot travel that far';
  }

}