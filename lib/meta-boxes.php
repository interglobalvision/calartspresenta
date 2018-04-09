<?php

/* Get post objects for select field options */
function get_post_objects( $query_args ) {
  $args = wp_parse_args( $query_args, array(
    'post_type' => 'post',
  ) );
  $posts = get_posts( $args );
  $post_options = array();
  if ( $posts ) {
    foreach ( $posts as $post ) {
      $post_options [ $post->ID ] = $post->post_title;
    }
  }
  return $post_options;
}


/**
 * Include and setup custom metaboxes and fields.
 *
 * @category YourThemeOrPlugin
 * @package  Metaboxes
 * @license  http://www.opensource.org/licenses/gpl-license.php GPL v2.0 (or later)
 * @link     https://github.com/WebDevStudios/CMB2
 */

/**
 * Hook in and add metaboxes. Can only happen on the 'cmb2_init' hook.
 */
add_action( 'cmb2_init', 'igv_cmb_metaboxes' );
function igv_cmb_metaboxes() {

  // Start with an underscore to hide fields from custom fields list
  $prefix = '_igv_';

  /**
   * Metaboxes declarations here
   * Reference: https://github.com/WebDevStudios/CMB2/blob/master/example-functions.php
   */

  $home_metabox = new_cmb2_box( array(
		'id'            => $prefix . 'home_metabox',
		'title'         => esc_html__( 'Details', 'cmb2' ),
		'object_types'  => array( 'page' ), // Post type
		// 'show_on_cb' => 'yourprefix_show_if_front_page', // function should return a bool value
		// 'context'    => 'normal',
		// 'priority'   => 'high',
		// 'show_names' => true, // Show field names on the left
		// 'cmb_styles' => false, // false to disable the CMB stylesheet
		// 'closed'     => true, // true to keep the metabox closed by default
		// 'classes'    => 'extra-class', // Extra cmb2-wrap classes
		// 'classes_cb' => 'yourprefix_add_some_classes', // Add classes through a callback.
	) );

  $home_metabox->add_field( array(
		'name'    => esc_html__( 'Long description', 'cmb2' ),
		'id'      => $prefix . 'home_description',
		'type'    => 'wysiwyg',
		'options' => array(
			'textarea_rows' => 30,
		),
	) );

  $film_metabox = new_cmb2_box( array(
		'id'            => $prefix . 'film_metabox',
		'title'         => esc_html__( 'Details', 'cmb2' ),
		'object_types'  => array( 'film', 'short' ), // Post type
		// 'show_on_cb' => 'yourprefix_show_if_front_page', // function should return a bool value
		// 'context'    => 'normal',
		// 'priority'   => 'high',
		// 'show_names' => true, // Show field names on the left
		// 'cmb_styles' => false, // false to disable the CMB stylesheet
		// 'closed'     => true, // true to keep the metabox closed by default
		// 'classes'    => 'extra-class', // Extra cmb2-wrap classes
		// 'classes_cb' => 'yourprefix_add_some_classes', // Add classes through a callback.
	) );

  $film_metabox->add_field( array(
		'name' => esc_html__( 'Date', 'cmb2' ),
		'id'   => $prefix . 'film_date',
		'type' => 'text_date',
		// 'date_format' => 'Y-m-d',
	) );

  $film_metabox->add_field( array(
		'name' => esc_html__( 'Start Time', 'cmb2' ),
		'id'   => $prefix . 'film_time',
		'type' => 'text_time',
		// 'time_format' => 'H:i', // Set to 24hr format
	) );

  $film_metabox->add_field( array(
		'name' => esc_html__( 'Duration', 'cmb2' ),
		'id'   => $prefix . 'film_duration',
		'type' => 'text_small',
	) );

}
?>
