let $in-xml := <in-xml> <a></a> <b/> <c>xyz</c> </in-xml>
return (
    empty(("a", "b", "c")),
    empty(()),
    empty(0),
    empty($in-xml/a),
    empty($in-xml/b),
    empty($in-xml/c),
    empty($in-xml/foo)
  )
