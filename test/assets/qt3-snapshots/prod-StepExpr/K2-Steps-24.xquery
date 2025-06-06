declare variable $root := <root><b d="" /><c><c d="" /><c /></c></root>;

declare function local:function ($object) {
  $root/b[@d = $object/@d]
};

$root/c/c/local:function(.)
