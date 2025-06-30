var sellingprice = 999
var listingprice = 1499

var discount = ((listingprice - sellingprice)/listingprice)*100
console.log("Discount = "+discount)
displaydiscount = Math.round(discount)
console.log(displaydiscount+"% off")

var result = listingprice > sellingprice
console.log(result);
