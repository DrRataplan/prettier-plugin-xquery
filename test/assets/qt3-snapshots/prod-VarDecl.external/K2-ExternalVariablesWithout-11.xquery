declare variable $a as attribute()* := (
  attribute name1 { () }, attribute name2 { () }, attribute name3 { () }
);

declare variable $b as attribute()* := (
  attribute name1 { () }, attribute name2 { () }, attribute name3 { () }
);

$a/(
  let $p := position()
  return . is $b[$p]
)
