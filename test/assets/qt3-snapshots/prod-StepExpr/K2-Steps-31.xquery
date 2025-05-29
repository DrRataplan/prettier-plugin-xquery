declare variable $root := <root><c/></root>;

declare function local:function ($arg) {
  $root[$arg]
};

$root//local:function(.)
