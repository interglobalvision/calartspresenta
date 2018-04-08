<?php

// DIRECTOR

add_action( 'init', 'create_director_tax' );

function create_director_tax() {
  $labels = array(
    'name'                       => _x( 'Directors', 'taxonomy general name' ),
    'singular_name'              => _x( 'Director', 'taxonomy singular name' ),
    'search_items'               => __( 'Search Directors' ),
    'popular_items'              => __( 'Popular Directors' ),
    'all_items'                  => __( 'All Directors' ),
    'parent_item'                => null,
    'parent_item_colon'          => null,
    'edit_item'                  => __( 'Edit Director' ),
    'update_item'                => __( 'Update Director' ),
    'add_new_item'               => __( 'Add New Director' ),
    'new_item_name'              => __( 'New Director Name' ),
    'separate_items_with_commas' => __( 'Use only 1 Director' ),
    'add_or_remove_items'        => __( 'Add or remove Director' ),
    'choose_from_most_used'      => __( 'Choose from the most used Directors' ),
    'not_found'                  => __( 'No Directors found.' ),
    'menu_name'                  => __( 'Directors' ),
  );

  $args = array(
    'hierarchical'          => false,
    'labels'                => $labels,
    'show_ui'               => true,
    'show_admin_column'     => true,
    'query_var'             => true,
  );

  register_taxonomy( 'director', array('short','film'), $args );
}
