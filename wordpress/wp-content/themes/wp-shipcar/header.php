<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>

  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="format-detection" content="telephone=no">

  <meta name="montweb-client-app/config/environment" content="" />


  <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>
  <link href="http://www.google-analytics.com/" rel="dns-prefetch"><!-- dns prefetch -->

  <!--[if lt IE 9]>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->

  <?php wp_head(); ?>

  <link rel="shortcut icon" type="image/x-icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
  <link rel="apple-touch-icon-precomposed" type="image/png" href="<?php echo get_template_directory_uri(); ?>/apple-touch-icon-precomposed.png">

  <script async src="https://use.typekit.net/tdz4myk.js"></script>
  <script>
  try {
    Typekit.load();
  } catch (e) {}
  </script>
  <script async src="<?php echo get_template_directory_uri(); ?>/js/5121751367.js"></script>
</head>

<body <?php body_class(); ?>>

  <div id="ember-we-are-open-banner"></div>
  <div itemscope itemtype="http://schema.org/Organization" class="hide">
    <span itemprop="name">ShipCar24 Auto Transport</span>
    <img itemprop="logo" src="<?php echo get_template_directory_uri(); ?>/img/mw-logo.png" alt="ShipCar24 Auto Transport" />
    <div itemprop="contactPoint" itemscope itemtype="http://schema.org/ContactPoint">
      <span itemprop="telephone">+1-916-300-5174</span>
      <span itemprop="contactType">Sales</span>
      <span itemprop="areaServed">US</span>
      <span itemprop="contactOption">TollFree</span>
    </div>
    Contact Details:
    <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
      Main address:
      <span itemprop="streetAddress">4366 Auburn, Blvd, Suite 102</span>
      <span itemprop="postalCode">95841</span>
      <span itemprop="addressLocality">Sacramento, CA</span>
    </div>
    <a itemprop="sameAs" href="#">Facebook</a>
    <a itemprop="sameAs" href="#">Twitter</a>
    <a itemprop="sameAs" href="#">Google+</a>
    <a itemprop="sameAs" href="#">LinkedIn</a>
    <a itemprop="sameAs" href="#">Vimeo</a>
    <a itemprop="sameAs" href="#">YouTube</a>
    <a itemprop="sameAs" href="#">Instagram</a>
  </div>
