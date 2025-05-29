declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

import schema  "http://www.w3.org/XQueryTestOrderBy";

let $var := <Strings><orderData>one string</orderData></Strings>
return validate strict { $var }
