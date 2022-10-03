
// 1 no problem

function radianToDegree (radian){
    const degreeValue = 180;
    const pi = 3.1416;
    const degreePi = degreeValue/pi;
    const degree = degreePi * radian;
    return degree.toFixed(2)
}

// 2 no Problem
function isJavaScriptFile(value) { 
	if (typeof value === "string") { 
		return true; 
	} 
	else{ return false;}
}

// 3 no problem
function oilPrice(dieselPrice, PetrolPrice, octanePrice){
    const totalPrice = dieselPrice + PetrolPrice + octanePrice;
    return totalPrice;
}

//  5 no problem
const product1 ={
    name: 'laptop',
    brandName: 'asus',
    color: 'red',
    prize: 40000
}
const product2 ={
    name: 'laptop',
    brandName: 'sumsung',
    color: 'black',
    prize: 45000
}
function isBestFriend(product1, product2){
    if(product1.brandName == product2.brandName){
        return true;
    }
    else{
        return false;
    }
}










