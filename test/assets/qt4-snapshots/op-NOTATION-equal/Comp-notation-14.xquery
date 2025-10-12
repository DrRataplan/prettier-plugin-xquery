import schema namespace myns =  "http://www.example.com/notation";

(exactly-one(//*:NOTATION1[1]) ne exactly-one(//*:NOTATION2[1])) and fn:true()
