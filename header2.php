

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="" name="keywords">
  <meta content="" name="description">



  <!-- Fav and touch icons -->
  <link rel="shortcut icon" href="img/icons/favicon.png">
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/icons/114x114.png">
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/icons/72x72.png">
  <link rel="apple-touch-icon-precomposed" href="img/icons/default.png">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900" rel="stylesheet">

  <!-- Bootstrap CSS File -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Libraries CSS Files -->
  <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="lib/owlcarousel/owl.carousel.min.css" rel="stylesheet">
  <link href="lib/owlcarousel/owl.theme.min.css" rel="stylesheet">
  <link href="lib/owlcarousel/owl.transitions.min.css" rel="stylesheet">

  <!-- Main Stylesheet File -->
  <link href="css/style.css" rel="stylesheet">


  <!--Your custom colour override - predefined colours are: colour-blue.css, colour-green.css, colour-lavander.css, orange is default-->
  <link href="#" id="colour-scheme" rel="stylesheet">

</head>

<body class="page-index has-hero">
  <!--Change the background class to alter background image, options are: benches, boots, buildings, city, metro -->
  <div id="background-wrapper" class="buildings" data-stellar-background-ratio="0.1">

    <!-- ======== @Region: #navigation ======== -->
    <div id="navigation" class="wrapper">
      <!--Hidden Header Region-->
      
      <!--Header & navbar-branding region-->
      <div class="header">
        <div class="header-inner container">
          <div class="row">
            <div class="col-md-8">
              <!--navbar-branding/logo - hidden image tag & site name so things like Facebook to pick up, actual logo set via CSS for flexibility -->
              <a class="navbar-brandd" href="home.php" title="Home">
                <h1 class="hidden">
                    <img src="/img/Logo/logo4.png" alt="Logo">
                    
                  </h1>
              </a>
              <div class="navbar-slogan">
               Online Gas
                <br>Booking System
              </div>
            </div>
            <!--header rightside-->
            <div class="col-md-4">
              <!--user menu-->
            
              <ul class="list-inline user-menu pull-right">

                <li class="user-login"><form action="/online gas booking/server2.php">
                  <input type="submit" value="Logout" name="logout"></form>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="navbar navbar-default">
          <!--mobile collapse menu button-->
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
          
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav" id="main-menu">
              <li class="icon-link">
                <a href="admin_home.php"><i class="fa fa-home"></i></a>
              </li>
			   <li class="dropdown dropdown-mm">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Services<b class="caret"></b></a>
                <!-- Dropdown Menu -->
                <ul class="dropdown-menu dropdown-menu-mm dropdown-menu-persist">
                  <li class="row">
                    <ul class="col-md-6">
                      <li class="dropdown-header">Services</li>
                      <li><a href="all_users.php">All Users</a></li>

                      <li><a href="all_bookings.php">check Bookings</a></li>

                      <li><a href="complaints.php">complaints</a></li>
                      <li><a href="Nearest Service Center.php">Nearest Service Center</a></li>
                    </ul>
               </li>
                 
                </ul>
              <li class="dropdown">
               

                  
         <li><a href="admin_about.php">About US</a></li>
          <li><a href="admin Sefty Tips.php" tabindex="-1" class="menu-item">Sefty Tips</a></li>
          <li><a href="admin_FAQ .php" tabindex="-1" class="menu-item">FAQ</a></li>
				
        
              
             
              </li>
            </ul>
          </div>
          <!--/.navbar-collapse -->
        </div>
      </div>
    </div>
    <div class="hero" id="highlighted">
      <div class="inner">
        <!--Slideshow-->
        <div id="highlighted-slider" class="container">
          <div class="item-slider" data-toggle="owlcarousel" data-owlcarousel-settings='{"singleItem":true, "navigation":true, "transitionStyle":"fadeUp"}'>
            <!--Slideshow content-->
            <!--Slide 1-->
            <div class="item">
              <div class="row">
                <div class="col-md-6 col-md-push-6 item-caption">
                  <h2 class="h1 text-weight-light">
                      Welcome to <span class="text-primary">Online Gas Booking</span>
                    </h2>
                  
                  <p><h3>We at 'Online Gas Booking' <br>
                    are an ethical, innovative <br>
                    and successful business,<br>
                    serving Indian families with<br>
                    clean, convenient and safe <br>
                    cooking gas as a reliable,<br>
                    caring and most loved brand.</h3></p>
                  
                </div>
                <div class="col-md-6 col-md-pull-6 hidden-xs">
                  <img src="img/slides/sl1.png" alt="Slide 1" class="center-block img-responsive">
                </div>
              </div>
            </div>
            <!--Slide 2-->
            <div class="item">
              <div class="row">
                <div class="col-md-6 text-right-md item-caption">
                  <h2 class="h1 text-weight-light">
                      <span class="text-primary">Welcome To</span>Online Gas Booking
                    </h2>
                    <p><h3>We at 'Online Gas Booking' <br>
                    are an ethical, innovative <br>
                    and successful business,<br>
                    serving Indian families with<br>
                    clean, convenient and safe <br>
                    cooking gas as a reliable,<br>
                    caring and most loved brand.</h3></p>
                </div>
                <div class="col-md-6 hidden-xs">
                  <img src="img/slides/sl2.png" alt="Slide 2" class="center-block img-responsive">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
