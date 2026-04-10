function solution(sentences, words) {
  // TODO: implement the solution
  // console.log(sentences)
  let result=[]
  
  for(let i=0; i<sentences.length;i++) {
    let newSentence 
     let start_pos= sentences[i].toLowerCase().indexOf(words[i].toLowerCase())
    let match_indices=[]
    
     while(start_pos !== -1) {
      match_indices.push(start_pos)
      start_pos= sentences[i].toLowerCase().indexOf(words[i].toLowerCase(), start_pos+words[i].length)
     } 
        let currentString=''
          let currentSentence = sentences[i]
     for(let idx=0;idx <match_indices.length; idx++) {
        if(sentences[i][match_indices[idx]] === sentences[i][match_indices[idx]].toUpperCase()) {
          
          let firstPart=currentSentence.slice(0,match_indices[idx])
          let secondPart = currentSentence.slice(match_indices[idx] +words[i].length)
          let myWord = words[i].split("").reverse().join("")
          let first = myWord.slice(0,1).toUpperCase()
          let last =myWord.slice(1,myWord.length)
          currentString = firstPart + first+last + secondPart         
          } else {
          let firstPart=currentSentence.slice(0,match_indices[idx])
          let secondPart = currentSentence.slice(match_indices[idx] +words[i].length)
          let myWord = words[i].split("").reverse().join("")
          let first = myWord.slice(0,1)
          let last =myWord.slice(1,myWord.length)
           currentString = firstPart + first+last + secondPart         

        }
        currentSentence=currentString
        newSentence=currentString
     }
     
     if(match_indices.length ===0) {
      newSentence = sentences[i]
     }
     result.push(newSentence)
  }
  console.log(result)
  return result
  
}

module.exports = { solution };
