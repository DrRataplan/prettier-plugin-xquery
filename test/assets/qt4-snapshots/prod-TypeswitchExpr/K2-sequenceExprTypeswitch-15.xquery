<e />/(
  typeswitch (self::node())
    case $i as xs:integer return
      $i

    default return
      $v
)
