<?php get_header(); ?>


  <header>
    <nav class="main-nav stickable">
      <a href="/" id="logo">
        <img src="<?php echo get_template_directory_uri(); ?>/img/logo-white.png" alt="ShipCar24 Auto Transport" width="200" height="37">
      </a>
      <div class="hidden-lg hidden-md">
        <button type="button" class="btn nav-btn"><i class="icon icon-bars"></i></button>
        <a href="tel:8889998877" class="btn call-btn"><i class="fa fa-phone"></i> Call</a>
      </div>
      <div class="call-links visible-lg visible-md">
        <a href="tel:9163005174" class="tel">(916) 300-5174</a>
        <a href="#" class="request-call" data-placement="bottom"><i class="icon icon-phone-call-solid"></i> Request a call</a>
      </div>
      <?php wpeHeadNav(); ?>
    </nav>

    <div class="container">
      <div class="text-center animated fadeInUp">
        <h1><?php _e( 'Page not found', 'wpeasy' ); ?></h1>
      </div>
    </div>
    <!-- .container -->
  </header>
  <section class="page-block">
    <div class="container">
      <h2><a href="<?php echo home_url(); ?>"><?php _e( 'Return home?', 'wpeasy' ); ?></a></h2>
    </div>
  </section>



<?php get_footer(); ?>
