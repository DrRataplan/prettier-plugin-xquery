xquery version "1.0";

declare default function namespace "http://example.org/math-functions";

declare boundary-space preserve;
declare default collation "xspanish";
declare base-uri "http://www.base-uri.com/";
declare construction strip;
declare ordering unordered;
declare default order empty greatest;

declare namespace foo = "http://foo.org";
declare namespace bar = "http://bar.org";

import schema default element namespace  "http://comment";

declare variable $x := 7;

declare function local:sumOf1toN ($i) as xs:integer {
  if ($i = 1) then
    $i
  else
    $i + local:sumOf1toN($i - 1)
};

declare option foo:strip-comments "true";

local:sumOf1toN(5)
