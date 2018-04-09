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
    $program_id = get_post_meta($post->ID, '_igv_program_id', true);
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
<?php
      if (!empty($program_id)) {
        $venue = get_post_meta($program_id, '_igv_program_venue', true);
        $qa = get_post_meta($program_id, '_igv_program_qa', true);
        $order = get_post_meta($program_id, '_igv_order_number', true);
        $datetime = get_post_meta($program_id, '_igv_program_datetime', true);
?>
          <div class="grid-row color-blue">
            <div class="grid-item item-m-3">
              <?php echo !empty($venue) ? $venue : '&nbsp;'; ?>
            </div>
            <div class="grid-item item-m-3">
              <?php echo ($qa === 'qa') ? 'Q & A' : ''; ?>
              <?php echo ($qa === 'qa_with') ? 'Q & A con traducción' : ''; ?>
              <?php echo ($qa === 'none') ? '&nbsp;' : ''; ?>
            </div>
            <div class="grid-item item-m-3">
              <?php echo !empty($order) ? 'Programa ' . $order : '&nbsp;'; ?>
            </div>
            <div class="grid-item item-m-3">
              <?php
                if (!empty($datetime))
              ?>
                <?php echo date_i18n('g:i A', $datetime); ?><br>
                <?php echo date_i18n('j F', $datetime); ?>
              <?php
                } else {
                  echo '&nbsp;';
                }
              ?>
            </div>
          </div>
          <div class="grid-row padding-top-basic">
            <div class="grid-item p-max-width">
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
