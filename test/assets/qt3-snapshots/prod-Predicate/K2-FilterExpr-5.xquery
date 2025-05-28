let $d := document {
    <root><child type="" /></root>
  }
return document {
    $d//*[let $i := @type
    return $d//*[$i]],
    (1, 2, 3)[true()],
    (4, 5, 6)[false()]
  }
