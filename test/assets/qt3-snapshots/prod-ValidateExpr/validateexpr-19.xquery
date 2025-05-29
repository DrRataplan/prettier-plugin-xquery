declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

import schema  "http://www.w3.org/XQueryTestOrderBy";

validate lax {
  if (some $x in (1, 2, 3) satisfies $x = 2) then
    <Strings><orderData>A String</orderData></Strings>
  else
    <Failed>This test failed</Failed>
  }
