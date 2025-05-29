let $t := xs:dateTime("2014-10-14T11:31:12")
return let $u :=
    adjust-dateTime-to-timezone(
      $t,
      implicit-timezone() + xs:dayTimeDuration("PT1H")
    )
  return fn:deep-equal(map {$t: ()}, map {$u: ()})
