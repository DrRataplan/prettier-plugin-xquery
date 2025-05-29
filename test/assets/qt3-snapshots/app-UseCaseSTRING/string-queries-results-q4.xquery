declare function local:partners ($c as xs:string) as element()* {
  let $c := $company-data//company[name = $c]
  return $c//partner
};

for $item in $string//news_item, $c in $company-data//company
let $partners := local:partners(exactly-one($c/name))
where contains(string($item), $c/name) and
  (
    some
      $p in
      $partners satisfies
      contains(string($item), $p) and $item/news_agent != $c/name
  )
return $item
