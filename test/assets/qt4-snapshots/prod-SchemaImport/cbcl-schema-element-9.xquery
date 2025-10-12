import schema namespace tc =  "http://www.w3.org/XQueryTest/testcases";

declare function local:f ($x as schema-element(tc:schema-element-head)) {
  local-name($x)
};

local:f(
  exactly-one(/tc:root/schema-element(tc:schema-element-group-nillable)[2])
)
