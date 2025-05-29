declare namespace a = "http://example.com/1";
declare namespace b = "http://example.com/2";

let $e :=
  <e
    a:n1="content" b:n1="content"
    > 
      				<a:n1 /> 
      				<b:n1 /> 
      				<?n1 ?> 
      				<n1 /> 
      			  </e>
return $e/a:*
