function count(){
    event.preventDefault();
    for(i=99;i>=1;i--){
        if(i>2){
         document.getElementById("lyrics").innerHTML+="<br />"+i+" bottles of beer on the wall, "+i+" bottles of beer <br />Take one down and pass it around, " + (i-1) +" bottles of beer<br />";
    }
        else if(i==2){
            document.getElementById("lyrics").innerHTML+="<br />"+i+" bottles of beer on the wall, "+i+" bottles of beer <br />Take one down and pass it around, " + (i-1) +" bottle of beer<br />";
        }
        else{
           
         document.getElementById("lyrics").innerHTML+="<br />"+i+" bottle of beer on the wall, "+i+" bottle of beer <br />Take one down and pass it around, no more bottles of beer<br />";
         document.getElementById("lyrics").innerHTML+="<br /> No more bottles of beer on the wall, no more bottles of beer <br />Go to the store and buy some more, 99 bottles of beer on the wall<br />";
        }
        }
}
