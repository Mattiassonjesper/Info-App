$(document).ready(function(){
      
      let callback = function(){
                
            let city = $("#city").val();
            let key  = '5cecfc36afc5a098f339672791ce3272';
            
            $.ajax({
              url:'http://api.openweathermap.org/data/2.5/weather',
              dataType:'json',
              type:'GET',
              data:{q:city, appid: key, units: 'metric'},

              success: function(data){
                let wf = '';
                $.each(data.weather, function(index, val){
                

                  wf += '<p><b>' + data.name + ' ' +  parseInt(data.main.temp) + '&deg;C ' + 
                  ' | ' + val.main + ", " + val.description 

                  $.getJSON("data.txt", function(data) {
                    console.log(data); 
                  });
                });

                
              
               $(".showForecast").html(wf);
              },
              error: function (error) {
               
               let wf = '';

                 wf += '<p><b>' + error.responseJSON.message + "</b></p>"; 

              $(".showForecast").html(wf);
              }

            })
           
      };
      // Allows the user to call the weather function with the Enter key or the press of the button
      $("#city").keypress(function() {
        if (event.which == 13) callback();
      });

      $("#getForecast").click(callback);

    });