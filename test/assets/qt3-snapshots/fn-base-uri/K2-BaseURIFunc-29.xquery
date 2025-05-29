let $i :=
  fn:base-uri(
    <anElement xml:base="http:\\example.com\\examples">Element content</anElement>
  )
return $i eq "http:\\example.com\\examples" or empty($i)
