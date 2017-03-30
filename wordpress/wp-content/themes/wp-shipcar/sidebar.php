<div class="col-lg-4 col-md-4">
  <div id="secondary" class="widget-area" role="complementary" itemscope="itemscope" itemtype="http://schema.org/WPSideBar">

    <?php if ( is_active_sidebar('widgetarea1') ) : ?>
      <?php dynamic_sidebar( 'widgetarea1' ); ?>
    <?php else : ?>
      <!-- If you want display static widget content - write code here
      RU: Здесь код вывода того, что необходимо для статического контента виджетов -->

    <?php endif; ?>

  </div>
  <!-- #secondary -->
</div><!-- .col -->
