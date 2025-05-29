declare namespace foo = "http://www.example.org";

declare function foo:something ($pos as xs:integer) {
  if ($pos eq 1) then
    1
  else
    <a />
};

let $x := <a><b><c/></b><b><c/></b></a>
return $x/b/(foo:something(position()))/a
