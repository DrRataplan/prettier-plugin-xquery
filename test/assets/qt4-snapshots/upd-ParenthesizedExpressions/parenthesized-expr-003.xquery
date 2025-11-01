declare variable $input-context external;

for $var in
  (
    for $var in $input-context/works[1]/employee[1]/hours[1]
    return ()
  )
return $var
