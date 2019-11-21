

$(document).ready(function(){
      
      var callback = function(){
                
            var city = $("#city").val();
            var key  = '5cecfc36afc5a098f339672791ce3272';
            
            $.ajax({
              url:'http://api.openweathermap.org/data/2.5/weather',
              dataType:'json',
              type:'GET',
              data:{q:city, appid: key, units: 'metric'},

              success: function(data){
                var wf = '';
                $.each(data.weather, function(index, val){
                

                  wf += '<p><b>' + data.name + ' ' +  parseInt(data.main.temp) + '&deg;C ' + 
                  ' | ' + val.main + ", " + val.description 

                  $.getJSON("data.txt", function(data) {
                    console.log(data); 
                  });
                });

                
              
               $(".ShowWeatherForcast").html(wf);
              },
              error: function (error) {
               
               var wf = '';

                 wf += '<p><b>' + error.responseJSON.message + "</b></p>"; 

              $(".ShowWeatherForcast").html(wf);
              }

            })
           
      };
      // Allows the user to call the weather function with the Enter key or the press of the button
      $("#city").keypress(function() {
        if (event.which == 13) callback();
      });

      $("#getWeatherForcast").click(callback);

    });