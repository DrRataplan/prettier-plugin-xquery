declare namespace eg = "http://example.org";

declare function eg:noContextFunction () {
  fn:base-uri()
};

declare variable $input-context1 external;

eg:noContextFunction()
