import schema namespace atomic =  "http://www.w3.org/XQueryTest";

((/atomic:root/atomic:double) cast as xs:string) eq
  xs:string("A String Function")
