<?php get_header(); ?>
  <?php if (have_posts()): while (have_posts()) : the_post(); ?>

    <div class="container">
      <div class="text-center animated fadeInUp">
        <h1><?php the_title(); ?></h1>
      </div>
    </div>
    <!-- .container -->
  </header>
  <section class="page-block">
    <div class="container">
      <?php the_content(); ?>
    </div>
  </section>


  <?php?>
  <section class="call-to-action primary hidden-md hidden-sm hidden-xs">
    <div class="container">
      <h3>Ready to get the best in auto transport?</h3>
      <a href="http://shipcar24.com/get-a-quote" class="btn btn-lg btn-outline quote-link">Get An Instant Quote<i class="fa fa-chevron-right fa-fw"></i></a>
      <p class="lead text-muted">Or call <a href="tel:9163005174">(916) 300-5174</a> to speak directly to our Car Shipping Advisors now!</p>
    </div>
  </section>
  <?php?>

  <?php endwhile; endif; ?>
  
  <!-- .call-to-action -->

  <nav class="bottom-nav">

    <div class="container">

      <div class="row">

        <div class="col-md-15 col-sm-6">

          <h4>Why ShipCar24</h4>

          <ul>

            <li><a href="auto-transport-reviews.php">Reviews</a></li>

            <li><a href="who-uses-ShipCar24">Who uses ShipCar24</a></li>

            <li><a href="enterprise">Enterprise Solutions</a></li>

            <li><a href="how-it-works">How it works</a></li>

          </ul>

        </div>

        <div class="col-md-15 col-sm-6">

          <h4>Transport Services</h4>

          <ul>

            <li><a href="auto-transport-quote.php" class="quote-link">Quote Calculator</a></li>

            <li><a href="enclosed">Enclosed</a></li>

            <li><a href="expedited">Expedited</a></li>

            <li><a href="door-to-door">Door-to-Door</a></li>

          </ul>

        </div>

        <div class="clear visible-sm"></div>

        <div class="col-md-15 col-sm-6">

          <h4>About</h4>

          <ul>

            <li><a href="history">History</a></li>

            <li><a href="https://careers.ShipCar24.com/">Careers</a></li>

            <li><a href="auto-transport-terms.php">Terms &amp; Conditions</a></li>

            <li><a href="privacy-policy">Privacy Policy</a></li>

            <li><a href="copyright">Copyright &amp; Trademark</a></li>

          </ul>

        </div>

        <div class="col-md-15 col-sm-6">

          <h4>Support</h4>

          <ul>

            <li><a href="contact-us">Contact Us</a></li>

            <li><a href="auto-transport-tips">Auto Transport Tips</a></li>

            <li><a href="help-center">Help Center</a></li>

            <li><a href="blog">Blog</a></li>

          </ul>

        </div>

        <div class="ShipCar24-address col-md-15 col-sm-6 col-md-offset-0 col-sm-offset-3">

          <div itemscope itemtype="http://schema.org/LocalBusiness">

            <h4 itemprop="name">ShipCar24 Auto Transport</h4>

            <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">

              <div><span itemprop="streetAddress">4366 Auburn, Blvd, Suite 102</span></div>

              <div>

                <span itemprop="addressLocality">Sacramento</span>,

                <span itemprop="addressRegion">CA</span>

                <span itemprop="postalCode">95841</span>

              </div>

            </div>

            <div class="map"><a href="https://www.google.com/maps/place/shipcar24+Auto+Transport/" target="_blank" rel="nofollow" itemprop="maps">MAP </a></div>

            <div class="phone"><i class="fa fa-phone">&nbsp;</i><a href="tel: 9163005174"><span itemprop="telephone">(916) 300-5174</span></a></div>

          </div>

        </div>

      </div>

    </div>

  </nav>

  <footer class="main-footer">

    <div class="container">

      <div class="row">

        <div class="col-lg-4 col-md-5">

          <ul class="social-links">

            <li class="facebook"><a href="https://www.facebook.com/shipcar24" target="_blank" data-link="outbound"><i class="fa fa-facebook fa-fw"></i></a></li>

            <li class="twitter"><a href="https://www.twitter.com/shipcar24" target="_blank" data-link="outbound"><i class="fa fa-twitter fa-fw"></i></a></li>

            <li class="google"><a href="https://plus.google.com/#/posts" target="_blank" data-link="outbound"><i class="fa fa-google-plus fa-fw"></i></a></li>

            <li class="linkedin"><a href="https://www.linkedin.com/company/shipcar24-auto-transport" target="_blank" data-link="outbound"><i class="fa fa-linkedin fa-fw"></i></a></li>

            <li class="vimeo"><a href="https://vimeo.com/shipcar24auto" target="_blank" data-link="outbound"><i class="fa fa-vimeo fa-fw"></i></a></li>

            <li class="youtube"><a href="https://www.youtube.com/user/shipcar24autotransport" target="_blank" data-link="outbound"><i class="fa fa-youtube fa-fw"></i></a></li>

            <li class="instagram"><a href="https://www.instagram.com/shipcar24autotransport/" target="_blank" data-link="outbound"><i class="fa fa-instagram fa-fw"></i></a></li>

          </ul>

        </div>

        <div class="col-lg-8 col-md-7">

          <p class="copy">Copyright &copy; 2017 by ShipCar24 Auto Transport</p>

        </div>

      </div>

    </div>

  </footer>

  <script type="text/template" id="template-call-me-now">

        <div class="request-call-popup">

    <form>

        <h5 class="text-center"><strong>Let us call you and answer any questions you may have!</strong></h5>

        <p class="text-danger text-center error-msg hide"></p>

        <p>

            <input type="tel" class="form-control input-lg tel-mask" id="call-number" placeholder="Enter your phone number">

        </p>

        <p>

            <button type="submit" class="btn btn-success btn-lg btn-block" data-loading-text="Submitting...">Call me now <i class="fa fa-chevron-right"></i></button>

        </p>

    </form>

    <div class="message success text-center">

        <h4>Thank you!</h4>

        <p>One of our agents will be calling you shortly!</p>

    </div>


    <div class="message error text-center">

        <h4>Error!</h4>

        <p>Something went wrong, please <a href="#" class="retry">try again</a>!</p>

    </div>

    <div class="text-center">

        <a href="#" class="dismiss">Close</a>

    </div>

</div>    

</script>


    <script type="text/template" id="form-error-message">

        <p><i class="fa fa-exclamation-triangle fa-fw"></i> {{{ message }}}</p>

    </script>

    <script type="text/template" id="cookies-message">

        <div class="top-message warning">

            <i class="fa fa-exclamation-triangle fa-fw"></i> ShipCar24 requires enabled cookies in your browser. Learn more about <a href="http://www.whatarecookies.com/enable.asp" target="_blank" data-link="outbound" rel="nofollow">cookies and how to enable them &raquo;</a>

        </div>      

		<!-- .top-message -->

    </script>

    <script>var phone = {standard:{number:"(916) 300-5174",link:"9163005174"},mobile:{number:"(916) 300-5174",link:"9163005174"}};</script>

    <script src="<?php echo get_template_directory_uri(); ?>/js/custom.js"></script>

</body>
  
<?php get_footer(); ?>
