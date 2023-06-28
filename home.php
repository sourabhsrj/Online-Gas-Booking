
<?php include("header.php"); ?>


<head>
<title>Home</title>
</head>
   

  <!-- ======== @Region: #content ======== -->
  <div id="content">
    <!-- Mission Statement -->
    <div class="mission text-center block block-pd-sm block-bg-noise">
      <div class="container">
        <h2 class="text-shadow-white">
			Welcome <b><?php echo $a; ?></b> To Online Gas Booking 
          </h2>
      </div>
    </div>
   
   
  <!--Services-->
   <div class="showcase block block-border-bottom-grey">
      <div class="container">
        <h2 class="block-title">
            Our Services
          </h2>

        <div class="item-carousel" data-toggle="owlcarousel" data-owlcarousel-settings='{"items":4, "pagination":false, "navigation":true, "itemsScaleUp":true}'>
          <div class="item">
            <a href="Book Cylinder.php" class="overlay-wrapper">
                <img src="img/Services/Book Gas.jpg" alt="Project 1 image" class="img-responsive underlay">
                <span class="overlay">
                  <span class="overlay-content"> <span class="h4">Book Gas</span> </span>
                </span>
              </a>
            <div class="item-details bg-noise">
              <h4 class="item-title">
                  <a href="Book Cylinder.php">Book Gas</a>
                </h4>
              <a href="Book Cylinder.php" class="btn btn-more"><i class="fa fa-plus"></i>Read more</a>
            </div>
          </div>
          <div class="item">
            <a href="Nearest Service Center.php" class="overlay-wrapper">
                <img src="img/Services/ns.png" alt="Project 2 image" class="img-responsive underlay">
                <span class="overlay">
                  <span class="overlay-content"> <span class="h4">Nearest Service Center</span> </span>
                </span>
              </a>
            <div class="item-details bg-noise">
              <h4 class="item-title">
                  <a href="Nearest Service Center.php">Nearest Service Center</a>
                </h4>
              <a href="Nearest Service Center.php" class="btn btn-more"><i class="fa fa-plus"></i>Read more</a>
            </div>
          </div>
          <div class="item">
            <a href="about.php" class="overlay-wrapper">
                <img src="img/Services/about.png" alt="Project 6 image" class="img-responsive underlay">
                <span class="overlay">
                  <span class="overlay-content"> <span class="h4">About US</span> </span>
                </span>
              </a>
            <div class="item-details bg-noise">
              <h4 class="item-title">
                  <a href="about.php">About US</a>
                </h4>
              <a href="about.php" class="btn btn-more"><i class="fa fa-plus"></i>Read more</a>
            </div>
          </div>
          <div class="item">
            <a href="FAQ.php" class="overlay-wrapper">
                <img src="img/Services/faq.jpg" alt="Project 7 image" class="img-responsive underlay">
                <span class="overlay">
                  <span class="overlay-content"> <span class="h4">Freaquently Asked Questions</span> </span>
                </span>
              </a>
            <div class="item-details bg-noise">
              <h4 class="item-title">
                  <a href="FAQ.php">FAQ</a>
                </h4>
              <a href="FAQ.php" class="btn btn-more"><i class="fa fa-plus"></i>Read more</a>
            </div>
          </div>
          <div class="item">
            <a href="sefty tips.html" class="overlay-wrapper">
                <img src="img/Services/sefty.jpg"alt="Project 8 image" class="img-responsive underlay">
                <span class="overlay">
                  <span class="overlay-content"> <span class="h4">Sefty Tips</span> </span>
                </span>
              </a>
            <div class="item-details bg-noise">
              <h4 class="item-title">
                  <a href="sefty tips.html">Sefty Tips</a>
                </h4>
              <a href="sefty tips.html" class="btn btn-more"><i class="fa fa-plus"></i>Read more</a>
            </div>
          </div>
          </div>
      </div>
    </div>
    <!--/Services -->
     
   
   
    <!--Customer testimonial-->
    <div class="testimonials block-contained">
      <div class="row">
        <!--Customer testimonial-->
        <div class="col-md-6 m-b-lg">
          <h3 class="block-title">
              Testimonials
            </h3>
          <blockquote>
            <p>Our productivity &amp; sales are up! Customers are happy &amp; we couldn't be happier with this product!</p>
            <img src="img/misc/charles-quote.png" alt="Charles Spencer Chaplin">
            <small>
                <strong>Charles Chaplin</strong>
                <br>
                British comic actor
              </small>
          </blockquote>
        </div>
       </div>
	   </div>
<!--Customer testimonial-->

  
<?php include ("footer.php"); ?>
