declare variable $a := (
  attribute name1 { () }, attribute name2 { () }, attribute name3 { () }
);

declare variable $b := (
  attribute name1 { () }, attribute name2 { () }, attribute name3 { () }
);

$a/(
  let $p := position()
  return . is $b[$p]
)
