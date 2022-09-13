var name="ranjithkumar"
var na="mani"
var vowel=["a","e","i","o","u"];
var count=0,sum=0;
for(i=0;i<name.length;i++){
    if
       ( vowel.includes(name[i])){
        count=count+1
    }
    // console.log(count)
}
for(i=0;i<na.length;i++){
    if
       ( vowel.includes(na[i])){
        sum=sum+1
    }
    // console.log(sum)
}
if(count>sum){
    console.log(name +"has more vowels")
}
else{
    console.log(na+"has more vowels")

}



//find nearest large num


let array=[12,23,25,12,34,45]
for (let index = 0; index < array.length; index++) {
    if(array[index]<array[index+1]){

        if (array[index]<array[index+1])
        {
            console.log(array[index+1])  
        }
        else
        {
            console.log(array[index+2])  
        }
      

     }
    //  else{
    //     console.log(-1)
    //
      
    }
   

    
