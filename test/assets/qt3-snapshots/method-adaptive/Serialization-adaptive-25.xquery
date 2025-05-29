declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "adaptive";

map {"not-a-number": xs:double("NaN")}
