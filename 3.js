function hitungTinggiPohon(tinggiAwal,tahun){
    var hasil
    if(tinggiAwal>0 && tahun>0){
        // dikali 2 lalu ditambah 1
        hasil = ((tinggiAwal*2)+1)
        for(var i = 0 ; i<tahun-1 ; i++){
            hasil = ((hasil*2)+1)
        }
    }

    return hasil+' meter'
}

console.log(hitungTinggiPohon(2,2))
