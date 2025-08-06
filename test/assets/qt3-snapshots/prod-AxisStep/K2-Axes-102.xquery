for $a in (/)
return for $b in $a/child::site
  return for $c in $b/child::people
    return for $d in $c/child::person
      return if (
        (
          some
            $id in
            $d/attribute::id satisfies
            typeswitch ($id)
              case $n as node() return
                $id = "person0"

              default return
                ()
        )
      ) then
        $d/child::name
      else (
      ),
for $b in /site/people/person
where $b/@id = "person0"
return $b/name,
/site/people/person[@id eq "person0"]/name
