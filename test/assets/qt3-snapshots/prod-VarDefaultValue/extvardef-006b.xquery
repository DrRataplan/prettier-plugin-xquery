declare variable $var as xs:integer := 17;

declare variable $ext as xs:integer external := <a>{ $var }</a>;

<out>{ $ext }</out>
