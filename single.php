<?php
get_header();
?>

<main id="main-content">
  <section id="posts">
    <div class="container">
      <div id="content">
<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();

    $duration = get_post_meta($post->ID, '_igv_film_duration', true);
    $year = get_post_meta($post->ID, '_igv_film_year', true);
    $directors = wp_get_post_terms($post->ID, 'director');
?>

        <article <?php post_class(); ?> id="post-<?php the_ID(); ?>">
          <div class="grid-row padding-bottom-basic color-blue">
            <div class="grid-item item-s-12">
              <h1 class="font-size-mid"><?php the_title(); ?></h1>
            </div>
            <div class="grid-item item-s-12">
              <?php echo !empty($year) ? '(' . $year . ')' : '&nbsp;'; ?> • <?php echo !empty($duration) ? $duration . ' minutos' : '&nbsp;'; ?>
            </div>
            <div class="grid-item item-s-12">
              <?php echo !empty($directors) ? $directors[0]->name : '&nbsp;'; ?>
            </div>
          </div>
          <div class="grid-row padding-bottom-basic">
            <div class="grid-item">
              <?php the_post_thumbnail(); ?>
            </div>
          </div>
          <div class="grid-row">
            <div class="grid-item">
              <?php the_content(); ?>
            </div>
          </div>
        </article>

<?php
  }
}
?>
      </div>
    </div>
  </section>


</main>

<?php
get_footer();
?>
