declare namespace java = "http://example.com";

declare %java:variable("java.lang.Integer.MAX_VALUE") variable $max := 0;

declare %java:method("java.lang.Math.sin") function local:sin ($arg) {
  0
};

local:sin($max)
