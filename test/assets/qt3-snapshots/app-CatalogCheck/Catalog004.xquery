declare namespace fots = "http://www.w3.org/2010/09/qt-fots-catalog";

let $testsets := //fots:test-set/@file/doc(resolve-uri(., base-uri(..)))
for $schema in (. | $testsets)//fots:environment/fots:schema
let $targetNamespace :=
  doc(resolve-uri($schema/@file, base-uri($schema)))/*/@targetNamespace
where not(
  $schema/@uri eq $targetNamespace or
    (empty($targetNamespace) and string(@uri) = "")
)
return ($schema, <file>{ base-uri($schema) }</file>)
