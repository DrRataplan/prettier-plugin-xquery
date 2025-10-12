declare base-uri "abc";

declare function local:isAbsolute ($uri as xs:string?) as xs:boolean {
  fn:matches($uri, "[a-zA-Z0-9\-.]*:/")
};

local:isAbsolute(fn:static-base-uri())
