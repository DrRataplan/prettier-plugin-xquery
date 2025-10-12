import schema namespace cd =  "http://www.cbcl.co.uk/XQueryTest/complexData";

declare function local:f (
  $x
) as element(cd:complexTypeWithSimpleContent, cd:shortString)* {
  $x//cd:complexTypeWithSimpleContent
};

let $x := validate strict { / }
return (count(local:f($x)/@value))
