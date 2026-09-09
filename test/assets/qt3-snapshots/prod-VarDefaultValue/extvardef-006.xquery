declare variable $var as xs:integer := 17;

declare variable $ext as element(a) external := <a>{ $var }</a>;

<out>{ $ext }</out>
