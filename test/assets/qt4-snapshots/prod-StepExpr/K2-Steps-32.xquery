declare variable $root := <root />;

declare function local:function ($arg, $count as xs:integer) {
  $arg,
  $root,
  if ($count eq 2) then
    $root
  else
    local:function($arg, $count + 1)
};

$root/local:function(., 1)
