var $ryu = $('.ryu');
var $hadouken = $('.hadouken')

var dancing = function() {
   $ryu.addClass("dancing");
};
var stopDancing = function() {
   $ryu.removeClass("dancing");
};

// Events
$ryu.hover(dancing, stopDancing);

$ryu.on('mousedown',function() {
  $ryu.addClass('pose');
  $hadouken.addClass('fire');
});

$ryu.on('mouseup',function() {
  $ryu.removeClass('pose');
  $hadouken.removeClass('fire');
});