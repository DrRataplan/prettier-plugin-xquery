let $q := function ($prefix as xs:string, $local as xs:string) as xs:QName {
    <a>{
      $prefix
    }:{
      $local
    }</a>
  }
return $q("fn", "abs")
