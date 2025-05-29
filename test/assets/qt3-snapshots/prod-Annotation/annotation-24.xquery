declare namespace math = "http://www.w3.org/2005/xpath-functions/math";

declare %math:x function local:foo () {
  "bar"
};

local:foo()
