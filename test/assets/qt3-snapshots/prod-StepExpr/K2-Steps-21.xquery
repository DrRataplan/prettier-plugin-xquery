declare variable $root := <a> <b e="B"/> <c e="B"/> </a>;

declare function local:function ($arg) {
  $root["B" eq $arg/@e]
};

$root/local:function(c)
