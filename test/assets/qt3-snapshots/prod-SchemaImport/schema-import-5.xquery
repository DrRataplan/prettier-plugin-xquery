import schema namespace atomic =  "http://www.w3.org/XQueryTest";

(fn:avg((//atomic:float, //atomic:float))) eq xs:float(1.26743233E15)
