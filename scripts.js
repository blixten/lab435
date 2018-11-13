function switchContent(contentId) {
  $('#contentDiv').fadeOut( "slow", function() {
    var $contents = $(contentId).contents().clone();  // copy the source element's contents
    $contents.css('visibility', 'visible')
    $('#contentDiv').empty().append($contents); 
  }).fadeIn(400);
}
