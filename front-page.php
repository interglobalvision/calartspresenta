<?php
get_header();
?>

<main id="main-content">
  <section id="posts">
    <div class="container">
      <div class="grid-row">

<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();

    $post_id = $post->ID;

    $long_description = get_post_meta($post_id, '_igv_home_description', true);
?>

        <article <?php post_class('grid-item item-s-12'); ?> id="post-<?php the_ID(); ?>">

          <?php the_content(); ?>

        </article>

<?php
  }
}
?>

      </div>
<?php
$args = array(
	'post_type' => array( 'film' ),
);

$film_query = new WP_Query( $args );

if ( $film_query->have_posts() ) {
	while ( $film_query->have_posts() ) {
		$film_query->the_post();
?>
      <div class="grid-row">
        <div class="grid-item">
          <?php the_title(); ?>
        </div>
      </div>
<?php
	}
}

wp_reset_postdata();
?>
<?php
if (!empty($long_description)) {
?>
      <div class="grid-row">
        <div class="grid-item">
          <?php echo apply_filters('the_content', $long_description); ?>
        </div>
      </div>
<?php
}
?>
    </div>
  </section>
</main>

<?php
get_footer();
?>
