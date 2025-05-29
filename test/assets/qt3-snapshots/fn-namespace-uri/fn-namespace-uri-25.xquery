declare default element namespace "http://www.example.com/examples";

declare namespace ex = "http://www.example.com/exampleswithPrefix";

fn:string(fn:namespace-uri(element anElement {
      "An Element Content"
    }))
