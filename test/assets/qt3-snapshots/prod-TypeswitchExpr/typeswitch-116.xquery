declare namespace lu = "http://www.w3.org/XQueryTest/ListUnionTypes";

import schema  "http://www.w3.org/XQueryTest/ListUnionTypes";

(
  typeswitch (current-date())
    case $i as lu:unionOfUnionType return
      true()

    default return
      false()
) and
  (
    typeswitch (23)
      case $i as lu:unionOfUnionType return
        true()

      default return
        false()
  )
