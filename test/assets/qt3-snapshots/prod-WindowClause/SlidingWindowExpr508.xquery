for sliding window $w as xs:integer+ in (1, 2, "london", 3, 4.1, "paris")
  start $start when $start instance of xs:integer
  only end next $beyond when $beyond instance of xs:string
return string-join($w!string(), " ")
