let $string := ("&#xD;&#xA;&#x9; foobar &#xA;&#xD;&#x9;" cast as xs:NMTOKEN)
return not(
  contains($string, "&#x9;") or
    contains($string, "&#xA;") or
    contains($string, "&#xD;") or
    string-length($string) ne 6
)
