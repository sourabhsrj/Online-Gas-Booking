

<?php include("header.php");?>

  <!-- ======== @Region: #content ======== -->
  <div id="content">
    <!-- Mission Statement -->
    <div class="mission text-center block block-pd-sm block-bg-noise">
      <div class="container">
        <h2 class="text-shadow-white">
			Welcome <?php echo $_SESSION['username']; ?> To Online Gas Booking
          </h2>
      </div>
    </div>
   <!----------------------------------->
     <div class="mainCon noPadding">
      <div class="simplePage">
        <div class="con_right_heading">Place Order </div>
              <form method="POST" action="">
                   <fieldset>
     <table class="book_cylinder" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
            <tbody>
              <tr>
                <th><font size="3">Sr No.</font></th>
                <th><font size="3">Product Name</font></th>
                <th><font size="3">Product Description</font></th>

                <th><font size="3">Cost</font></th>
                <th> </th>
              </tr>
              <tr>
                <td style="padding:1px;"><font size="3"><br>1. </font></td>
                <td style="padding:1px;"><font size="3"><br> <input type="hidden" name="prod" placeholder="14.2 Kg Cylinder"><label>14.2 Kg Cylinder</label></font> </td>
                <td style="padding:1px;"><font size="3"> <br>LPG Cylinder for domestic use</font></td>
                <td style="padding:1px;"><font size="3"><br><input type="hidden" placeholder="720RS"><label>720</label></font> </td>
                <td>
                  <input type="submit" id="SubButton" name="bookingg" value="Book">
                </td>
              </tr>
            </tbody>
          </table>
          </fieldset>
        </form>       
<br><br>
        <div style="text-align:center !important;">
          <font color="#FF0000">* Prices will be applicable as on the 
date of delivery, any difference in price between advance payment and 
price applicable on date of delivery will be settled at the time of 
delivery. </font><br>

          You are serviced by <b>Online Gas Booking</b>
        </div><br>
      </div>
    </div>
  </div>
  <div class="clr"></div>
</div>

   <!----------------------------------->
   
   

 
  <!-- ======== @Region: #footer ======== -->
  <?php include("footer.php");?>
