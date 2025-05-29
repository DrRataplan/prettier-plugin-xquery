import schema namespace atomic =  "http://www.w3.org/XQueryTest";

((/atomic:root/atomic:float) cast as xs:float) eq xs:float(1267.43233E12)
