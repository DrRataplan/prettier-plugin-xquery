avg(
  for sliding window $w in (1, 2, "london", 3, 4, "paris")
    start $start when $start instance of xs:integer
    only end next $beyond when $beyond instance of xs:string
  return count($w)
)
