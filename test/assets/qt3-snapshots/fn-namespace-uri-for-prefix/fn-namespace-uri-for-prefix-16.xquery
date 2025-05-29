declare default element namespace "http://www.example.com/defaultnamespace";

fn:count(fn:namespace-uri-for-prefix("p1", <anElement>some context</anElement>))
