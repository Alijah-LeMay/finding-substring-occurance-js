function solution(sentences, words) {
  // TODO: implement the solution
  // console.log(sentences)
  let result=[]
  
  for(let i=0; i<sentences.length;i++) {
    console.log(sentences[i],words[i])
    let newSentence = []
     let start_pos= sentences[i].toLowerCase().indexOf(words[i].toLowerCase())
    let match_indices=[]
    
     while(start_pos !== -1) {
      console.log(words[i])
      match_indices.push(start_pos)
      
      start_pos= sentences[i].toLowerCase().indexOf(words[i].toLowerCase(), start_pos+words[i].length)
      
     } 
     
     if() {
      
     }
     for(let idx=0;idx <match_indices.length; idx++) {
        console.log(sentences[i][match_indices[idx]])
        
        if(sentences[i][match_indices[idx]] === sentences[i][match_indices[idx]].toUpperCase()) {
          console.log("uppercase char")
          let newWord = words[i].split("").reverse().join("")
          
          console.log(newWord) 
          sentences[i].replace(words[i],newWord) 
          } else {
          console.log("lowercase char")
          let newWord = words[i].split("").reverse().join("")
          console.log(newWord)  
          newSentence.push(newWord)      

        }
     }
     result.push(newSentence)
     
     
    
     
  }
 
  
  console.log(result)
  return result
  
}

module.exports = { solution };
