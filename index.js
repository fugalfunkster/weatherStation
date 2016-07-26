$(document).ready(function(){

  // global variables
  var degF = 0, degC = 0; units = "standard";
  
  // request data from wunderground API
  $.get("http://api.wunderground.com/api/5632772d773a2904/geolookup/conditions/forecast/q/autoip.json",
    function(response){   
      //console.log(response);
      //massage data and manipulate DOM
      $(".name").html(response.location.city);
      $(".icon").html("<img src='" + response.current_observation.icon_url + "' />");
      $(".conditions").html(response.current_observation.weather);
      degF = response.current_observation.temp_f;
      $(".temp").html(degF);
      }, 
   "json");
  
  // switch from imperial to metric
  $("#toggleTemp").click(function(e){
    if(units === "standard"){
      units = "metric";
      degC = Math.round(((degF - 32) / 1.8), 2);
      $(".temp").html(degC);
    }
    else{
      units = "standard";
      $(".temp").html(degF);
    }
  });
  
});
