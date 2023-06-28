<?php
	session_start();
	$email = "";
 	$errors = array();
 	$password1="";
 	$msg1="";
 	$sub="";
 	$name="";
	$email1="";
	$adn="";
	$DOB="";
	$Address ="";
	$Mono="";
	$CardN="";
	$AddharN="";
	$Account_Number="";
	$IFSC_Code="";


	//connect to database

	$db=mysqli_connect('localhost','root','','booking');
		//log user in from login page=
		if(isset($_POST['login']))
		{	
				session_start();
			//header('Location:home.php');
			$email=mysqli_real_escape_string($db,$_POST['email']);
			$password1=mysqli_real_escape_string($db,$_POST['pass']);
			
			if(empty($email))
 				{
 					array_push($errors, "Email is reqiured");
 				}

 			if(empty($password1))
 				{
 					array_push($errors, "password is reqiured");
 				}

 			if(count($errors) == 0)
 			{
 				$password1=md5($password1);

 				$query="SELECT * FROM registration WHERE email='$email' AND password1='$password1'";
 				$result=mysqli_query($db,$query);
 				//echo $result;

 				if(mysqli_num_rows($result)==1)
 				{

 					
			$_SESSION['username'] = $email;
    	  header("location: home.php"); //redirect user to billing.php
            } 
            else{
              echo "<script>alert('Invalid Username or Password')</script>";
              header('refresh: 0.1; url=index.php');
        }
}
 					


		}
	//if the register button is clicked
	if(isset($_POST['register']))
	{
		
		$name=mysqli_real_escape_string($db,$_POST['name']);
		$DOB=mysqli_real_escape_string($db,$_POST['dob']);
		
		$Address = mysqli_real_escape_string($db,$_POST['add']);
		$Mono=mysqli_real_escape_string($db,$_POST['mono']);
		$CardN=mysqli_real_escape_string($db,$_POST['CardNo']);
		
		$email = mysqli_real_escape_string($db,$_POST['email']);
		
		$AddharN=mysqli_real_escape_string($db,$_POST['AddharNo']);
		
		
		$Account_Number=mysqli_real_escape_string($db,$_POST['AccNo']);
		$IFSC_Code=mysqli_real_escape_string($db,$_POST['IFSC']);
		
		$password1 = mysqli_real_escape_string($db,$_POST['pass']);


		//enusre that form fields are filled properly

		
		if(empty($name))
		{
			array_push($errors,"name is required");
		}

		if(empty($DOB))
		{
			array_push($errors,"Date-Of-Birth is required");
		}
		if(empty($Address))
		{
			array_push($errors,"Address is required");
		}
		if(empty($Mono))
		{
			array_push($errors,"Mobile-Number is required");
		}
		if(empty($CardN))
		{
			array_push($errors,"Card Number is required");
		}
		if(empty($email))
		{
			array_push($errors,"Email is required");
		}
		if(empty($AddharN))
		{
			array_push($errors,"Addhar Number is required");
		}
		if(empty($Account_Number))
		{
			array_push($errors,"Account Number is required");
		}
		if(empty($IFSC_Code))
		{
				array_push($errors,"IFSC Code is required");
		}

		if(empty($password1))
		{
			array_push($errors,"password is required");
		}
		

		


		//if there are no errors,save user to database

		if(count($errors) == 0)
		{	
			$password1=md5($password1);
			
$sql = "SELECT * FROM registration WHERE  email='$email' " ; 
			$email1 = $db->query($sql); 
			
				if ($email1->num_rows > 0)
	  			{
	  			array_push($errors,"The user  already exists.Try different gmail");
				}
				 
				 $sql = "SELECT * FROM registration WHERE  AddharN='$AddharN' " ; 
					$adn = $db->query($sql); 
			
				if ($adn->num_rows > 0)
	  			{
	  			array_push($errors,"The user  already exists.Try different Addhar Number");


	    		 }
				 
				 
			$sql = "INSERT INTO registration (name,DOB,Address,Mono,CardN,email,AddharN,Account_Number,IFSC_Code,password1) VALUES ('$name','$DOB','$Address','$Mono','$CardN','$email','$AddharN','$Account_Number','$IFSC_Code','$password1')";
			mysqli_query($db,$sql);
			header('Location:index.php');

			/*$_SESSION['email']=$email;
			$_SESSION['success']="You are logged in ";
			header('location:home.php');//redirect to home page*/
		}
	}
	if(isset($_POST['register2']))
	{
		
		$name=mysqli_real_escape_string($db,$_POST['name']);
		$email = mysqli_real_escape_string($db,$_POST['email']);
		$password1 = mysqli_real_escape_string($db,$_POST['pass']);


		//enusre that form fields are filled properly

		
		if(empty($name))
		{
			array_push($errors,"name is required");
		}

		if(empty($email))
		{
			array_push($errors,"Email is required");
		}


		if(empty($password1))
		{
			array_push($errors,"password is required");
		}
		

		


		//if there are no errors,save user to database

		if(count($errors) == 0)
		{	
			$password1=md5($password1);
			
$sql = "SELECT * FROM admin WHERE  email_id='$email' " ; 
			$email1 = $db->query($sql); 
			
				if ($email1->num_rows > 0)
	  			{
	  			array_push($errors,"The user  already exists.Try different gmail");


	    		 }
				 
				 
				 
			$sql = "INSERT INTO admin(user_name,email_id,password_2) VALUES ('$name','$email','$password1')";
			mysqli_query($db,$sql);
			header('Location:admin_login.php');

			/*$_SESSION['email']=$email;
			$_SESSION['success']="You are logged in ";
			header('location:home.php');//redirect to home page*/
		}
	}
		if(isset($_POST['login2']))
		{
			//header('Location:home.php');
			$email=mysqli_real_escape_string($db,$_POST['email']);
			$password1=mysqli_real_escape_string($db,$_POST['pass']);
			
			if(empty($email))
 				{
 					array_push($errors, "Email is reqiured");
 				}

 			if(empty($password1))
 				{
 					array_push($errors, "password is reqiured");
 				}

 			if(count($errors) == 0)
 			{
 				$password1=md5($password1);

 				$query="SELECT * FROM admin WHERE email_id='$email' AND password_2='$password1'";
 				$result=mysqli_query($db,$query);
 				//echo $result;

 				if(mysqli_num_rows($result)==1)
 				{
 					//log user in
 					echo $email;
 					$_SESSION['email']=$email_id;

 					$_SESSION['success']="You are now loged in";
 					
 					header('Location:admin_home.php');	
 					//redirect to home page

 				}
 				else
 				{
 					array_push($errors,"wrong email/password combination");
 				}
 			}
 		}


		//logout
		if(isset($_GET['logout']))
		{
			session_destroy();
			unset($_SESSION['email']);
			header('location:index.php');

		}



	
  if(isset($_POST['submit1']))
  {
  	

	$db=mysqli_connect('localhost','root','','booking');

    $name = mysqli_real_escape_string($db,$_POST['name']);
    
    $sub = mysqli_real_escape_string($db,$_POST['subject']);
    $msg1 = mysqli_real_escape_string($db,$_POST['message']);



		if(empty($name))
		{
			array_push($errors,"name is required");
		}

		if(empty( $sub))
		{
			array_push($errors," is required");
		}


		if(empty($msg1))
		{
			array_push($errors,"password is required");
		}
		

		


		//if there are no errors,save user to database

		if(count($errors) == 0)
		{	
 
   $sql = "INSERT INTO complaints (name1,subject,msg) VALUES ('$name',$sub','$msg1')";
      mysqli_query($db,$sql);
      header('Location:home.php');

    }
      /*$_SESSION['email']=$email;
      $_SESSION['success']="You are logged in ";
      header('location:home.php');//redirect to home page*/
    }

?>