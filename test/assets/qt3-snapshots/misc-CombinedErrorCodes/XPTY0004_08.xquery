declare namespace foo = "http://www.example.org";

declare function foo:content ($type as xs:integer) {
  if ($type eq 1) then
    attribute {"foo"} {}
  else
    <foo />
};

document {
  foo:content(1)
}
