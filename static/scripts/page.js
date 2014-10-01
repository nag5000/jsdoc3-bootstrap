$(function() {

  $('.collapsable').on('click', function() {
    var $li = $(this);
    var collapsed = $li.hasClass('collapsed');

    if (collapsed) {
      $li.removeClass('collapsed');
    } else {
      $li.addClass('collapsed');
    }
  });

});
