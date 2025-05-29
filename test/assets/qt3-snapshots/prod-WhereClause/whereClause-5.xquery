let $var := 100
where typeswitch ($var)
  case $i as xs:string return
    fn:false()
  case $i as xs:integer return
    fn:true()

  default return
    fn:false()
return $var
