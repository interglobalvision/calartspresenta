<?php
$options = get_site_option('_igv_site_options');

if (isset($options['socialmedia_twitter'])) {
  echo '<meta name="twitter:site" value="' . $options['socialmedia_twitter'] . '">';
}

if (isset($options['og_fb_app_id'])) {
  echo '<meta name="fb:app_id" value="' . $options['og_fb_app_id'] . '">';
}

?>
  <meta property="og:title" content="<?php wp_title('|', true, 'right'); bloginfo('name'); ?>" />
  <meta property="og:site_name" content="<?php bloginfo('name'); ?>" />
  <meta name="twitter:card" value="summary_large_image">
<?php
global $post;

if (is_home()) {
?>
  <meta property="og:url" content="<?php bloginfo('url'); ?>"/>
  <meta property="og:description" content="<?php bloginfo('description'); ?>" />
  <meta property="og:type" content="website" />
<?php
} else if (is_single()) {
  global $post;
  // trim post content by 600 chars
  $excerpt = substr($post->post_content, 0, 600);
  // strip html tags
  $excerpt = strip_tags($excerpt);
  // add ... to end
  $excerpt = $excerpt . '...';
  // clean special cars
  $excerpt = htmlspecialchars($excerpt);
?>
  <meta property="og:url" content="<?php the_permalink(); ?>"/>
  <meta property="og:description" content="<?php echo $excerpt; ?>" />
  <meta property="og:type" content="article" />
<?php
} else {
?>
  <meta property="og:url" content="<?php the_permalink() ?>"/>
  <meta property="og:description" content="<?php bloginfo('description'); ?>" />
  <meta property="og:type" content="website" />
<?php
}
?>
  <meta property="og:image" content="<?php bloginfo('stylesheet_directory'); ?>/img/dist/opengraph.jpg" />;
  <meta property="og:image:width" content="1200" />;
  <meta property="og:image:height" content="630" />;
