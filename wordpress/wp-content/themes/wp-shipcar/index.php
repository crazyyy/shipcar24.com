<?php get_header(); ?>

<header class="parallax blog-header">
  <div class="container">
    <nav class="main-nav stickable request-call-enabled">
      <a href="/" id="logo">
        <img src="<?php echo get_template_directory_uri(); ?>/img/logo-white.png" alt="ShipCar24 Auto Transport" width="200" height="37">
      </a>
      <div class="hidden-lg hidden-md">
        <button type="button" class="btn nav-btn"><i class="icon icon-bars"></i></button>
        <a href="tel:9163005174" class="btn call-btn"><i class="fa fa-phone"></i> Call</a>
      </div>
      <div class="call-links visible-lg visible-md show-tel">
        <a href="tel:9163005174" class="tel">(916) 300-5174</a>
        <a href="#" class="request-call" data-placement="bottom" data-original-title="" title=""><i class="icon icon-phone-call-solid"></i> Request a call</a>
      </div>
      <?php wpeHeadNav(); ?>
    </nav>
    <div class="text-center fadeInUp">
      <h1 class="entry-title"><?php _e( 'Latest Posts', 'wpeasy' ); ?></h1>
    </div>
    <!-- .container end -->
  </div>
</header>


<div id="page" class="">
  <div id="content" class="site-content container blog">
    <br>
    <br>
    <div class="row">
      <div id="primary" class="content-area col-lg-8 col-md-8">
        <main id="main" class="site-main" role="main" itemprop="mainContentOfPage">
          <div class="row content-grid">

            <?php get_template_part('loop'); ?>

            <div class="clearfix"></div>
          </div><!-- .content-grid -->
          <nav class="navigation paging-navigation numeric-style" role="navigation">
           <?php get_template_part('pagination'); ?>
          </nav><!-- .navigation -->
        </main><!-- #main -->
      </div><!-- #primary -->

      <?php get_sidebar(); ?>

    </div><!-- .row -->
  </div>
</div>

<?php get_footer(); ?>

