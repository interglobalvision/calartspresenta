<?php
get_header();
?>

<main id="main-content">
  <section id="posts">
    <div class="container">
      <div id="content">
<?php
  $director = get_queried_object();

  $bio = get_term_meta($director->term_id, '_igv_director_bio', true);
?>

        <article>
          <div class="grid-row padding-bottom-basic color-blue">
            <div class="grid-item item-s-12">
              <h1 class="font-size-mid"><?php echo $director->name; ?></h1>
            </div>
          </div>
          <div class="grid-row padding-bottom-basic">
            <div class="grid-item grid-item-12 p-max-width">
              <?php echo !empty($bio) ? apply_filters('the_content', $bio) : ''; ?>
            </div>
          </div>
        </article>

      </div>
    </div>
  </section>


</main>

<?php
get_footer();
?>
