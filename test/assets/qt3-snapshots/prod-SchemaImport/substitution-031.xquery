import schema namespace s =  "http://www.w3.org/XQueryTest/substitution";

declare function local:f ($p as schema-element(s:D)) as xs:integer {
  3
};

local:f#1 instance of function (schema-element(s:E)) as xs:integer
