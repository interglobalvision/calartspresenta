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
	'post_type' => array( 'program' ),
  'meta_key' => '_igv_order_number',
  'orderby' => 'meta_value_num',
  'order' => 'ASC'
);

$program_query = new WP_Query( $args );

if ( $program_query->have_posts() ) {
	while ( $program_query->have_posts() ) {
		$program_query->the_post();

    $film_array = get_post_meta($post->ID, '_igv_program_group', true);

    if (!empty($film_array)) {
      $date = get_post_meta($post->ID, '_igv_program_date', true);
      $time = get_post_meta($post->ID, '_igv_program_time', true);
      $venue = get_post_meta($post->ID, '_igv_program_venue', true);
      $qa = get_post_meta($post->ID, '_igv_program_qa', true);
?>
      <div id="program-<?php the_title; ?>">
        <div class="grid-row">
          <div class="grid-item">
            <?php the_title(); ?>
          </div>
          <div class="grid-item">
            <?php echo !empty($date) ? $date : '&nbsp;'; ?>
          </div>
          <div class="grid-item">
            <?php echo !empty($time) ? $time : '&nbsp;'; ?>
          </div>
          <div class="grid-item">
            <?php echo !empty($venue) ? $venue : '&nbsp;'; ?>
          </div>
          <div class="grid-item">
            <?php echo ($qa === 'qa') ? 'Q & A' : ''; ?>
            <?php echo ($qa === 'qa_with') ? 'Q & A con traducción' : ''; ?>
          </div>
        </div>
<?php
      foreach($film_array as $film_post) {
        $film_id = $film_post['film_id'];

        $title = get_the_title($film_id);
        $permalink = get_the_permalink($film_id);
        $duration = get_post_meta($film_id, '_igv_film_duration', true);
        $year = get_post_meta($film_id, '_igv_film_year', true);
?>
        <div class="grid-row">
          <div class="grid-item item-s-4">
            <a href="#" class="js-open-film" data-url="<?php echo $permalink; ?>"><?php echo $title; ?></a>
          </div>
          <div class="grid-item item-s-4">
            <?php echo !empty($year) ? $year : '&nbsp;'; ?>
          </div>
          <div class="grid-item item-s-4">
            <?php echo !empty($duration) ? $duration . ' mins.' : '&nbsp;'; ?>
          </div>
        </div>
<?php
      }
?>
      </div>
<?php
    }
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
  <div id="drawer">

  </div>
</main>

<?php
get_footer();
?>
