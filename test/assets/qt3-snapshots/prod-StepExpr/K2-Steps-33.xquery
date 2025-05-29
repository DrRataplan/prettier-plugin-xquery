declare variable $root := (<b d=""/>, <c> <c d=""/> </c>);

declare function local:function ($object) {
  $root[@d eq $object/@d]
};

$root/local:function(c)
