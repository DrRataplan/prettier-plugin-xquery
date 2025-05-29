import schema namespace s =  "http://www.w3.org/XQueryTest/unionListDefined";

declare function local:f ($a as s:dateOrDateTime) as xs:string {
  $a cast as xs:string
};

local:f(xs:date("2001-01-01"))
