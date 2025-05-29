declare variable $local:myName := 1;

declare function local:myName () as xs:integer {
  1
};

$local:myName eq local:myName()
