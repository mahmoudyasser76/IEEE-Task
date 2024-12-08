function CombineWords(word1,word2)
{
    let combineword = ""
    const maxlength = Math.max(word1.length, word2.length)

    for (let i = 0; i < maxlength; i++)
    {
        if (i < word1.length) combineword += word1[i]
        if (i < word2.length) combineword += word2[i]
    }

    console.log(combineword)
}

CombineWords("Ahmed is", "Amazing")
CombineWords("Mahmoud","Yasser")