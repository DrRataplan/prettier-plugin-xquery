import schema namespace constraints =  "http://www.w3.org/constraints";

declare variable $test := element test {
  <constraints:a> <b id="x" /> <b id="y" /> <b id="y" /> </constraints:a>
};

validate { $test/*:a }
