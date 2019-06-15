function dataSorting(bilangan = [6,22,34,15,2,13,26,57,42,32]){
    var panjangBilangan = bilangan.length
    var hasilAkhir

    for(var a = 0 ; a<panjangBilangan-1 ; a++){
        for(var b = 0 ; b<panjangBilangan-1 ; b++){
            if(bilangan[b]>bilangan[b+1]){
                var temp = bilangan[b+1]

                //penukaran posisi antara bilangan dengan bilangan selanjutnya
                bilangan[b+1] = bilangan[b]
                bilangan[b] = temp
            }
        }
        hasilAkhir = 'Asc : '+bilangan
    }
    for(var a = 0 ; a<panjangBilangan-1 ; a++){
        for(var b = 0 ; b<panjangBilangan-1 ; b++){
            if(bilangan[b]<bilangan[b+1]){
                var temp = bilangan[b+1]

                //penukaran posisi antara bilangan dengan bilangan selanjutnya
                bilangan[b+1] = bilangan[b]
                bilangan[b] = temp
            }
        }
    }
    hasilAkhir = hasilAkhir+'\nDesc : '+bilangan+'\nData Terkecil : '+bilangan[panjangBilangan-1]+'\nData Terbesar : '+bilangan[0]
    return hasilAkhir
}

console.log(dataSorting())