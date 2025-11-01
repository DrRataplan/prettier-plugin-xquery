parse-csv(
  "a,b,c,d,e,f|p,q,r,s,t,u",
  map {"row-delimiter": "|", "select-columns": 2 to 4}
)?rows
  => array:join()
