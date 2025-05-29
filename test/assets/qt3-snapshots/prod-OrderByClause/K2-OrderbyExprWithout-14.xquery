declare variable $e := <e> <a>3</a> <a>2</a> <a>1</a> </e>;

<result> {
  avg(
    for $i in $e/a
    order by $i
    return $i
  )
} </result>
