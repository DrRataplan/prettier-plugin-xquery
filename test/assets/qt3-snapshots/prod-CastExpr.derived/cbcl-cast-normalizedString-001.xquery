for $string in ("&#xD; foo &#x9; bar &#xA;" cast as xs:normalizedString)
return not(
    contains($string, "&#x9;") or
      contains($string, "&#xA;") or
      contains($string, "&#xD;") or
      string-length($string) ne 13
  )
