declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

import schema  "http://www.w3.org/XQueryTestOrderBy";

xsd-validator()(/DataValues/Strings union
  /DataValues/PositiveNumbers)?typed-node
