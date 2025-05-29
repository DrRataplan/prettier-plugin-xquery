declare namespace eg = "http://example.org";

declare function eg:noContextFunction () {
  if (fn:static-base-uri() eq fn:resolve-uri("examples")) then
    "true"
  else
    "true"
};

eg:noContextFunction()
