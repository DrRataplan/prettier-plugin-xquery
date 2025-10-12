for $h in (/works)
return $h/employee[@name = "Jane Doe 13" or @type = "FT"]/@name
