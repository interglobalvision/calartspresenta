<?php
get_header();
?>

<div id="light"><?php //get_template_part('partials/light'); ?><img src="<?php bloginfo('stylesheet_directory'); ?>/dist/img/ceiling.png"></div>

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

        <div <?php post_class('grid-item item-s-12 item-m-9 offset-m-1 item-l-6 p-max-width'); ?> id="post-<?php the_ID(); ?>">

          <?php the_content(); ?>

        </div>

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
?>
      <section id="programa" class="padding-bottom-mid padding-top-mid">
<?php
	while ( $program_query->have_posts() ) {
		$program_query->the_post();

    $film_array = get_post_meta($post->ID, '_igv_program_group', true);

    if (!empty($film_array)) {
      $datetime = get_post_meta($post->ID, '_igv_program_datetime', true);
      $venue = get_post_meta($post->ID, '_igv_program_venue', true);
      $qa = get_post_meta($post->ID, '_igv_program_qa', true);
      $order = get_post_meta($post->ID, '_igv_order_number', true);
?>
        <div id="program-<?php the_title; ?>" class="margin-bottom-large">
          <div class="grid-row color-blue margin-bottom-small">
            <div class="grid-item item-s-10 offset-s-2 grid-row margin-bottom-tiny no-gutter">
              <div class="grid-item item-s-12 grid-row margin-bottom-tiny no-gutter">
                <div class="grid-item item-s-4 item-m-3 font-uppercase">
                  <?php echo !empty($datetime) ? date_i18n('l', $datetime) : '&nbsp;'; ?>
                </div>
                <div class="grid-item item-s-4 item-m-3 font-uppercase">
                  <?php echo !empty($datetime) ? date_i18n('j F', $datetime) : '&nbsp;'; ?>
                </div>
                <div class="grid-item item-s-4 item-m-3 font-uppercase">
                  <?php echo !empty($datetime) ? date_i18n('g:i A', $datetime) : '&nbsp;'; ?>
                </div>
              </div>
              <div class="grid-item item-s-12 grid-row no-gutter">
                <div class="grid-item item-s-4 item-m-3">
                  <?php echo !empty($venue) ? $venue : '&nbsp;'; ?>
                </div>
                <div class="grid-item item-s-8 item-m-9">
                  <?php echo ($qa === 'qa') ? 'Q&A' : ''; ?>
                  <?php echo ($qa === 'qa_with') ? 'Q&A con traducción' : ''; ?>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-row margin-bottom-small">
            <div class="grid-item item-s-2 color-blue align-self-center">
              Programa<?php echo !empty($order) ? ' ' . $order : ''; ?>
            </div>
            <div class="grid-item item-s-10 item-l-8">
<?php
      $directors_array = array();

      foreach($film_array as $film_post) {
        $film_id = $film_post['film_id'];

        $directors = wp_get_post_terms($film_id, 'director');

        if (!empty($directors)) {
          array_push($directors_array, $directors[0]->name);
        }
      }

      $directors_unique = array_unique($directors_array);

      if (!empty($directors_unique)) {
        $directors_length = count($directors_unique);
        $d = 1;

        echo '<h2 class="font-size-large font-serif">';

        foreach($directors_unique as $director_name) {
          $director_term = get_term_by('name', $director_name, 'director');
          $permalink = get_term_link($director_term);

          if ($directors_length === 1) {
            echo '<a class="u-pointer js-open-drawer hover-black" data-url="' . $permalink . '">' . $director_name . '</a>';
          } else if ($d < $directors_length) {
            echo '<a class="u-pointer js-open-drawer hover-black" data-url="' . $permalink . '">' . $director_name . '</a>, ';
          } else if ($d === $directors_length) {
            echo '& <a class="u-pointer js-open-drawer hover-black" data-url="' . $permalink . '">' . $director_name . '</a>';
          }

          $d++;
        }

        echo '</h2>';
      }
?>
            </div>
          </div>
          <div class="grid-row margin-bottom-small">
            <div class="grid-item item-s-2 color-blue">
              Titulos
            </div>
            <div class="grid-item item-s-10 grid-row no-gutter">
<?php
      foreach($film_array as $film_post) {
        $film_id = $film_post['film_id'];

        $title = get_the_title($film_id);
        $permalink = get_the_permalink($film_id);
        $duration = get_post_meta($film_id, '_igv_film_duration', true);
        $year = get_post_meta($film_id, '_igv_film_year', true);
        $directors = wp_get_post_terms($film_id, 'director');
?>
              <div class="grid-item item-s-6 grid-row padding-bottom-small align-content-start">
                <div class="grid-item item-s-12 no-gutter">
                  <a class="u-pointer js-open-drawer link-underline font-size-mid font-serif-italic hover-black" data-url="<?php echo $permalink; ?>"><?php echo $title; ?></a>
                </div>
                <div class="grid-item item-s-12 no-gutter color-blue">
                  <div>
                    <?php echo !empty($year) ? '(' . $year . ')' : '&nbsp;'; ?> • <?php echo !empty($duration) ? $duration . ' minutos' : '&nbsp;'; ?>
                  </div>
                  <div>
                    <?php echo !empty($directors) ? $directors[0]->name : '&nbsp;'; ?>
                  </div>
                </div>
              </div>
<?php
      }
?>
            </div>
          </div>
        </div>
<?php
    }
	}
?>
      </section>
<?php
}

wp_reset_postdata();
?>
<?php
/*
if (!empty($long_description)) {
?>
      <div class="grid-row">
        <div class="grid-item item-s-12 item-m-9 offset-m-1 item-l-6 p-max-width">
          <?php echo apply_filters('the_content', $long_description); ?>
        </div>
      </div>
<?php
}
*/
?>
    </div>
  </section>

  <div id="loading-overlay" class="grid-row align-items-center justify-center">
    <div id="loader"></div>
  </div>
  <div id="close-overlay" class="u-pointer"></div>
  <div id="drawer" class="padding-top-large padding-bottom-large">
    <div class="drawer-container">
      <div id="close-drawer">
        <a class="link-underline font-uppercase u-pointer">Close</a>
      </div>
      <div id="drawer-content">
      </div>
    </div>
  </div>
</main>

<?php
get_footer();
?>
