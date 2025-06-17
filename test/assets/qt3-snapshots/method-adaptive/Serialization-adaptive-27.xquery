declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "adaptive";

[
  fn:exists#1,
  1,
  <element>content</element>,
  (),
  function ($a) { $a },
  map {"infinity": xs:double("INF")},
  "json-string"
]
