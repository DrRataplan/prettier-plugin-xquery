declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

import schema  "http://www.w3.org/XQueryTestOrderBy";

let $var := validate lax { exactly-one(/DataValues/Strings) }
return fn:count($var/parent::node())
