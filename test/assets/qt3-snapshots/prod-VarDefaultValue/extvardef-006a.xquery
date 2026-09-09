declare variable $var as xs:integer := 17;

declare variable $ext as xs:integer external := $var;

<out>{ $ext }</out>
