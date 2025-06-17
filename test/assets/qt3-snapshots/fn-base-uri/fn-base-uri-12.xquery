declare base-uri "http://example.org";

fn:string(fn:base-uri(document { <aDocument>some content</aDocument> }))
