parse-csv(
  "a,b,c,d,e,f|p,q,r,s,t,u",
  map {"row-delimiter": "|", "select-columns": (4, 3, 2)}
)?rows
  => array:join()
