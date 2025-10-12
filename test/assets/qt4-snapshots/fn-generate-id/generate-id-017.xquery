import module namespace copy = "http://www.w3.org/QT3/copy";

let $att := (//@*)[1]
return generate-id(copy:copy($att)) eq generate-id($att)
