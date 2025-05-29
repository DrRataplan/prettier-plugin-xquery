declare function local:hexBinary-value ($arg as xs:boolean) as xs:hexBinary {
  if ($arg) then
    xs:hexBinary("68656c6c6f")
  else
    xs:hexBinary("676f6f64627965")
};

not(local:hexBinary-value(true()) le local:hexBinary-value(false()))
