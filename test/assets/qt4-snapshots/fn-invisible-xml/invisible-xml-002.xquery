let $grammar :=
"
           date = year, -'-', month, -'-', day .
           year = d, d, d, d .
           month = '0', d | '1', ['0'|'1'|'2'] .
           day = ['0'|'1'|'2'], d | '3', ['0'|'1'] .
           -d = ['0'-'9'] .
         "
let $parse := invisible-xml($grammar)
return $parse("2023-10-31")
