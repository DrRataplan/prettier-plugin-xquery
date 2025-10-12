import schema namespace s =  "http://www.w3.org/XQueryTest/unionListDefined";

declare function local:f ($a as s:dateOrDateTime) as s:dateOrDateTime {
  xs:dayTimeDuration("P1D") + $a
};

local:f(xs:dateTime("2001-01-01T13:00:00Z"))
