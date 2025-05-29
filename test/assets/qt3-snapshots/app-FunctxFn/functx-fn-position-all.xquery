let $in-xml := <in-xml> <a>1</a> <c>2</c> <a>3</a> <a>4</a> <a>5</a> </in-xml>
return (
    $in-xml/*[position() > 2],
    $in-xml/a[position() > 2],
    $in-xml/a[position() = 3]
  )
