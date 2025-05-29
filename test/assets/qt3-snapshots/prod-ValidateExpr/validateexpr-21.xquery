declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

import schema  "http://www.w3.org/XQueryTestOrderBy";

validate lax {
  let $var := <Strings><orderData>A String</orderData></Strings>
  return $var
  }
