//callback function---------
//higher order function-------------
//return keyword
//promise
//async/await
//for each
//map
//filter 
//reducer methood
//constructor
//this keyword
//IIFE(immedietly invokable function)
//methood chaining
//javascript clousur
//object literals
//consize methood
//distructure
//colceasing oparator??
//dom-create element
//rest peramiter
//spread oparator
//class er structure
//oparator precedence
//ternary oparator
//hoising
//try,catch,block 


/*-------------------------------------------------------------------------------------------------------------------callback function
function jetai likha howk na kno age jeta call hobe setaii print hobe
javascript default babe holo syncronas ..tobe kiso kiso asyncronas function ace,,,set time out setinterval aigula
amra asyncronas teke syncronase nie jete chaile 3 ti poddoti obolombon korte pari
callback function,promise,async/await-
akta function arekta function ke argument hisabe nite pare jei function ta peramiter hisabe use hoi seta holo callback function ar jei function tar bitore hoi seta holo higher roder function


asyncronas function
function higherorderfunction(){
setInterval(() => {
   console.log('first');   
}, 4000);
}
function secondfunction(){
    console.log('second');
}
higherorderfunction();
secondfunction();


uporer function take callback er maddome amra syncronas korbo:
function higherorderfunction(callback){ //aknae secondfunctioner nam deowa hoise
setInterval(() => {
   console.log('first');   
   callback();
}, 4000);
}
function secondfunction(){
    console.log('second');
}
higherorderfunction(secondfunction);



------------------------------------------------------------------------------------return keyword
amra jani je functioner bitorer result ke amra baire global hisabe use korte parina
ar seta functioner baire use korte hole return keyword dite hobe

but tar age peramiter take ati variable e rakte hobe and setake print korte hobe aibabe 
const myfun=(c,d)=>{
 const res=c+d;
 return res;

}
const peramiter=myfun(3,1);
console.log(peramiter);




------------------------------------------------------------promise
//kon akta condition soti hole akta dekabe ar vul hole error dekabe

var promise=true;
const mypromise=new Promise((resolve,reject)=>{
    if(promise){
      resolve('success')
        
    }
    else{
      reject('failure');
    }

}).then((res)=>{
    console.log(res);
    
}).catch((rej)=>{
    console.log(rej);
    

});

