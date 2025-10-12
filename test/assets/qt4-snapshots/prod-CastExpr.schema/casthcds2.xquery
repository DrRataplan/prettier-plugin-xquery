import schema namespace atomic =  "http://www.w3.org/XQueryTest";

((/atomic:root/atomic:integer) cast as xs:float) eq xs:float(12678967543233)
