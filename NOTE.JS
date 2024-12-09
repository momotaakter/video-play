/*useReducer methood ------------------------------------------------array er akta khub important methood
------------------use reducer main array ke change korena
------------------onk gula function takleoo age je function ke call kora hobe seta print hobe

------------------main array ke change korena so aitake amra jokon kaj korbo tokon notun aro akti array te rakte parii

-----------------reduce methood o map/find er moto akti annonimus function create kore

-------------------reduce onk jinis neii peramiter hisabe tobe tobe main 2ti jinis neii 

-------------------akta purber value arekta hocce bortoman value

------------------reducer e curent value nie kono akta kaj korte hole obossoy previous value ullek kore dite hobe ai jonno aro akta methood aikane use kora hoi jetake bole initial value

------------------previous value obossoy ullek kore dite hobe ai jonno second man hisabe initial vlaue take nite hobe

-----------------ai previuous value hisabe amra kono variabel,array jekono kiso rakte parii

-------------------useReducer ke jodi kaje lagate chay taile map/filter aigular moto annonimas function like setar bitore prothom 2 ta jinis nite hobe tarpor akta initial man nite hobe



-------------------aigula charaoo useReducer aro 2 ta jinis neii akta hocce curent index abar arekta holo je array er upor bitti kore reduce kora hobe sei puro array take neii
var numbes=[1,34,5,6,78];
const newarray=numbes.reduce((previousvalue,currentvalue,currentindex,array)=>{
 
return (previousvalue+currentvalue);
  
},numbes[2]);

console.log(newarray);





------------------reducer akta looop o seta prottekta array er element er upor chole array er sob gulo element nie kaj kroe

-----------------
-------------------
-------------------
------------------
------------------
-----------------
-------------------
-------------------
------------------
------------------
-----------------
-------------------
-------------------
------------------
------------------
-----------------
-------------------
-------------------
------------------
-----------------
-------------------
-------------------
------------------
------------------
-----------------
-------------------
-------------------