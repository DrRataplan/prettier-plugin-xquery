declare namespace lu = "http://www.w3.org/XQueryTest/ListUnionTypes";

import schema  "http://www.w3.org/XQueryTest/ListUnionTypes";

typeswitch (-23)
  case $i as lu:restrictedUnionType return
    true()

  default return
    false()
