declare namespace map = "http://www.w3.org/2005/xpath-functions/map";

declare function local:deep-put (
  $input as item()*,
  $key as xs:string,
  $value as item()*
) as item()* {
  let $mf :=
    function ($k, $v) {
      if ($k eq $key) then
        map {$k: $value}
      else
        map {$k: local:deep-put($v, $key, $value)}
    }
  for $i in $input
  return if ($i instance of map(*)) then
      map:merge(map:for-each($i, $mf))
    else if ($i instance of array(*)) then
      array { local:deep-put($i?*, $key, $value) }
    else
      $i
};

local:deep-put(
  json-doc("http://www.w3.org/qt3/app/UseCaseR31/bookinfo-json"),
  "first",
  "John"
)
