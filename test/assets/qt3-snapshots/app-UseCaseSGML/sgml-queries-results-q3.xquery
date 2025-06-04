<result> {
    for $c in //chapter
    where empty($c/intro)
    return $c/section/intro/para
  } </result>
