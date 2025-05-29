declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

import schema  "http://www.w3.org/XQueryTestOrderBy";

validate strict {
  if (fn:true()) then
    <Strings><orderData>A String</orderData></Strings>
  else
    <Failed>This test failed</Failed>
  }
