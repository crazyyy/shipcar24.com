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


  <?php /* ?>
  <section class="call-to-action primary hidden-md hidden-sm hidden-xs">
    <div class="container">
      <h3>Ready to get the best in auto transport?</h3>
      <a href="http://shipcar24.com/get-a-quote" class="btn btn-lg btn-outline quote-link">Get An Instant Quote<i class="fa fa-chevron-right fa-fw"></i></a>
      <p class="lead text-muted">Or call <a href="tel:8889998877">(888) 999-8877</a> to speak directly to our Car Shipping Advisors now!</p>
    </div>
  </section>
  <?php */ ?>

  <?php endwhile; endif; ?>
<?php get_footer(); ?>
