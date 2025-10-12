count(
  //employee[if (salary castable as xs:integer) then
    xs:integer(salary) gt 65000
  else
    false()]
)
