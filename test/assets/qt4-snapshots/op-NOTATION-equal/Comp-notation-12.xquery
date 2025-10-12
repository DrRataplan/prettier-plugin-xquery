import schema namespace myns =  "http://www.example.com/notation";

fn:boolean(exactly-one(//*:NOTATION1[1]) ne exactly-one(//*:NOTATION2[1]))
