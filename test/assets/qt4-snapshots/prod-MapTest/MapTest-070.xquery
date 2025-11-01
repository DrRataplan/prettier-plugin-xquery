import schema namespace u =  "http://www.w3.org/XQueryTest/unionListDefined";

map {current-date(): "z"} instance of map(u:impureUnionType, xs:string)
