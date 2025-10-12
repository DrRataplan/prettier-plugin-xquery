declare variable $root := <a><c e="" /></a>;

declare function local:function ($arg) {
  $root[$arg/@e]
};

$root/local:function(c)
