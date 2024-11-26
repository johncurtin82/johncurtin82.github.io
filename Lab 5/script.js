

function arrayNumber(){
    event.preventDefault(event);
    const numArray = document.getElementById('numArray').value;
    let listArray = [];
    
    for (let i = 0; i <= numArray-1; i++){
        listArray[i] = parseInt(prompt("Enter array number "+(i+1)));
        
    } 
    console.log(listArray);
    
    let sum = 0;
    for (i=0; i< listArray.length; i++){
        sum = sum + listArray[i];

    }

    //console.log(sum);
    let avg = sum / numArray;

    //console.log(avg);
    document.getElementById("results").innerHTML+=("Your array is "+listArray+"<br />");
    document.getElementById("results").innerHTML+=("Your array sum is "+sum+"<br />");
    document.getElementById("results").innerHTML+=("Your array average is "+avg+"<br />");
}
