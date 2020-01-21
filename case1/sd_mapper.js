"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: 
   Date:   

*/

var thisTime = new Date(); //gets current time
var timeStr = thisTime.toLocaleString();
//saves the text for thisTime
document.getElementById("timeStamp").innerHTML = timeStr;
//changes HTML to timeStr variable

var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
//determines which sky map to show based on the date

var mapNum = (2 * thisMonth + thisHour) % 24;
//month is refering to the thisMonth variable and hour is this Hour which store the value of the formula used in mapNum
var imgStr = "<img src='sd_sky" + mapNum +  ".png'/>";
//places the correct map on website

document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);


