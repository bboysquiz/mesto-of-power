// $(".popup__callback-phone").mask("+7(999) 999-9999");
$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
};
$(".popup__callback-phone").click(function(){
    $(this).setCursorPosition(3);
}).mask("+7(999) 999-9999");
$(".popup__callback-phone").mask("+7(999) 999-9999");

$.mask.definitions['S'] = "[А-Яа-яЁё]";
$(".popup__callback-name").mask("S?SSSSSSSSSSSSSSSSSSSSSSSSSS");
$(".popup__callback-name-child").mask("S?SSSSSSSSSSSSSSSSSSSSSSSSSS");

$(".callback__phone").click(function(){
  $(this).setCursorPosition(3);
}).mask("+7(999) 999-9999");
$(".callback__phone").mask("+7(999) 999-9999");

$.mask.definitions['S'] = "[А-Яа-яЁё]";
$(".callback__name").mask("S?SSSSSSSSSSSSSSSSSSSSSSSSSS");
$(".popup__callback-name-child").mask("S?SSSSSSSSSSSSSSSSSSSSSSSSSS");

