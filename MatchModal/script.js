// var Webflow = Webflow || [];   this array is declared at the top and wraps jQuery functions

Webflow.push(function () {
  $(document).ready(function () {

    $('.rightPopup-open').on('click', function () {
      $('.rightPopup').fadeIn(300);
    });

    $('.rightPopup-close').on('click', function () {
      $('.rightPopup').fadeOut(300);
    });

    // close when clicking outside of popup
    $('.rightPopup').on('click', function () {
      $('.rightPopup').fadeOut(300);
    }).children().click(function () {
      return false;
    });

  });
});

