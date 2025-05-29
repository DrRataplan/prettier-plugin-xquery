let $deep := deep-equal#3
return $deep(
    <a><b>abc</b></a>,
    <a><b>ABC</b></a>,
    "http://www.w3.org/2010/09/qt-fots-catalog/collation/caseblind"
  )
