declare function local:base64Binary-value (
  $arg as xs:boolean
) as xs:base64Binary {
  if ($arg) then
    xs:base64Binary("aGVsbG8=")
  else
    xs:base64Binary("Z29vZGJ5ZQ==")
};

not(local:base64Binary-value(true()) eq local:base64Binary-value(false()))
