import schema namespace tc =  "http://www.w3.org/XQueryTest/testcases";

let $x := validate strict { / }
return exists(
  $x/tc:root/schema-element(tc:schema-element-head)/self::tc:schema-element-group
)
