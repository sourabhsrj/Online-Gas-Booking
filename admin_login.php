<?php include("head1.php"); ?>
<!--======== @Region: body ======== -->


<head>
  <title>
   Admin Login
  </title>
</head>
<body class="fullscreen-centered page-login">

   <?php
  require('db.php');
  session_start();
    //if form is submitted, insert values into the database.
    if (isset($_POST['email'])){
    
    $username = stripslashes($_REQUEST['email']); //removes backslashes
    $email = mysqli_real_escape_string($con,$username); //escapes special characters in a string
    $password1 = stripslashes($_REQUEST['password1']);
    $password1 = mysqli_real_escape_string($con,$password1);
    
  //checking is user existing in the database or not

       
        $query="SELECT * FROM admin WHERE email_id='$email' AND password_2='$password1'";
        $result = mysqli_query($con,$query) or die(mysqli_error());
    $rows = mysqli_num_rows($result);
        if($rows==1){
      $_SESSION['email'] = $email;
      header("location: admin_home.php"); //redirect user to billing.php
            } else{
              echo "<script>alert('Invalid Username or Password')</script>";
              header('refresh: 0.1; url=admin_login.php');
        }
    } else{
      ?>
 
  <!--Change the background class to alter background image, options are: benches, boots, buildings, city, metro -->
  <div id="background-wrapper" class="benches" data-stellar-background-ratio="0.8">

    <!-- ======== @Region: #content ======== -->
    
    <div id="content">
      <div class="header">
        <div class="header-inner">
         <h1 align="center">Online Gas Booking</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">
                  Login
                </h3>
            </div>
            <div class="panel-body">
              <form accept-charset="UTF-8" role="form" method="POST" action="server.php">
                <fieldset>

                  <?php include('errors.php');?>

                  <div class="form-group">
                    <div class="input-group input-group-lg">
                      <span class="input-group-addon"><i class="fa fa-fw fa-envelope"></i></span>
                      <input type="text" class="form-control" placeholder="Email" name="email">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group input-group-lg">
                      <span class="input-group-addon"><i class="fa fa-fw fa-lock"></i></span>
                      <input type="password" class="form-control" placeholder="Password" name="pass">
                    </div>
                  </div>
                  <div class="checkbox">
                    <label>
                        <input name="remember" type="checkbox" value="Remember Me">
                        Remember Me
                      </label>
                  </div>
                  <input class="btn btn-lg btn-primary btn-block" type="submit" value="Login" name="login2">
                </fieldset>
              </form>
              <p class="m-b-0 m-t">Not signed up? <a href="admin_reg.php">Sign up here</a>.</p>
              <p class="m-b-0 m-t">Are You User? <a href="index.php">Click Here</a>.</p>

            </div>
          </div>
        </div>
      </div>
      <!-- /row -->
    </div>
  </div>

<?php } ?>
<?php include("foot1.php"); ?>
