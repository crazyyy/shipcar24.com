<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>

  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="format-detection" content="telephone=no">

  <meta name="montweb-client-app/config/environment" content="%7B%22modulePrefix%22%3A%22montweb-client-app%22%2C%22environment%22%3A%22production%22%2C%22baseURL%22%3A%22/%22%2C%22locationType%22%3A%22auto%22%2C%22EmberENV%22%3A%7B%22FEATURES%22%3A%7B%7D%7D%2C%22contentSecurityPolicy%22%3A%7B%22font-src%22%3A%22%27self%27%20https%3A//d1d9oqfe9g83w6.cloudfront.net%22%2C%22default-src%22%3A%22%27none%27%22%2C%22script-src%22%3A%22%27self%27%22%2C%22connect-src%22%3A%22%27self%27%22%2C%22img-src%22%3A%22%27self%27%22%2C%22style-src%22%3A%22%27self%27%22%2C%22media-src%22%3A%22%27self%27%22%7D%2C%22APP%22%3A%7B%22name%22%3A%22montweb-client-app%22%2C%22version%22%3A%220.0.0+83caf10b%22%7D%2C%22apiURL%22%3A%22//checkout.montway.com%22%2C%22searchURL%22%3A%22//www.montway.com/es%22%2C%22contentSecurityPolicyHeader%22%3A%22Content-Security-Policy-Report-Only%22%2C%22exportApplicationGlobal%22%3Afalse%7D" />


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
    <span itemprop="name">Montway Auto Transport</span>
    <img itemprop="logo" src="<?php echo get_template_directory_uri(); ?>/img/mw-logo.png" alt="Montway Auto Transport" />
    <div itemprop="contactPoint" itemscope itemtype="http://schema.org/ContactPoint">
      <span itemprop="telephone">+1-888-666-8929</span>
      <span itemprop="contactType">Sales</span>
      <span itemprop="areaServed">US</span>
      <span itemprop="contactOption">TollFree</span>
    </div>
    Contact Details:
    <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
      Main address:
      <span itemprop="streetAddress">1400 East Touhy Ave Suite 255</span>
      <span itemprop="postalCode">60018</span>
      <span itemprop="addressLocality">Des Plaines, IL</span>
    </div>
    <a itemprop="sameAs" href="#">Facebook</a>
    <a itemprop="sameAs" href="#">Twitter</a>
    <a itemprop="sameAs" href="#">Google+</a>
    <a itemprop="sameAs" href="#">LinkedIn</a>
    <a itemprop="sameAs" href="#">Vimeo</a>
    <a itemprop="sameAs" href="#">YouTube</a>
    <a itemprop="sameAs" href="#">Instagram</a>
  </div>
  <header>
    <nav class="main-nav stickable">
      <a href="/" id="logo">
        <img src="<?php echo get_template_directory_uri(); ?>/img/logo-white.png" alt="Montway Auto Transport" width="200" height="37">
      </a>
      <div class="hidden-lg hidden-md">
        <button type="button" class="btn nav-btn"><i class="icon icon-bars"></i></button>
        <a href="tel:8889988552" class="btn call-btn"><i class="fa fa-phone"></i> Call</a>
      </div>
      <div class="call-links visible-lg visible-md">
        <a href="tel:8886668929" class="tel">(888) 666-8929</a>
        <a href="#" class="request-call" data-placement="bottom"><i class="icon icon-phone-call-solid"></i> Request a call</a>
      </div>
      <?php wpeHeadNav(); ?>
    </nav>
