var historyArg = []
var historyResult = []
let i = 0
let isTrue = true
let isOp = false

function clearScreen(){
    document.getElementById("result").value = ""
}

function cls(){
    document.getElementById("result").value =  document.getElementById("result").value.slice(0, -1)
}

function display(value){
    if(value == '(')
    {
        if(isOp == false) document.getElementById("result").value += '*'
        isTrue = false
    }
    if(value == ')') isTrue = true
    if(value == '+' || value == '-' || value == '*' || value == '/')
    {
        isOp = true
    } else isOp = false
    document.getElementById("result").value += value
}

function result(){
    if(!isTrue) document.getElementById("result").value += ')'
    var p = document.getElementById("result").value;
    historyArg[i] = p;
    var q = eval(p);
    historyResult[i++] = q;
    document.getElementById("result").value = q;
}


function viewHistory(){

    let toJson = {
        'val': []
    };

    for(let j = 0; j < i; j++)
    {
        toJson.val.push({ 'arg': historyArg[j], 'res': historyResult[j]})
    }

    var inJson = JSON.stringify(toJson)
    alert(inJson)
    console.log(inJson)


}
