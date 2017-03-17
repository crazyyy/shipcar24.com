$(window).on('load hashchange', function(event) {
  var target = $(window.location.hash.replace('!', ''));

  if (target.length) {
    var postId = target.data('update-views');
    var nonce = target.data('nonce');

    updatePostViews(postId, nonce);
  }
});

function updatePostViews(postId, nonce) {
  $.ajax({
    type: "post",
    dataType: "json",
    url: childBlogJsMain.viewsUrl,
    data: {
      action: "update_post_views",
      post_id: postId,
      nonce: nonce
    },
    success: function(response) {
      if (response.type === "success") {
        //add some logic here if needed
      }
    }
  });
}
