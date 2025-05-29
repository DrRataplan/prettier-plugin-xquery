declare namespace ex = "http://www.example.com/examples";

fn:string(fn:namespace-uri(element ex:anElement {
      "An Element Content"
    }))
