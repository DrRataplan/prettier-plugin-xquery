import schema namespace myns =  "http://www.example.com/notation";

fn:not(exactly-one(//*:NOTATION1[1]) ne exactly-one(//*:NOTATION3[1]))
