declare variable $root := <root> <c d=""/> </root>;

declare function local:function ($object) {
  $root[$object/@d]
};

$root//local:function(c)
