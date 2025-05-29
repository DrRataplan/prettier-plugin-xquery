import schema namespace atomic =  "http://www.w3.org/XQueryTest";

xs:float(((/atomic:root/atomic:float) cast as xs:double)) eq
  xs:float(1267.43233E12)
