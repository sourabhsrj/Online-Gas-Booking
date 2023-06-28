<?php 
 mysql_connect("localhost", "root", "") or die(mysql_error()); 
 mysql_select_db("booking") or die(mysql_error()); 
 $data = mysql_query("SELECT * FROM  registration") 
 or die(mysql_error()); 
 Print "<table border cellpadding=3>"; 
 while($info = mysql_fetch_array( $data )) 
 { 
 Print "<tr>"; 
 Print "<th>Name:</th> <td>".$info['name'] . "</td> "; 
 Print "<th>Username:</th> <td>".$info['email'] . " </td></tr>"; 
 } 
 Print "</table>"; 
 ?> 