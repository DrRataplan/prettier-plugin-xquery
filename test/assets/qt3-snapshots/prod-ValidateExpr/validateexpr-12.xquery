declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

import schema  "http://www.w3.org/XQueryTestOrderBy";

let $var :=
  validate strict { <Strings><orderData>A String</orderData></Strings> }
return fn:count($var/parent::node())
