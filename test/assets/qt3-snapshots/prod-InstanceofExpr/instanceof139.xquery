import schema namespace s =  "http://www.w3.org/XQueryTest/unionListDefined";

declare function local:f ($a as s:approximateDate) as xs:boolean {
  true()
};

local:f#1 instance of function (s:dateOrDateTime) as xs:boolean
