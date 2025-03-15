// Code your solution in this file!

function distanceFromHqInBlocks(pickUp, hq = 42) {
    let distance = Math.abs(pickUp - hq);
    return distance;

}

distanceFromHqInBlocks(25);

function distanceFromHqInFeet(pickUp, hq = 42) {
    distanceFromHqInBlocks(pickUp, hq);
    let distance = distanceFromHqInBlocks(pickUp, hq) * 264;
    return distance;
}
distanceFromHqInFeet(33);

function distanceTravelledInFeet(start, destination) {
    let distance = Math.abs(start - destination) * 264;
    return distance;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let price;
    let charges;


    if (distance <= 400) {
        return charges = 0;
    }else if (distance > 400 && distance <= 2000) {
        return charges = ((distance - 400) * 2) / 100;
    }else if (distance > 2000 && distance <= 2500) {
        return charges = 25;

    }else {
        return 'cannot travel that far'
    }

}    