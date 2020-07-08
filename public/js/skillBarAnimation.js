$(window).on("scroll", function () {
  var y_scroll_pos = window.pageYOffset;
  var scroll_pos_test = 1500;

  if (y_scroll_pos > scroll_pos_test) {
    jQuery(document).ready(function () {
      jQuery(".skillbar").each(function () {
        jQuery(this)
          .find(".skillbar-bar")
          .animate(
            {
              width: jQuery(this).attr("data-percent"),
            },
            2500
          );
      });
    });
  }
});
