declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

import schema  "http://www.w3.org/XQueryTestOrderBy";

validate strict { <Strings><orderData>one string </orderData></Strings> } is
  validate strict { <Strings><orderData>two string</orderData></Strings> }
