var http = require("http");
var fs = require("fs");

var PORT= 8080;

var server = http.createServer(handleRequest);


server.listen(PORT, function() {

    console.log("Server is listening on: http://localhost:" + PORT);  
  
  });

  function handleRequest (req, res){

        
        var path = req.url;
    
    
    
      
     
      
    
      switch (path) {
        case "/Food":
          return displayfood(res);
    
        case "/Framework":
          return displayframeworks(res);

        case "index":
            return displayindex(res);
        
        case "/Movies":
            return displaymovies(res);
    
        default:
          return displayindex(path, res);
        }
      };
    