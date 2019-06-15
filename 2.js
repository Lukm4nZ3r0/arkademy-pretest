function bilanganPrima(banyakBaris=5){
    // disaring sesuai requirement
    if(banyakBaris>0 && banyakBaris<10){
        var deret = []
        var deretBilangan = []
    
        // buat objek arraynya dahulu sebanyak yang diminta
        for(var a = 0 ; a<banyakBaris ; a++){
            deret.push([])
        }
    
        // memeriksa angka 2 sd 50, apakah ada bilangan prima diantara itu
        for (i=2; i<=50; i++){
            if(i>=2){
            // membuat seluruh bilangan >= 2 menjadi prima secara default
            var prima =true;
                for(j=2; j<i; j++){
                    // membuat bilangan bukan prima
                    if(i%j==0){
                        prima=false;
                    }
                }
            }
            if(prima==true){
                // memasukkan bilangan dalam array yang telah dibuat
                deretBilangan.push(i)
            }
        }
    
    
        for(var a = 0 ; a<banyakBaris ; a++){
            for(var b = 0 ; b<banyakBaris ; b++){
                if(deretBilangan[a-b]!==undefined){
                    deret[a][a-b] = deretBilangan[a-b]
                }
            }
        }
    
        return deret
    }
}
console.log(bilanganPrima())