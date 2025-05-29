declare namespace map = "http://www.w3.org/2005/xpath-functions/map";

declare %map:x function local:foo () {
  "bar"
};

local:foo()
