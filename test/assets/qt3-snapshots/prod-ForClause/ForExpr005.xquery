for $f in
  /MyComputer//File[@creation_date =
    "08/06/00"]/SecurityObject/Denies/Deny[security/right]
return $f/../../@name/string()
