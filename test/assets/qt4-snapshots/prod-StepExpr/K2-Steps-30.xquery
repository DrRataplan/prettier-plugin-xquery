declare variable $root := <root><c d="" /></root>;

declare function local:function ($object) {
  $root[$object]
};

$root//local:function(c)
