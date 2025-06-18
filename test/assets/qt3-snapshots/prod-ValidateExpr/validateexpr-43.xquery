import schema namespace tc =  "http://www.w3.org/XQueryTest/testcases";

let $x := (
  current-date(),
  validate type tc:globalComplexTypeSimpleContentRestrictionOfBaseType {
    <e currency="USD">5</e>
    },
  current-dateTime()
)
let $two := year-from-date(current-date()) idiv 1000
return $x[$two] instance of element(e,
  tc:globalComplexTypeSimpleContentRestrictionOfBaseType)
