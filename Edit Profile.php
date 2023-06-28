<?php include("header.php"); ?>

<head>
<title>Edit Profile</title>
</head>

  <!-- ======== @Region: #content ======== -->
  <div id="content">
    <!-- Mission Statement -->
    <div class="mission text-center block block-pd-sm block-bg-noise">
      <div class="container">
        <h2 class="text-shadow-white">
			Welcome To Online Gas Booking
          </h2>
      </div>
    </div>
   
   


  <!--Services-->
    <div class="showcase block block-border-bottom-grey">
      <div class="container">
        
            <div align="right">
              <form accept-charset="UTF-8" role="form">
                <fieldset>
                  <table align="left">

                    <tr>
                        <td> <label>Name:</label>  </td>

            <td>
              <input type="text" name="name" placeholder="Enter Your Full name" id="ip">
            </td>
            </tr>
        <tr>
           <td>
             <label>Date Of Birth:</label>
             </td>

            <td>
              <input type="date" name="dob" id="ip">

            </td>
           </tr>
               <tr>
               <td> <label>Address:</label>
               </td>
               <td>
                  <textarea rows="5" name="add" id="ip"></textarea>
                </td>
                </tr>
                    <tr>
               <td>
                  <label>Mobile Number:</label>
                </td>
               <td>
                  <input type="number" name="mono" placeholder="Enter your 10 digit mobile number" id="ip">
                </td>
                <tr>

                <tr>
               <td>
                 <label>Card Number:</label>
               </td>

               <td>
                  <input type="text" name="CardNo" placeholder="Enter Your Card Number" id="ip">
                </td>
            </tr>
                <tr>
                <td>
                  <label>Email Id:</label>
                </td>

                <td>
                  <input type="email" name="email" placeholder="Enter Your EmailId" id="ip">
                </td>
                </tr>
                    <tr>
                        <td> <label>Addhar Card Number:</label></td>

               <td>
                  <input type="number" name="AddharNo" placeholder="Enter Your Addhar Card No" id="ip">
                </td>
                </tr>
                <tr>
                <td>
                  <label>Gender:</label>
                </td>
                <td>
                  <input type="radio" name="radio">Male <input type="radio" name="radio">Female
                </td>
                </tr>
                <tr>
                <td>
                  <label>Bank Info:</label>
                </td>

                </tr>
                <tr>
                <td>
                  <label>Account Number:</label>
                </td>

                <td>
                  <input type="number" name="AccNo" placeholder="Enter Your Account Number" id="ip">
                </td>
                <td>
                  <label> IFSC Code:</label>
                </td>
                <td>
                  <input type="text" name="IFSC" placeholder="Enter Your Bank Ifsc Code" id="ip">
                </td>
                </tr>

                <tr>
                    <td>
                      <label>Password</label></td>
                    <td>
                      <input type="password" name="pass" placeholder="Enter Password">
                    </td>
                </tr>
                
             </table>
                  <input class="btn btn-lg btn-primary btn-block" type="submit" value="Sign Me Up">
                </fieldset>
              </form>
              <p class="m-b-0 m-t">Already signed up? <a href="login.html">Login here</a>.</p>
              
            </div>
      </div>
    </div>
    
<?php include("footer.php"); ?>