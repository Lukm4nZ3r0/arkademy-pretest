function palindrome(text = 'banananana',findText = 'nana'){
    var hasil = 0

    var textLength = text.length // klo valuenya default, textLength = 10
    var findTextLength = findText.length // klo valuenya default, findTextLength = 4

    for(var a = 0 ; a<textLength-1 ; a++){ // hitung dari kiri ke kanan
        var textSubString = text.substring(a,findTextLength+a)
        if(textSubString == findText){
            hasil++
        }
    }
    for(var a = textLength ; a>0 ; a--){ // hitung dari kanan ke kiri
        var textSubString = text.substring(a,findTextLength+a)
        if(textSubString == findText){
            hasil++
        }
    }

    return hasil
}

console.log(palindrome())
