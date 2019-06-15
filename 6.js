function binaryConverter(desimal=12){
    var hasil = []

    for(desimal ; desimal>0 ; desimal/2){
        if(desimal!==0){
            if(desimal%2!==0){
                desimal = Math.floor(desimal/2)
                hasil.push(1)
            }
            else{
                desimal = Math.floor(desimal/2)
                hasil.push(0)
            }
        }
    }

    return hasil.reverse()
}
console.log(binaryConverter())
