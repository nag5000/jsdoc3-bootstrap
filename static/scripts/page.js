$(function() {

  $('.collapsable').on('click', function() {
    var $li = $(this);
    var collapsed = $li.hasClass('collapsed');

    if (collapsed) {
      $li.removeClass('collapsed');
      console.log('removed');
    } else {
      $li.addClass('collapsed');
      console.log('added');
    }
  });

});
