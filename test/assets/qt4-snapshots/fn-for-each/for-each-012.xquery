for-each(
  (<a>1</a>, <b>22</b>, <c>33</c>),
  function ($a as xs:string) as xs:integer { string-length($a) }
)
