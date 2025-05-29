let $in-xml :=
  <root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> <child>12</child> <child xsi:nil="true"></child> <child></child> <child/> <child xsi:nil="false"></child> </root>
return (nilled($in-xml//child[3]))
