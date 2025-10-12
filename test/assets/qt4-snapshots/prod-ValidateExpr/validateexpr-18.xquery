declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

import schema  "http://www.w3.org/XQueryTestOrderBy";

validate lax {
  if (every $x in (1, 2, 3) satisfies $x < 5) then
    <Strings><orderData>A String</orderData></Strings>
  else
    <Failed>This test failed</Failed>
  }
