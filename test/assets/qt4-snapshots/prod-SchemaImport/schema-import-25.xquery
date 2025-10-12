import schema namespace atomic =  "http://www.w3.org/XQueryTest";

((//atomic:float[1]) + (//atomic:float[1])) eq xs:float(2.53486466E15)
