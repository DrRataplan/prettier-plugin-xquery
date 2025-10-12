let $employees := parse-xml(
  "<emps>
	    <emp id='1'><name><last>Cawcutt</last></name></emp>
	    <emp id='2'><name><first>Hans</first><last>Gro&#xeb;r</last></name></emp>
	    <emp id='3'><name><first>Domingo</first><last>De Silveira</last></name></emp>
	    <emp id='4'><name><first>Keith</first><last>O'Brien</last></name></emp>
	    <emp id='5'><name><first>Susan</first><last>Cawcutt</last></name></emp>
	    <emp id='6'><name><first>Martin</first><last>Cawcutt</last></name></emp>
	    <emp id='7'><name><first>Martin</first><first>James</first><last>Cawcutt</last></name></emp>
	  </emps>"
)
return fn:sort(
    $employees//emp,
    default-collation(),
    function ($emp) { $emp/name/last, $emp/name/first }
  )!number(@id)
