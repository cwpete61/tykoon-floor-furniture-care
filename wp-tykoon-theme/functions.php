<?php
/**
 * Tykoon Floor Care Theme functions and definitions
 *
 * @package Tykoon
 * @since 1.0.0
 */

function tykoon_setup() {
    add_theme_support('wp-block-styles');
    add_theme_support('align-wide');
    add_theme_support('responsive-embeds');
    add_theme_support('editor-styles');
    add_theme_support('wp-block-templates');
    add_theme_support('title-tag');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
    add_theme_support('post-thumbnails');
    add_theme_support('automatic-feed-links');
    add_theme_support('customize-selective-refresh-widgets');
    add_theme_support('custom-logo', array(
        'height' => 250,
        'width'  => 250,
        'flex-width' => true,
        'flex-height' => true,
    ));

    // Menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'tykoon'),
    ));
}

add_action('after_setup_theme', 'tykoon_setup');

function tykoon_scripts() {
    wp_enqueue_style('tykoon-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
    wp_enqueue_style('tykoon-tailwind', 'https://cdn.tailwindcss.com', array(), '3.4.0');
}

add_action('wp_enqueue_scripts', 'tykoon_scripts');

function tykoon_block_editor_scripts() {
    wp_enqueue_style('tykoon-editor', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
    wp_enqueue_style('tykoon-tailwind-editor', 'https://cdn.tailwindcss.com', array(), '3.4.0');
    wp_enqueue_style('tykoon-theme-json', get_theme_file_uri('theme.json'));
}

add_action('enqueue_block_editor_assets', 'tykoon_block_editor_scripts');

function tykoon_theme_support() {
    add_theme_support('editor-color-palette', array(
        array(
            'name'  => __('Primary', 'tykoon'),
            'slug'  => 'primary',
            'color'  => '#fbbf24',
        ),
        array(
            'name'  => __('Secondary', 'tykoon'),
            'slug'  => 'secondary',
            'color'  => '#111827',
        ),
        array(
            'name'  => 'Tertiary',
            'slug'  => 'tertiary',
            'color'  => '#000',
        ),
        array(
            'name'  => 'Black',
            'slug'  => 'black',
            'color'  => '#000',
        ),
        array(
            'name'  => 'White',
            'slug'  => 'white',
            'color'  => '#fff',
        ),
        array(
            'name'  => 'Gray',
            'slug'  => 'gray',
            'color'  => '#6b7280',
        ),
    ));
}

add_action('after_setup_theme', 'tykoon_theme_support');
