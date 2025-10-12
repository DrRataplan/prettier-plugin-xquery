declare base-uri "http://www.example.com";

fn:concat(fn:string(fn:static-base-uri()), "another string")
