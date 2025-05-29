declare variable $root := <a> <b e="B" /> <c e="B" /> </a>;

declare function local:function ($arg) {
  $root[exactly-one($arg/@e)]
};

$root/local:function(c)
