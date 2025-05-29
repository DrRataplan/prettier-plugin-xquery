declare base-uri "http://www.example.com";

fn:string-join((fn:string(fn:static-base-uri()), "another string"), "")
