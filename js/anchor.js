var $page = $('html, body');
$('a[href*="#back-home"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top,
    },
    3000
  );
  return false;
});

var $page = $('html, body');
$('a[href*="#footer"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top,
    },
    3000
  );
  return false;
});