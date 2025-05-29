declare default function namespace "http://example.org";

declare function foo2 ($i as xs:string) as xs:string {
  foo($i)
};

declare function foo ($i as xs:string) as xs:string {
  $i
};

foo2("abc")
