$(document).pjax('a', '#content');

$('body').bind('pjax:start', function(xhr, options) {
    $('#content').fadeOut("fast");
}).bind('pjax:end', function(xhr, options) {
    $('#content').fadeIn("fast");
});
