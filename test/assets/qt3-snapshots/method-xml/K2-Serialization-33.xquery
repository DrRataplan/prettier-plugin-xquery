declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "xml";
declare option output:cdata-section-elements "b";

<chapter><para><b>bold <!--comment--> as brass</b><i>italic</i></para></chapter>
