<?php include("header2.php"); ?>
<head>
  <title>
   Bookings
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

                        <th style="text-align:center; color:black; width: 16%">Booking Reference Number</th>

                        <th style="text-align:center; color:black; width: 16%">Name</th>

                        <th style="text-align:center; color:black; width: 16%">Email ID</th>

                        <th style="text-align:center; color:black; width: 16%">Card Number</th>


                       <th style="text-align:center; color:black; width: 16%">Date</th>

                        <th style="text-align:center; color:black; width: 16%">Product</th>



                        <th style="text-align:center; color:black; width: 16%">Cost</th>


            
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

$sql = "SELECT * FROM book";
$result = $conn->query($sql);


            
if ($result->num_rows > 0) 
{
    // output data of each row
    while($row = $result->fetch_assoc()) {
?>
        <tr>

            <td><?php echo  "<br>".$row["id"] ?></td>

            <td><?php echo  "<br>".$row["name"] ?></td>


            <td><?php echo  "<br>".$row["email"] ?></td>

            <td><?php echo  "<br>".$row["cardn"] ?></td>

            <td><?php echo  "<br>".$row["date"] ?></td>
 
            <td><?php echo  "<br>".$row["product"] ?></td>

            <td><?php echo  "<br>".$row["cost"] ?></td>
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
