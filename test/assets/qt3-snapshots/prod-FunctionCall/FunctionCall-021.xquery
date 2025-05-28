declare function local:q (
  $prefix as xs:string,
  $local as xs:string
) as xs:QName {
  <a>{
      $prefix
    }:{
      $local
    }</a>
};

let $curried := local:q("fn", ?)
return $curried("abs")
