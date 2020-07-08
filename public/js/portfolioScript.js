(function () {
  "use strict";

  $(".portfolio-item")
    .mouseover(function () {
      $(this).find(".portfolio-hover").css({ top: "0" });
    })
    .mouseout(function () {
      $(this).find(".portfolio-hover").css({ top: "100%" });
    });
})(jQuery);
