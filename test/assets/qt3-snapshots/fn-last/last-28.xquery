let $in := document {
    <A><B/></A>
  }
return $in//*[((., .)/parent::*/last()!(. > 1)) = true()]
