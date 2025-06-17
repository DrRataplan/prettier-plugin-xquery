let $numbers :=
  (
    <e>NaN</e>,
    <e />,
    <e />,
    <e>NaN</e>,
    <e>NaN</e>,
    <e>INF</e>,
    <e>NaN</e>,
    <e />,
    <e>3</e>,
    comment { "3" }
  )
return (
    for $i in $numbers
    order by xs:double($i/text()) empty least
    return xs:double($i/text()),
    "SEP",
    for $i in $numbers
    order by xs:double($i/text()) empty greatest
    return xs:double($i/text())
  )
