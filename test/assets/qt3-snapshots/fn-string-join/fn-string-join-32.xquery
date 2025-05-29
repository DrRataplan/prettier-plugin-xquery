let $x := <a xmlns="http://sj31/"><b/><c/><d/></a>
return fn:string-join($x//*/node-name(), "-")
