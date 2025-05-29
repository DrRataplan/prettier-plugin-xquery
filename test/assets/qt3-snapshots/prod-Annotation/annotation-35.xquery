declare namespace array = "http://www.w3.org/2005/xpath-functions/array";

declare %array:x function local:foo () {
  "bar"
};

local:foo()
