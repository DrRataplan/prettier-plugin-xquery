declare namespace p = "http://example.com/";

document { <p:e xmlns="" />, count(in-scope-prefixes(<p:e xmlns="" />)) }
