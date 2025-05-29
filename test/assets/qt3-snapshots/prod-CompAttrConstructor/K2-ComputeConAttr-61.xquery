let $x := (attribute a {
      "a"
    }, element b {
      "b"
    }, attribute c {
      "c"
    })
return <foo> {
      $x
    } </foo>
