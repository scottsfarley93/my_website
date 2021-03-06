/**
 * @author Scott Farley
 */
$(document).ready(function(){
	// //first part of lesson
	// var cities = [
	        // { 
            // city: 'Madison',
            // population: 233209
        // },
        // {
            // city: 'Milwaukee',
            // population: 594833
        // },
        // {
            // city: 'Green Bay',
            // population: 104057
        // },
        // {
            // city: 'Superior',
            // population: 27244
        // },
        // {
        	// city: "Los Angeles",
        	// population: 18550000
        // },
        // {
        	// city: "San Francisco",
        	// population: 837442 
        // },
        // {
        	// city: "Portland",
        	// population: 609456
        // },
        // {
        	// city: "Seattle",
        	// population: 652405
        // }
     // ]
     // $("#cityPopTable").append("<tr><th>City</th><th>Population</th></tr>") // this is the header
     // for (var i = 0; i< cities.length; i++){
     	// $("#cityPopTable").append("<tr><td>" + cities[i].city + "</td><td>" + cities[i].population + "</tr>") //append each row, one by one
     // }
     // $("#cityPopTable").append("</table>") //finish the table, even though not strictly necessary
     // //end lesson deliverable code
//      
     // //this is debug.js
     // function addColumns(cityPop){ //function that takes in cityPop as an argument
//      	
     	// //get all the <tr>s
     	// trs = $("tr") //array of $(<tr>)
     	// for (var i=-1; i<cityPop.length; i++){//start at -1 so we can correct for the header row
     		// thisRow = trs[i+1] // get the $(row)
	     		// if (i == -1){ //deal with the header
	     			// $(thisRow).append("<th>City Size</th>") //do header stuff
	     		// }else{//otherwise do body stuff
	     			// var citySize; //define a variable to hold citySize
	     			// city = cityPop[i] //this city Object 
	     			// pop = city.population //the population of the city as an int
	     			// //figure out citySize 
	     			// if (+pop < 100000){
	     				// citySize = "Small";
	     			// }else if (+pop < 500000){
	     				// citySize = "Medium";
	     			// }else{
	     				// citySize = "Large"
	     			// }
	     			// //now we know citySize, add it to the table as a new column
	     			// $(thisRow).append("<td>" + citySize + "</td>")
// 	     			
	     		// }//end else
// 	     		
	     	// } // end for loop
		  // };//end add columns function
//  		
		 // addColumns(cities) //add the citySize column by calling this function
// 		 
// 		 
		 // function addEvents(){
		 	// $("table").mouseover(function(){ //this is fired when the mouse goes over top of the element
		 		// //make a random color
		 		// var rgb = { //this object will hold the band values
		 			// r:0,
		 			// g:0,
		 			// b:0,
		 		// }
		 		// for (band in rgb){
		 			// var random = Math.round(Math.random() * 255) // random number generator [0, 255]
		 			// rgb[band] = random
		 		// }
		 		// color = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b+ ")"; //assemble the string
		 		// $(this).css('color', color) //set the color attribute in the css
		 	// })
// 		 	
		 	// $("table").click(function(){ //this is fired when you click on the table
		 		// alert("Hey, you clicked me!") //make an alert dialog and show it
		 	// })
// 		 	
		 // }
		 // addEvents()//call the function to add the events
// 
// //   

	//Module #3, Lesson Deliverable   
	var data;
	function loadData(responseData){
		data = responseData
		console.log("Data is now: ")
		console.log(data)
		
	}
	
	$.getJSON("assets/data/megacities.geojson", loadData)
	console.log("Data outside of callback is: " + data)	
	
	
	//Module #3, Problem #1,  ajax_debug.js
	
	
	//This is the original code
	// function debugCallback(response){
// 	
		// $(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
	// };
// 	
	// function debugAjax(){
// 		
		// var mydata;
// 	
		// $.ajax("data/MegaCities.geojson", {
			// dataType: "json",
			// success: function(response){
// 				
				// debugCallback(mydata);
			// }
		// });
// 	
		// $(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
	// };
// 	
	// $(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
	
	//This is my modified version
	function onResponse(response){
		//this is the ajax callback for the megacities.geojson
		$("#ajaxResponse").append(JSON.stringify(response, null, 10)); // this appends to the html
		$("#ajaxDataDelivered").append("OKAY") //this appends to the page a note that we got a successful response
		
	}
	
	//this calls the ajax function, assuming it gets a response
	$.getJSON("assets/data/megacities.geojson", onResponse).fail(function(){
		$("#ajaxDataDelivered").append("Server error.  Check your internet connection and make sure the server is active.") //this handles if the ajax fails.
	});
     
 }) // end document.ready
