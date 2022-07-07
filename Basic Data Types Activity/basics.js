//For myFirstName
//var myFirstName = ("Caitlin " + "Brienna " + "Lindgren");
//console.log(myFirstName);

//For number of cities
//var numberOfCities = 5;
//console.log(numberOfCities);

//For having fun
//var havingFun = true; 
//console.log(havingFun);

const product = {
    id: "productId",
    serialNumber: "WD579000",
    manufacturer: "Apple",
    price: 1500
}
function getProduct(product) {
    console.log(product.id);
    console.log(product.serialNumber);
    console.log(product.manufacturer);
    console.log(product.price);
};
getProduct(product);

let bike = {
    model: 'marin',
    wheels: 2,
    speed: 8,
    authorizedBikers: ['Beatrice', 'Alan'],
    hasHadAccident: false,
  };
  function getBikeSpeed() {
    bike.speed=12
    return (bike.speed);
  }
  console.log('result: ' + JSON.stringify(getBikeSpeed()));
  
  if (typeof module !== 'undefined') {
    module.exports = getBikeSpeed;
  }