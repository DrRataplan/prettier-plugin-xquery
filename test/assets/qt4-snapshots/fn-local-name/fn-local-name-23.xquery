declare namespace eg = "http://example.org";

declare function eg:noContextFunction () {
  fn:local-name(.)
};

eg:noContextFunction()
