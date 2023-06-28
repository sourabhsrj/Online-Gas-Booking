
<?php session_start();

if(!isset($_SESSION['username']))
{
  echo '<script>windows: location="index.php"</script>';
  }

?>

<?php



$session=$_SESSION['username'];
include 'db.php';

$result = mysqli_query($con, "SELECT * FROM registration WHERE email= '$session'");



while($row = mysqli_fetch_assoc($result))
  {
    $a=$row['name'];
  $c=$row['CardN'];
  $b=$row['email'];
  }
$_SESSION['username'] = $b;
?>

<?php 


if(!isset($_SESSION['username']))
{
  echo '<script>windows: location="index.php"</script>';
  }

  $msg1="";
  $sub="";
  $name="";
 
  if(isset($_POST['submit1']))
  {
    $db=mysqli_connect('localhost','root','','record');
    $name=mysqli_real_escape_string($db,$_POST['name']);
    $sub = mysqli_real_escape_string($db,$_POST['subject']);
    $msg1 = mysqli_real_escape_string($db,$_POST['message']);

$sql = "INSERT INTO querys(name,subject,message,email) VALUES ('$name','$sub','$msg1','$b')";
      mysqli_query($db,$sql);
      header('Location:home.php');

      /*$_SESSION['email']=$email;
      $_SESSION['success']="You are logged in ";
      header('location:home.php');//redirect to home page*/
    }


    ?>
    <?php 
    if(!isset($_SESSION['username']))
{
  echo '<script>windows: location="index.php"</script>';
  }
  if(isset($_POST['bookingg']))
  {




$db=mysqli_connect('localhost','root','','record');
    
$sql = "INSERT INTO book(name,email,cardn) VALUES ('$a','$b','$c')";

      mysqli_query($db,$sql);

      header('Location:home.php');

      /*$_SESSION['email']=$email;
      $_SESSION['success']="You are logged in ";
      header('location:home.php');//redirect to home page*/
    }
    ?>
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
 <!--Change the background class to alter background image, options are: benches, boots, buildings, city, metro -->
  <div id="background-wrapper" class="buildings" data-stellar-background-ratio="0.1">

    <!-- ======== @Region: #navigation ======== -->
    <div id="navigation" class="wrapper">
      <!--Hidden Header Region-->
      <div class="header-hidden collapse">
        <div class="header-hidden-inner container">
          <div class="row">
            <div class="col-md-3">
             
            
            </div>
           
            <div class="col-md-6">
              <!--Colour & Background Switch for demo - @todo: remove in production-->
              <h3>
                  Theme Variations
                </h3>
              <div class="switcher">
                
                <div class="cols">
                  Colours:
                  <br>
                  <a href="#orange" class="colour orange active" title="Orange">Orange</a> 
          <a href="#green" class="colour green " title="Green">Green</a>
          <a href="#blue" class="colour blue " title="Blue">Blue</a>
          <a href="#lavender" class="colour lavender "title="Lavender">Lavender</a>
                </div>
              </div>
              <p>
                <small>Selection is not persistent.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
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
              <form action="server.php">
              <!--user menu-->
              
              <ul class="list-inline user-menu pull-right">

                
                <li class="user-login"><i class="fa fa-sign-in text-primary">
                  <input type="submit" value="Logout" name="logout"></i>
                </li>
              </form>
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
                <a href="home.php"><i class="fa fa-home"></i></a>
              </li>
			  
              <li class="dropdown">

                  <li><a href="about.php" tabindex="-1" class="menu-item">About</a></li>
          <li><a href="Sefty Tips.php" tabindex="-1" class="menu-item">Sefty Tips</a></li>
          <li><a href="FAQ.php" tabindex="-1" class="menu-item">FAQ</a></li>

          
                <!-- Dropdown Menu -->
                <ul class="dropdown-menu">
                  <li class="dropdown-header">Pages</li>
                </ul>
              </li>
              
              <li class="dropdown dropdown-mm">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Services<b class="caret"></b></a>
                <!-- Dropdown Menu -->
                <ul class="dropdown-menu dropdown-menu-mm dropdown-menu-persist">
                  <li class="row">
                    <ul class="col-md-6">
                      <li class="dropdown-header">Services</li>
                      <li><a href="Book cylinder.php">Book Gas</a></li>
                      <li><a href="Nearest Service Center.php">Nearest Service Center</a></li>
                    </ul>
               </li>
                 
                </ul>
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
