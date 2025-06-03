import schema namespace mc =  "http://www.w3.org/XQueryTest/mixedcontent";

fn:data(
  validate {
    <mc:weather>
      <mc:temperature>30</mc:temperature>
      <mc:precipitation>10</mc:precipitation>
    </mc:weather>
    }
)
