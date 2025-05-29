import schema namespace atomic =  "http://www.w3.org/XQueryTest";

(fn:abs(//atomic:float[1])) eq xs:float(1.26743233E15)
