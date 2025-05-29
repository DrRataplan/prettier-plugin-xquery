declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

import schema  "http://www.w3.org/XQueryTestOrderBy";

let $var := validate strict { exactly-one(/DataValues/Strings) }
return fn:count($var/parent::node())
