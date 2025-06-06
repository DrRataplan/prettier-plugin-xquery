declare variable $root := <root><b d="" /><c><c d="" /><c /></c></root>;

declare function local:function ($object) {
  $root/b[$object/@d]
};

$root//local:function(c)
