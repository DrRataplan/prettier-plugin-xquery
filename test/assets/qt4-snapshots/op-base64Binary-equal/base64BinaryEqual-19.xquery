let $b64 := xs:base64Binary#1,
  $hex := xs:hexBinary#1,
  $flag := year-from-date(current-date()) > 1000
return (
    if ($flag) then
      $b64
    else
      $hex
  )(xs:hexBinary("03")) eq
    (
      if ($flag) then
        $hex
      else
        $b64
    )("03")
