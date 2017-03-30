<?php if (have_posts()): while (have_posts()) : the_post(); ?>
 <div id="post-<?php the_ID(); ?>" <?php post_class('hentry-box no-border col-lg-6 col-md-6'); ?>>
    <article  class="has-post-thumbnail hentry category-autos tag-auto-transport" itemscope="itemscope" itemtype="http://schema.org/Article">

      <header class="entry-header entry-header--nobg">
        <h2 class="entry-title" itemprop="name headline"><a href="<?php the_permalink(); ?>" rel="bookmark" itemprop="url"><?php the_title(); ?></a></h2>
        <div class="entry-meta">
          <span class="byline"> <span class="author vcard" itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person"><?php the_author_posts_link(); ?></span></span><span class="sep">/</span><span class="posted-on"><?php the_time('j F Y'); ?></span>
        </div>
        <!-- .entry-meta -->
      </header>
      <!-- .entry-header -->
      <div class="post-thumb">
        <a rel="nofollow" class="feature-img thumb-link" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
          <span class="format-icon"></span>
          <?php if ( has_post_thumbnail()) :
            the_post_thumbnail('medium');
          else: ?>
            <img src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
          <?php endif; ?>
        </a><!-- /post thumbnail -->
      </div>
      <div class="entry-summary" itemprop="description">
        <?php wpeExcerpt('wpeExcerpt40'); ?>
        <div class="more-link"><a href="<?php the_permalink(); ?>" class="widget-link">Continue reading <i class="fa fa-chevron-right fa-fw"></i></a></div>
      </div>
      <!-- .entry-summary -->
    </article>
    <!-- #post-## -->
  </div><!-- .hentry-box -->
<?php endwhile; endif; ?>
