declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

import schema  "http://www.w3.org/XQueryTestOrderBy";

let $var := validate strict { element DataValues1 {
      element Strings {
        "data"
      }
    } }
return $var
