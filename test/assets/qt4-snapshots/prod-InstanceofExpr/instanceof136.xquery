import schema namespace s =  "http://www.w3.org/XQueryTest/unionListDefined";

declare function local:f ($a as s:myUnionType1) as xs:boolean {
  true()
};

local:f#1 instance of function (s:unrestrictedDate) as xs:boolean
