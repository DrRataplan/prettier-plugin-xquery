let $data := (/employees)
return filter($data/emp, function ($x as element(emp)) {
      xs:int($x/@salary) lt 300
    })
