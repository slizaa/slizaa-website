/* 
 * ===============================================================
 * ON DOCUMENT READY
 * ===============================================================
 */
function initialise_document_ready_functions()
{
 
    // Initialise Main Menu  
    // on page load, initialise menu functionality depending on window width
    if (viewport().width >= window.xs_screen_max)
    { 
        initialise_main_menu_horizontal_functionality(); 
    }
    else 
    { 
        initialise_main_menu_mobile_functionality(); 
    }

    // Main menu - tablet viewport fix - allow opening of submenus when menu items clicked
    initialise_tablet_mainmenu_submenu_fix();

    // initialise subpages sidebar menu functionality
    initialise_submenu_functionality();

    // initialise form validation and submit functions 
    validate_and_submit_forms();

    /*
     * ----------------------------------------------------------
     * ON WINDOW RESIZE
     * ----------------------------------------------------------
     */
    $(window).resize(function()
    { 
        // on window resize, initialise menu functionality depending on window width
        if (viewport().width >= window.xs_screen_max)
        { 
            initialise_main_menu_horizontal_functionality(); 
        }
        else 
        { 
            initialise_main_menu_mobile_functionality(); 
        }

        // Main Menu Fixed at top on scroll
        // (the parameter 'true' is set to re-calculate the top menu original top offset)
        main_menu_fixed_at_top_on_scroll(true);

        // set equal heights to all horizontal list items with ".equal-height" class
        set_equal_heights_to_list_items();

        // set equal heights to horizontal section columns (if isolated-sections enabled)
        set_equal_heights_to_section_columns();

    });
    // end: on window resize

    /* 
     * ----------------------------------------------------------
     * ON WINDOW SCROLL
     * ----------------------------------------------------------
     */
    $(window).scroll(function()
    { 
        // Main Menu Fixed at top on scroll
        main_menu_fixed_at_top_on_scroll();

        // update scroll to top icon visibility
        go_to_top_visibility();        
    });
    // end: on window scroll

}
// end: initialise_document_ready_functions()

$(document).ready(function()
{
    initialise_document_ready_functions();
});

 /* 
 * ===============================================================
 * ON WINDOW LOAD (after all elements were loaded)
 * ===============================================================
 */

function initialise_window_load_functions()
{

    // Main Menu Fixed at top on scroll
    // (the parameter 'true' is set to calculate the top menu original top offset)
    // this is included in window.load in order for the header images to be loaded first
    main_menu_fixed_at_top_on_scroll(true);

    // set equal heights to all horizontal list items with ".equal-height" class
    set_equal_heights_to_list_items();

    // set equal heights to horizontal section columns (if isolated-sections enabled)
    set_equal_heights_to_section_columns();

    // Load Blog Masonry
    var blog_masonry = $(".blog-articles-container.masonry-list");
    if (blog_masonry.length > 0)
    {
        blog_masonry.each(function()
        {
            $(this).masonry({
              itemSelector: '.blog-article'
            });
        });
    }

    // Load Gallery Masonry
    var gallery_masonry = $(".gallery-masonry");
    if (gallery_masonry.length > 0)
    {
        gallery_masonry.each(function()
        {
            $(this).masonry({
              itemSelector: '.gallery-item'
            });
        });
    }

    // Fade In Gallery images after all images are loaded
    fade_in_gallery_images();

}
// end: initialise_window_load_functions()

$(window).load(function()
{
    initialise_window_load_functions();
});