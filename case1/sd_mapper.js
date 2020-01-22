"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: 
   Date:   

*/
//gets current time
var thisTime = new Date(); 

//saves the text for thisTime
var timeStr = thisTime.toLocaleString();

//changes HTML to timeStr variable
document.getElementById("timeStamp").innerHTML = timeStr;

//determines which sky map to show based on the date
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

//month is refering to the thisMonth variable and hour is this Hour which store the value of the formula used in mapNum
var mapNum = (2 * thisMonth + thisHour) % 24;

//places the correct map on website
var imgStr = "<img src='sd_sky" + mapNum +  ".png'/>";


document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);


