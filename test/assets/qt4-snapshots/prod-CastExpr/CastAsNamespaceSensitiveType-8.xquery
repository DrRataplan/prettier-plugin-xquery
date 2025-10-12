import schema namespace ntn =  "http://www.w3.org/XQueryTest/Cast/Notation" at  "notation.xsd";

declare function local:is-jpg ($q as ntn:pictures) as xs:boolean {
  $q eq ntn:pictures("ntn:jpg")
};

local:is-jpg(xs:untypedAtomic("ntn:picture"))
