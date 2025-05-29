let $c := collection("http://www.w3.org/2010/09/qt-fots-catalog/collection1")
return $c |
    (
      for $doc in $c
      return doc(document-uri($doc))
    )
