for $function in (substring-before#2, substring-after#2)
return fn:replace("1234", ".(..)", $function)
