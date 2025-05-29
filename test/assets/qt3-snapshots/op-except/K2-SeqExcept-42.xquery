<r> {
    let $i := <e> <a /> <b /> <c /> </e>/a, $t := $i/following-sibling::b
    return (($i except ($i, $i)), (($t, $t) except $t))
  } </r>
