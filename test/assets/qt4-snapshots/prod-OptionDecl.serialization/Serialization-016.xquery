declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

(: the charset parameter of the media type MUST NOT be specified explicitly in the value of the media-type parameter. :)
declare option output:media-type "text/html; charset=ISO-8859-4";

<result>ok</result>
