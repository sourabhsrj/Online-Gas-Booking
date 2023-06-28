<?php include("header2.php"); ?>
<head>
  <title>
   Complaints
  </title>
</head>

<div class="mission text-center block block-pd-sm block-bg-noise">
      <div class="container">
        <h2 class="text-shadow-white">
            Welcome </b> To Online Gas Booking
          </h2>
      </div>
    </div> <div class="container" >
<center><strong style="font-size: 30px;">All Bookings</strong></center>
</div>
 <div class="table-responsive">

    <div style="overflow: auto; height: 530px;">
                  <table class="table table-hover table-bordered" border="3px"cellspacing="0" cellpadding="5">
                    <tr>


                        <th style="text-align:center; color:black; width: 16%">Name</th>

                        <th style="text-align:center; color:black; width: 16%">Subject</th>

                        <th style="text-align:center; color:black; width: 16%">Message</th>


                       <th style="text-align:center; color:black; width: 16%">id</th>

                        <th style="text-align:center; color:black; width: 16%">Email Id</th>





            
            </tr>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "record";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM querys";
$result = $conn->query($sql);


            
if ($result->num_rows > 0) 
{
    // output data of each row
    while($row = $result->fetch_assoc()) {
?>
        <tr>

            

            <td><?php echo  "<br>".$row["name"] ?></td>


            <td><?php echo  "<br>".$row["subject"] ?></td>

            <td><?php echo  "<br>".$row["message"] ?></td>
            <td><?php echo  "<br>".$row["id"] ?></td>
            <td><?php echo  "<br>".$row["email"] ?></td>
</tr>
<?php

    } 
}

 else 
 {
    echo "0 results";
}

$conn->close();
?> 



        </table>
    </div>
  </div>

<?php include ("footer2.php"); ?>
