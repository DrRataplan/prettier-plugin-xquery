declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "adaptive";
declare option output:item-separator "~";

map {"a": ('quotes (")', "apos (')")}
