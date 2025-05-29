declare function local:QName-value ($arg as xs:boolean) as xs:QName {
  if ($arg) then
    QName("example.com/", "p:ncname")
  else
    QName("example.com/", "q:ncname")
};

not(local:QName-value(true()) ne local:QName-value(false()))
