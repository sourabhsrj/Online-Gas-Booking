<?php include("header2.php"); ?>

 <div id="content">
    <!-- Mission Statement -->
    <div class="mission text-center block block-pd-sm block-bg-noise">
      <div class="container">
        <h2 class="text-shadow-white">
            Welcome To Online Gas Booking 
          </h2>
      </div>


    </div>

</div>

      <div class="container" >
<center><strong style="font-size: 30px;">All Users</strong></center>
</div>
 

<div>
    <div style="overflow: auto; height: 530px;">
 <div class="table-responsive">

                  <table class="table table-hover table-bordered" border="3px"cellspacing="0" cellpadding="5">
                    <tr>

                        <th style="text-align:center; color:black; width: 16%">Name</th>

                       <th style="text-align:center; color:black; width: 16%">Date</th>

                        <th style="text-align:center; color:black; width: 16%">Address</th>

                        <th style="text-align:center; color:black; width: 16%">Mobile Number</th>

                        <th style="text-align:center; color:black; width: 16%">Card Number</th>

                        <th style="text-align:center; color:black; width: 16%">Email_ID</th>

                        <th style="text-align:center; color:black; width: 16%">Addhar Number</th>

                        <th style="text-align:center; color:black; width: 16%">Account Number</th>

                        <th style="text-align:center; color:black; width: 16%">IFSC Code</th>
            
            </tr>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "booking";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT name,DOB,Address,Mono,CardN,email,AddharN,Account_Number,IFSC_Code FROM registration";
$result = $conn->query($sql);


            
if ($result->num_rows > 0) 
{
    // output data of each row
    while($row = $result->fetch_assoc()) {
?>
        <tr>
            <td><?php echo  "<br>".$row["name"] ?></td>

            <td><?php echo  "<br>".$row["DOB"] ?></td>
 
            <td><?php echo  "<br>".$row["Address"] ?></td>

            <td><?php echo  "<br>".$row["Mono"] ?></td>
            <td><?php echo  "<br>".$row["CardN"] ?></td>

            <td><?php echo  "<br>".$row["email"] ?></td>
            <td><?php echo  "<br>".$row["AddharN"] ?></td>

            <td><?php echo  "<br>".$row["Account_Number"] ?></td>

            <td><?php echo  "<br>".$row["IFSC_Code"] ?></td>
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
</div>
<?php include ("footer.php"); ?>
