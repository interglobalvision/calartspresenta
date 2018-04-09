<?php
get_header();
?>

<main id="main-content">
  <section id="content">
    <div class="container">
      <div class="grid-row">

<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();
?>

        <article <?php post_class('grid-item item-s-12'); ?> id="post-<?php the_ID(); ?>">

          <h1><?php the_title(); ?></h1>

          <?php the_content(); ?>

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
