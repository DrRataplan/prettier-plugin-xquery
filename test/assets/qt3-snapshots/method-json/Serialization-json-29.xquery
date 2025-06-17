declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "json";

array
  {
    text { "a" },
    processing-instruction {"a"} { "b" },
    comment { "a" },
    element {"a"} { "b" },
    document { element {"a"} { "b" } }
  }
