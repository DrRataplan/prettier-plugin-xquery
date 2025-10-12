declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

import schema  "http://www.w3.org/XQueryTestOrderBy";

validate lax {
  typeswitch ("A String")
    case $i as xs:decimal return
      <wrap>test failed</wrap>
    case $i as xs:string return
      <Strings><orderData>A String</orderData></Strings>

    default return
      <Failed>This test failed</Failed>
  }
