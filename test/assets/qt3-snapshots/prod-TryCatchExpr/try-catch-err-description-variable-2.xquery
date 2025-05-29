try {
  1 div 0
} catch * {
  if (($err:description)) then
    $err:description instance of xs:string
  else
    fn:true()
}
