function palindrome(text = 'banananana',findText = 'nana'){
    var hasil = 0

    var textLength = text.length
    var findTextLength = findText.length

    for(var a = 0 ; a<textLength-1 ; a++){
        var textSubString = text.substring(a,findTextLength+a)
        if(textSubString == findText){
            hasil++
        }
    }
    for(var a = textLength ; a>0 ; a--){
        var textSubString = text.substring(a,findTextLength+a)
        if(textSubString == findText){
            hasil++
        }
    }

    return hasil
}

console.log(palindrome())