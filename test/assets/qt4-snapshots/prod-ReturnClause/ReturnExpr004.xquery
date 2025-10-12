for $f in /MyComputer//File
where $f/@creation_date = "08/06/00"
return $f/SecurityObject/Denies/Deny[security/right]/user/string()
