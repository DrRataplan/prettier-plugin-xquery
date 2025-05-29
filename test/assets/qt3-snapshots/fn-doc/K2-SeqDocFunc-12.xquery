declare variable $fileToOpen := <Variable
  context="_1"
  file="f0"
  id="_7"
  line="17"
  location="f0:17"
  name="constComplex2"
  type="_11c"
  >%GG</Variable>;

empty(
  $fileToOpen//*[let $i := @type
  return doc($fileToOpen)//*[$i]]
)
