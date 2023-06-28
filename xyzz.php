<?php


mysqli_connect('localhost','root','','booking');
$query= mysql_query (" select * from registration");
$rowcount = mysql_num_rows($query);

?>

<div class="table-responsive">
                  <table>
                    <tr>

                        <td> <label>Name</label> </td>

                        <td> <label>Date</label> </td>

                        <td> <label>Address</label> </td>

                        <td> <label>Mobile Number</label> </td>

                        <td> <label>Card Number</label> </td>

                        <td> <label>Email_ID</label> </td>

                        <td> <label>Addhar Number</label> </td>

                        <td> <label>Account Number</label> </td>

                        <td> <label>IFSC Code</label> </td>
            
            </tr>

<?php

for($i=1;$i<=$rowcount;$i++)
{
	$row=mysql_fetch_array($query);
?>
   <tr>

                        <td> <?php echo $row["name"]   ?> </td>

                        <td> <?php echo $row["DOB"]   ?>  </td>

                        <td> <?php echo $row["Address"]   ?> </td>

                        <td>  <?php echo $row["Mono"]   ?> </td>

                        <td> <?php echo $row["CardN"]   ?> </td>

                        <td>  <?php echo $row["email"]   ?> </td>

                        <td>  <?php echo $row["AddharN"]   ?> </td>

                        <td> <?php echo $row["Account_Number"]   ?>  </td>

                        <td><?php echo $row["IFSC_Code"]   ?>  </td>
            
            </tr>
        </table>
    </div>
            <?php
        }
            ?>











        </table>


