declare namespace opts = "http://www.w3.org/2012/xquery";

declare %opts:x function local:foo () {
  "bar"
};

local:foo()
