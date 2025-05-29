declare namespace eg = "http://example.org";

declare function eg:noContextFunction () {
  fn:base-uri()
};

eg:noContextFunction()
