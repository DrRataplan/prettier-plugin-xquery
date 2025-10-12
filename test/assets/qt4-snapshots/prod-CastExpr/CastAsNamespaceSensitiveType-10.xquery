import schema namespace ntn =  "http://www.w3.org/XQueryTest/Cast/Notation" at  "notation.xsd";

declare function local:is-jpg ($q as ntn:qnames) as xs:boolean {
  $q eq ntn:qnames("ntn:jpg")
};

local:is-jpg(
  validate {
    <ntn:qname
      xmlns:ntn="http://www.w3.org/XQueryTest/Cast/Notation"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.w3.org/XQueryTest/Cast/Notation CastExpr/notation.xsd"
    >ntn:jpg</ntn:qname>
    }
)
