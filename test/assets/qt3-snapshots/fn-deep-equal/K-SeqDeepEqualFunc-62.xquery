let $deep :=
  deep-equal(
    ?,
    ?,
    "http://www.w3.org/2010/09/qt-fots-catalog/collation/caseblind"
  )
return $deep(<a><b>abc</b></a>, <a><b>ABC</b></a>)
