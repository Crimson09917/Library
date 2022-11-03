var letters
var word
var guesses = []
var listOfWords = ['about', 'account', 'across', 'addition', 'adjustment', 'advertisement', 'after', 'again', 'against', 'agreement', 'almost', 'among', 'amount', 'amusement', 'angle', 'angry', 'animal', 'answer', 'apparatus', 'apple', 'approval', 'argument', 'attack', 'attempt', 'attention', 'attraction', 'authority', 'automatic', 'awake', 'balance', 'basin', 'basket', 'beautiful', 'because', 'before', 'behaviour', 'belief', 'berry', 'between', 'birth', 'bitter', 'black', 'blade', 'blood', 'board', 'boiling', 'bottle', 'brain', 'brake', 'branch', 'brass', 'bread', 'breath', 'brick', 'bridge', 'bright', 'broken', 'brother', 'brown', 'brush', 'bucket', 'building', 'burst', 'business', 'butter', 'button', 'camera', 'canvas', 'carriage', 'cause', 'certain', 'chain', 'chalk', 'chance', 'change', 'cheap', 'cheese', 'chemical', 'chest', 'chief', 'church', 'circle', 'clean', 'clear', 'clock', 'cloth', 'cloud', 'collar', 'colour', 'comfort', 'committee', 'common', 'company', 'comparison', 'competition', 'complete', 'complex', 'condition', 'connection', 'conscious', 'control', 'copper', 'cotton', 'cough', 'country', 'cover', 'crack', 'credit', 'crime', 'cruel', 'crush', 'current', 'curtain', 'curve', 'cushion', 'damage', 'danger', 'daughter', 'death', 'decision', 'degree', 'delicate', 'dependent', 'design', 'desire', 'destruction', 'detail', 'development', 'different', 'digestion', 'direction', 'dirty', 'discovery', 'discussion', 'disease', 'disgust', 'distance', 'distribution', 'division', 'doubt', 'drain', 'drawer', 'dress', 'drink', 'driving', 'early', 'earth', 'education', 'effect', 'elastic', 'electric', 'engine', 'enough', 'equal', 'error', 'event', 'every', 'example', 'exchange', 'existence', 'expansion', 'experience', 'expert', 'false', 'family', 'father', 'feather', 'feeble', 'feeling', 'female', 'fertile', 'fiction', 'field', 'fight', 'finger', 'first', 'fixed', 'flame', 'flight', 'floor', 'flower', 'foolish', 'force', 'forward', 'frame', 'frequent', 'friend', 'front', 'fruit', 'future', 'garden', 'general', 'glass', 'glove', 'government', 'grain', 'grass', 'great', 'green', 'group', 'growth', 'guide', 'hammer', 'hanging', 'happy', 'harbour', 'harmony', 'healthy', 'hearing', 'heart', 'history', 'hollow', 'horse', 'hospital', 'house', 'humour', 'important', 'impulse', 'increase', 'industry', 'insect', 'instrument', 'insurance', 'interest', 'invention', 'island', 'jelly', 'jewel', 'journey', 'judge', 'kettle', 'knife', 'knowledge', 'language', 'laugh', 'learning', 'leather', 'letter', 'level', 'library', 'light', 'limit', 'linen', 'liquid', 'little', 'living', 'loose', 'machine', 'manager', 'market', 'married', 'match', 'material', 'measure', 'medical', 'meeting', 'memory', 'metal', 'middle', 'military', 'minute', 'mixed', 'money', 'monkey', 'month', 'morning', 'mother', 'motion', 'mountain', 'mouth', 'muscle', 'music', 'narrow', 'nation', 'natural', 'necessary', 'needle', 'nerve', 'night', 'noise', 'normal', 'north', 'number', 'observation', 'offer', 'office', 'operation', 'opinion', 'opposite', 'orange', 'order', 'organization', 'ornament', 'other', 'owner', 'paint', 'paper', 'parallel', 'parcel', 'paste', 'payment', 'peace', 'pencil', 'person', 'physical', 'picture', 'place', 'plane', 'plant', 'plate', 'please', 'pleasure', 'plough', 'pocket', 'point', 'poison', 'polish', 'political', 'porter', 'position', 'possible', 'potato', 'powder', 'power', 'present', 'price', 'print', 'prison', 'private', 'probable', 'process', 'produce', 'profit', 'property', 'prose', 'protest', 'public', 'punishment', 'purpose', 'quality', 'question', 'quick', 'quiet', 'quite', 'range', 'reaction', 'reading', 'ready', 'reason', 'receipt', 'record', 'regret', 'regular', 'relation', 'religion', 'representative', 'request', 'respect', 'responsible', 'reward', 'rhythm', 'right', 'river', 'rough', 'round', 'scale', 'school', 'science', 'scissors', 'screw', 'second', 'secret', 'secretary', 'selection', 'sense', 'separate', 'serious', 'servant', 'shade', 'shake', 'shame', 'sharp', 'sheep', 'shelf', 'shirt', 'shock', 'short', 'silver', 'simple', 'sister', 'skirt', 'sleep', 'slope', 'small', 'smash', 'smell', 'smile', 'smoke', 'smooth', 'snake', 'sneeze', 'society', 'solid', 'sound', 'south', 'space', 'spade', 'special', 'sponge', 'spoon', 'spring', 'square', 'stage', 'stamp', 'start', 'statement', 'station', 'steam', 'steel', 'stick', 'sticky', 'stiff', 'still', 'stitch', 'stocking', 'stomach', 'stone', 'store', 'story', 'straight', 'strange', 'street', 'stretch', 'strong', 'structure', 'substance', 'sudden', 'sugar', 'suggestion', 'summer', 'support', 'surprise', 'sweet', 'system', 'table', 'taste', 'teaching', 'tendency', 'theory', 'there', 'thick', 'thing', 'thought', 'thread', 'throat', 'through', 'through', 'thumb', 'thunder', 'ticket', 'tight', 'tired', 'together', 'tomorrow', 'tongue', 'tooth', 'touch', 'trade', 'train', 'transport', 'trick', 'trouble', 'trousers', 'twist', 'umbrella', 'under', 'value', 'verse', 'vessel', 'violent', 'voice', 'waiting', 'waste', 'watch', 'water', 'weather', 'weight', 'wheel', 'where', 'while', 'whistle', 'white', 'window', 'winter', 'woman', 'wound', 'writing', 'wrong', 'yellow', 'yesterday', 'young', 'android']
function setWord(){

    word = listOfWords[Math.ceil(Math.random()*listOfWords.length)].toUpperCase()
    letters = word.split("")
    console.log(letters)

    let wordDiv = document.getElementById("wordDiv")
    wordDiv.style.width = 60*(letters.length)
    let i = 0
    letters.forEach(element => {
        let letter = document.createElement("input")
        letter.className = "letter"
        letter.id = "letter"+String(i)
        letter.disabled = true
        wordDiv.appendChild(letter)
        i += 1
    })
}

