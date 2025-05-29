declare function local:myName ($var as xs:integer) as xs:integer {
  $var
};

declare function local:myName () as xs:integer {
  1
};

(local:myName(4) - 3) eq local:myName()
