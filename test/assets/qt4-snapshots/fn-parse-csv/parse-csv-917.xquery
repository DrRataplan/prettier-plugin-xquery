parse-csv(
  "a,b,c,d,e,f|p,q,r,s,t,u",
  map {"row-delimiter": "|", "select-columns": (4, 3, 1)}
)?get(2, 0)