function enterKey(key){
    if(key == "ENTER"){
        let guess = document.getElementById("guessBox").innerHTML
        let poses = []
        
        for(let i=0;i<letters.length;i++){
            if(guess == letters[i]){
                poses.push(i)
            }
        }

        if(poses.length == 0){
            wrongGuess(guess)
        }else{
            poses.forEach(element => {
                console.log("letter"+String(element))
                document.getElementById("letter"+String(element)).value = guess
            })
        }

    }else{
        document.getElementById("guessBox").innerHTML = key
    }
}

function wrongGuess(guess){
    let cancel = false
    guesses.forEach(element => {
        if(element == guess){
            console.log("Your mum")
            cancel = true
        }
    })
    if(cancel == true){
        return
    }else{
        let div = document.createElement("div")
        div.className = "textBox"
        div.innerHTML = guess
        document.getElementById("guesses").appendChild(div)
        guesses.push(guess)
        document.getElementById("lives").innerHTML = "Lives = "+ String(5-guesses.length)
        if(5-guesses.length == 0){
            destroy()
        }
    }
}

document.onkeypress = function (e) {
    e = e || window.event;

    // console.log("Bro pressed the", e)
    enterKey(e.key.toUpperCase())
};
setWord()



function destroy(){
    subBody = document.getElementById("subBody")
    subBody.innerHTML = "YOU LOSE"
    subBody.style.fontSize = "500px"
}