declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "html";

(: control characters not allowed in html :)
<result>ok&#x7f;</result>
