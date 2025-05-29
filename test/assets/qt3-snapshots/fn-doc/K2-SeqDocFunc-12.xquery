declare
  variable $fileToOpen := <Variable id="_7" name="constComplex2" type="_11c" context="_1" location="f0:17" file="f0" line="17">%GG</Variable>;

empty(
  $fileToOpen//*[let $i := @type
  return doc($fileToOpen)//*[$i]]
)
