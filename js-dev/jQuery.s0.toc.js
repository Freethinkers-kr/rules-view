var $tocWrap = $('<ul id="doc-toc"></ul>');
$('article h1').each(function(){
  let html = $(this).html();
  let href = '#' + $(this).attr('id');
  let item = '<li><a href="'+ href +'">' + html + '</a></li>';
  $tocWrap.append(item);
});
$('aside').append($tocWrap);

$('.btn-toc').click(function(){
  $('aside').toggleClass('active');
  $(this).toggleClass('active');
});
