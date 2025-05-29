declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

import schema  "http://www.w3.org/XQueryTestOrderBy";

validate lax {
  if (fn:false()) then
    <Failed>This test failed</Failed>
  else
    <Strings><orderData>A String</orderData></Strings>
  }
