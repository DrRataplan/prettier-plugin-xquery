declare namespace p1 = "http://example.org";

fn:string(fn:local-name(element p1:anElement {
      "Some content"
    }))
