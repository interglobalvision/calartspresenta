<?php
// Menu icons for Custom Post Types
// https://developer.wordpress.org/resource/dashicons/
function add_menu_icons_styles(){
?>

<style>
#menu-posts-film .dashicons-admin-post:before {
    content: '\f235';
}
#menu-posts-short .dashicons-admin-post:before {
    content: '\f235';
}
#menu-posts-program .dashicons-admin-post:before {
    content: '\f126';
}
</style>

<?php
}
add_action( 'admin_head', 'add_menu_icons_styles' );


//Register Custom Post Types
add_action( 'init', 'register_cpt_film' );

function register_cpt_film() {

  $labels = array(
    'name' => _x( 'Films', 'film' ),
    'singular_name' => _x( 'Film', 'film' ),
    'add_new' => _x( 'Add New', 'film' ),
    'add_new_item' => _x( 'Add New Film', 'film' ),
    'edit_item' => _x( 'Edit Film', 'film' ),
    'new_item' => _x( 'New Film', 'film' ),
    'view_item' => _x( 'View Film', 'film' ),
    'search_items' => _x( 'Search Films', 'film' ),
    'not_found' => _x( 'No films found', 'film' ),
    'not_found_in_trash' => _x( 'No films found in Trash', 'film' ),
    'parent_item_colon' => _x( 'Parent Film:', 'film' ),
    'menu_name' => _x( 'Films', 'film' ),
  );

  $args = array(
    'labels' => $labels,
    'hierarchical' => false,

    'supports' => array( 'title', 'editor', 'thumbnail' ),

    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 5,

    'show_in_nav_menus' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => true,
    'query_var' => true,
    'can_export' => true,
    'rewrite' => true,
    'capability_type' => 'post'
  );

  register_post_type( 'film', $args );
}

add_action( 'init', 'register_cpt_short' );

function register_cpt_short() {

  $labels = array(
    'name' => _x( 'Shorts', 'short' ),
    'singular_name' => _x( 'Short', 'short' ),
    'add_new' => _x( 'Add New', 'short' ),
    'add_new_item' => _x( 'Add New Short', 'short' ),
    'edit_item' => _x( 'Edit Short', 'short' ),
    'new_item' => _x( 'New Short', 'short' ),
    'view_item' => _x( 'View Short', 'short' ),
    'search_items' => _x( 'Search Shorts', 'short' ),
    'not_found' => _x( 'No shorts found', 'short' ),
    'not_found_in_trash' => _x( 'No shorts found in Trash', 'short' ),
    'parent_item_colon' => _x( 'Parent Short:', 'short' ),
    'menu_name' => _x( 'Shorts', 'short' ),
  );

  $args = array(
    'labels' => $labels,
    'hierarchical' => false,

    'supports' => array( 'title', 'editor', 'thumbnail' ),

    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 5,

    'show_in_nav_menus' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => true,
    'query_var' => true,
    'can_export' => true,
    'rewrite' => true,
    'capability_type' => 'post'
  );

  register_post_type( 'short', $args );
}

add_action( 'init', 'register_cpt_program' );

function register_cpt_program() {

  $labels = array(
    'name' => _x( 'Programs', 'program' ),
    'singular_name' => _x( 'Program', 'program' ),
    'add_new' => _x( 'Add New', 'program' ),
    'add_new_item' => _x( 'Add New Program', 'program' ),
    'edit_item' => _x( 'Edit Program', 'program' ),
    'new_item' => _x( 'New Program', 'program' ),
    'view_item' => _x( 'View Program', 'program' ),
    'search_items' => _x( 'Search Programs', 'program' ),
    'not_found' => _x( 'No programs found', 'program' ),
    'not_found_in_trash' => _x( 'No programs found in Trash', 'program' ),
    'parent_item_colon' => _x( 'Parent Program:', 'program' ),
    'menu_name' => _x( 'Programs', 'program' ),
  );

  $args = array(
    'labels' => $labels,
    'hierarchical' => false,

    'supports' => array( 'title', 'editor', 'thumbnail' ),

    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 5,

    'show_in_nav_menus' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => true,
    'query_var' => true,
    'can_export' => true,
    'rewrite' => true,
    'capability_type' => 'post'
  );

  register_post_type( 'program', $args );
}
