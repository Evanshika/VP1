class dog  ( ) {
    constructor(){ }
foodStock=database.ref('food');
foodStock.on("value",readStock);

function readStock(data){
    foodS=data.val();
}

function writeStock (x){

database.ref('/').update {(
    Food:x
)}


}



}
