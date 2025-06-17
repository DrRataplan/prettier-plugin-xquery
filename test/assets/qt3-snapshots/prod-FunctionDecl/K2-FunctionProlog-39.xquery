declare variable $A := (<A>{ local:functionA() }</A>);

declare function local:functionA () as element() {
  <input>testing ...</input>
};

declare function local:functionB () as xs:string {
  xs:string($A)
};

local:functionB()
