<?php
	session_start();
	$email = "";
 	$errors = array();
 	$password1="";
 	$msg1="";
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
			header('location:admin_login.php');

		}

		if(isset($_POST['submit1']))
	{
		$name = mysqli_real_escape_string($db,$_POST['name']);
		$email = mysqli_real_escape_string($db,$_POST['email']);
		$msg1 = mysqli_real_escape_string($db,$_POST['msg']);
		
		if(empty($name))
		{
			array_push($errors,"email is required");
		}

		if(empty($email))
		{
			array_push($errors,"E-mail is required");
		}

		if(empty($msg1))
		{
			array_push($errors,"Message is required");
		}


		if(count($errors) == 0)
		{
			

			
			
			$sql = "INSERT INTO querydb (name,email,msg) VALUES ('$name','$email','$msg1')";
			mysqli_query($db,$sql);
			header('Location:');

		
			/*$_SESSION['email']=$email;
			$_SESSION['success']="You are logged in ";
			header('location:home.php');//redirect to home page*/
		}


	}
	


?>