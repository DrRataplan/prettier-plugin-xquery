parse-csv(
  "a,b,c,d,e,f|p,q,r,s,t,u",
  map {"row-delimiter": "|", "select-columns": 1 to 3}
)?rows
  => array:join()
