declare default element namespace "http://www.example.com/examples";

declare namespace ex = "http://www.example.com/exampleswithPrefix";

fn:string(fn:namespace-uri(<ex:anElement>An Element Content</ex:anElement>))
