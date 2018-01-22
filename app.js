function attachThumbnailListener() {
  $('.thumbnail').on('click', function(event) {
    const srcVal = $(this).find('img').attr("src");
    const altVal = $(this).find('img').attr("alt");

    $('.hero img').attr('src', srcVal).attr('alt', altVal);
  });
}

$(function(){
  attachThumbnailListener();
})
