import schema namespace myns =  "http://www.example.com/notation";

exactly-one(//*:NOTATION1[1]) ne exactly-one(//*:NOTATION3[1])
