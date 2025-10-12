declare namespace eg = "http://example.com";

declare %eg:sequential function local:foo () {
  "bar"
};

local:foo()
