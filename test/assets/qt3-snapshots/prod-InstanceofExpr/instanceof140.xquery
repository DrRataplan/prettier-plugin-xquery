import schema namespace s =  "http://www.w3.org/XQueryTest/unionListDefined";

declare function local:f ($a as xs:integer) as xs:boolean {
  true()
};

local:f#1 instance of function (s:integer-union) as xs:boolean
