$.ajax({
            url: "https://restcountries.eu/rest/v2/all",
            type: "get",
            success: function(data){
                var rs = "";
                for (i in data){
                    rs += "<tr>";
                    rs += "<td>" +data[i].name+ "</td>";
                    rs += "<tr>";
                      }
                      document.getElementById('result').innerHTML = rs ;
                }                 
        })