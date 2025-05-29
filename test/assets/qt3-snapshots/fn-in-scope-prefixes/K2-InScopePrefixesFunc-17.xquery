declare namespace p = "http://example.com/";

count(in-scope-prefixes(<p:e />)), count(in-scope-prefixes(element p:e {
      ()
    }))
