import schema namespace ntn =  "http://www.w3.org/XQueryTest/Cast/Notation" at  "notation.xsd";

declare function local:is-jpg ($q as xs:NOTATION) as xs:boolean {
  $q eq ntn:pictures("ntn:jpg")
};

local:is-jpg(
  validate {
    <ntn:notation
      xmlns:ntn="http://www.w3.org/XQueryTest/Cast/Notation"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.w3.org/XQueryTest/Cast/Notation CastExpr/notation.xsd"
      >ntn:jpg</ntn:notation>
    }
)
