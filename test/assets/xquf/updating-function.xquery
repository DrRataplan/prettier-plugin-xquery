declare %updating function upsert (
  $e as element(),
  $an as xs:QName,
  $av as xs:anyAtomicType
) {
  let $ea := $e/attribute()[fn:node-name(.) = $an]
  return if (fn:empty($ea)) then
    insert node attribute {$an} { $av } into $e
  else
    replace value of node $ea with $av
};

()
