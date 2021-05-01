// shitou jiandao  bu
var personAction = process.argv[process.argv.length - 1]

var random  = Math.random() * 3
var computerAction = ''

if(random < 1){
    computerAction = 'shitou' 
}else if(random > 2){
    computerAction = 'jiandao'
}else{
    computerAction = 'bu'
}
console.log(computerAction)
if(computerAction === personAction){
    console.log('平局');
}else if(
    computerAction === 'shitou'  && personAction === 'bu' || 
    computerAction === 'jiandao' && personAction === 'shitou' ||
    computerAction === 'bu' && personAction === "jiandao"
){
    console.log('你赢了!')
}else{
    console.log('你输了!')
}