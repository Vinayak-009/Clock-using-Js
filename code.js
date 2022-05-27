<!doctype html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>Project1</title>
    <script>
        let a;
        let date;
        let time;
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setInterval(() => {
            a = new Date(); 
            date = a.toLocaleDateString(undefined, options);
            time = a.getHours() + ':' + a.getMinutes() + ":" + a.getSeconds();
            document.getElementById('time').innerHTML = time + "<br><br>" + date;
        }, 1000);
    </script>
</head>

<body>
  

  <ul class="nav nav-tabs my-4">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Menu</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Help</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled">More</a>
    </li>
  </ul>

 


  



    <div class="container my-4">
        <div class="jumbotron">
            <h1 class="display-4">Current Time : <span id="time"></span></h1>
           
            <hr class="my-4">
            

            <a class="btn btn-primary btn-lg" href="https://www.timeanddate.com/time/map/" target="_blank" role="button">Browse Time Zones</a>

            
              
                
        </div>
    </div>

    <div class="card text-center">
      <div class="card-header">
        Quote of the day
      </div>
      <div class="card-body">
        <h5 class="card-title">Who controls the past, controls the future: who controls the present controls the past.</h5>
        <p class="card-text">By George Orwell</p>
        <a href="#"class="btn btn-primary">Read more</a>
      </div>
      <div class="card-footer text-muted">
        
      </div>
    </div>

    
</body>

</html>
