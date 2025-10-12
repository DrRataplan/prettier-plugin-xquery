import schema namespace ntn =  "http://www.w3.org/XQueryTest/Cast/Notation" at  "notation.xsd";

declare function local:is-jpg ($q as ntn:qnames) as xs:boolean {
  $q eq ntn:qnames("ntn:jpg")
};

local:is-jpg(<tag>ntn:picture</tag>)
