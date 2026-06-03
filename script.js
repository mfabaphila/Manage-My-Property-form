const button = document.getElementById("submitBtn");
   button.addEventListener ("click", function(){

      const bedrooms = document.getElementById("bedrooms").value; 
      const residentialZone = document.getElementById("residentialZone").value;
  
let estimatedRent = ""; 

if(bedrooms==="1" && residentialZone === "Township"){
   estimatedRent = "2000 - 3000";
}

else if(bedrooms==="1" && residentialZone==="Urban Area"){
   estimatedRent = "3500 - 5500";
}

else if(bedrooms==="2" && residentialZone==="Township"){
   estimatedRent="3500 - 5500";
}
else if(bedrooms==="2" && residentialZone==="Urban Area"){
   estimatedRent="6000 - 7500";
}

else if(bedrooms==="3" && residentialZone==="Township"){
   estimatedRent="6000 - 7500";
}
else if(bedrooms==="3" && residentialZone==="Urban Area"){
   estimatedRent="8000 - 10000";
}

else if(bedrooms==="4+" && residentialZone==="Township"){
   estimatedRent="9000+";
}
else if(bedrooms==="4+" && residentialZone==="Urban Area"){
   estimatedRent="11000+";
}
   


document.getElementById("estimatedRent").value = estimatedRent; 
})