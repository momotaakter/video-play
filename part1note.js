//callback function
function firstfunction(callback){
    setTimeout(() => {
        console.log('first');
        callback();
        
    }, 1000);
}

function secondfunction(){
    console.log('second');
    
}
firstfunction(secondfunction);



//return keyword----------function scoper result golbal scope hisabe use korte chaile
function returnfnction(a,b){
    return a+b

}
const getres=returnfnction(4,3);
console.log(getres);

//promise
//var num=true;[number true or false er upor bitti kore result dekabe]
var num=true;
const mypromise=new Promise((resolve,reject)=>{
    if(num){
        resolve('success');
    }
    else{
        reject('fail')    
    }

}).then((success)=>{ //then mane success
    console.log(success);
    
}).catch((fail)=>{
    console.log(fail);
    
})


//async/await



//for of looop-----
const myarray=[4,5,6,78,8];
for(const data of myarray){
    console.log(data);
    
}


//just for loop array/object er prottekta value ke ak ak kore ber kore


//for each loop 
//for each loop value return kort parena but map ar filter aigulo value return korte pare
const myarrya=[4,5,6,7,8];
const newarray=myarrya.forEach((x)=>{
return x;
    
});
console.log(newarray);

//aitar result undefined dekabe




//map
const myarryaa=[4,5,6,7,8];
const newarraya=myarrya.map((x)=>{
    return x;
});
console.log(newarray);
//akane array er prottekta value alada kore return korse jeta amra global scope hisabe use korte parbo



//filter
const filterarray=[2,3,4,5,6,7];
const filteraarray=myarray.filter((x)=>{
    return x%2===0;
});
console.log(newarray);
//akane filter array ar map array 2taii new value return kore jeta amra globaly use korte parii



//reduce methood obossoy notun value return kore
//reduce methoood value return kore so aita obossoy akta variable e rakte hobe

//reduce 2 ti value akta purver arekta bortomaner arekta initial value take
const arraymy=[34,5,6,7,78,7];
const getarray=arraymy.reduce((x,y)=>{
   return x+y;
},0);
console.log(getarray);


//create element
const myid=document.getElementById('myid');
const createelement=document.createElement('h1');
myid.append(createelement);
createelement.innerHTML='hellow jonogon';


//array distructure  
//array distructure kore amra array er protekkti element ke notun akti variable e rakte parii
const myarrayy=[3,4,5,6,7,8];
const[a,b,c,d,e,f]=myarrayy;
console.log(e);



//object literals
//functioner bitor object hote pare
function myfunction(name,age){
    return{
 name:name,
 age:age
    }
}

const firststudent=myfunction('sadia',54);
console.log(firststudent);




//map/filter  aigula array er prottekta element er upor loop chalai and prottekta array ke notun akta array te transfer kore



//Promise
//then mane success promise
//niche aibabeoo promise likha jai:
const secondpromise=new Promise((res,rej)=>{
    res('success')
    
    })
    secondpromise.then((success)=>{
        console.log(success);
        
    });

//IIFE
(function() {
    var message = "Hello, IIFE!";
    console.log(message);
  })();



 //
 /*JavaScript-এ Promise-এর সাথে race() ফাংশন একটি গুরুত্বপূর্ণ ফাংশন। এটি এক বা একাধিক প্রমিস (Promise) একসাথে চালিয়ে প্রথমে যেটি সম্পন্ন হয়, সেই প্রমিসের রেজাল্ট রিটার্ন করে।


 Promise.race() কীভাবে কাজ করে?
 Promise.race() একটি Promise নেয় এবং সেই Promise এর মধ্যে থাকা একাধিক প্রমিসের মধ্যে যেটি প্রথমে resolve বা reject হয়, সেটির রেজাল্ট প্রদান করে। এটি একটি iterable (যেমন array) হিসেবে একাধিক প্রমিস নেয় এবং কোন প্রমিস আগে complete হলো, সেটি দেখায়।
 */


const promise1=new Promise((res,rej)=>{
    res('success');
})
const promise2=new Promise((res,rej)=>{
    res('fail');
})

const promise3=new Promise((res,rej)=>{
    res('fail');
})


const promise4=new Promise((res,rej)=>{
    res('fail');
});
//promise all sob promise ke akbareii call kore fele
Promise.all([promise1,promise2,promise3,promise4])
.then(([res1,res2,res3,res4])=>{
    console.log(res1);
    
})


//sob gulo proise ke call kore icce korle distructuring o korte parii
//upore aibababe distructure kore nilam



//promise race 
//race mane hocce protijugita ---sobar age jei kaj ti complte hobe setaii nibe race ............
const promise23=new Promise((res)=>{
    
    setTimeout(() => {
    res('successs')
       
    }, 1000);
   
   })
   const promise34=new Promise((res)=>{
       res('2taiiiii')
   })
   
   Promise.race([promise23,promise34]).then((first)=>{
       console.log(first);
       
   })
   
   //akane promise prothom ta ke call korlona ............
   //promise race muloto sobar age jei kaj ta complete hobe setaii nibe,,,

   //ar sobar laster ta nibena.......karon aitaii promise.race er boisistoo


   //functioner bitor o promise hote pare
   

//promise chaining
//functioner bitor 4 ta promise return korbo

const promise16=()=>{
    return new Promise((res,rej)=>{
        res('promise1 is completed');
    })
} 


const promise26=()=>{
    return new Promise((res,rej)=>{
        res('promise2 is completed');
    })
}

const promise36=()=>{
    return new Promise((res,rej)=>{
        res('promise3 is completed');
    })
}

const promise46=()=>{
    return new Promise((res,rej)=>{
        res('promise4 is completed');
    })
}

promise1()
.then((first)=>{
    console.log(first);
    
});

promise2().then((second)=>{
    console.log(second);
    
})


promise3().then((second)=>{
    console.log(second);
    
})

promise4().then((second)=>{
    console.log(second);
    
})

//upore amra sob gulo promise ke call korlam
//upore jotogulo function ace sob gulo asyncronas function




//async awaiter maddome prottekta promise ke call kora jaii:
const promise164=()=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res('promise1 is completed');
        }, 2000);
       
    })
}


const promise264=()=>{
    return new Promise((res,rej)=>{
        res('promise2 is completed');
    })
}

const promise364=()=>{
    return new Promise((res,rej)=>{
        res('promise3 is completed');
    })
}

const promise464=()=>{
    return new Promise((res,rej)=>{
        res('promise4 is completed');
    })
}

async function asyncawait(){
const prmi1=await promise164();
console.log(prmi1);

const prmi2=await promise264();
console.log(prmi2);
const prmi3=await promise364();
console.log(prmi3);

const prmi4=await promise464();
console.log(prmi4);

}
asyncawait();



//constructor 
//constructor holo bises akdoroner function jekane onk gulo object gulo songrokkito takec


const student1=new myclass('sadia',32,98);
console.log(student1);
