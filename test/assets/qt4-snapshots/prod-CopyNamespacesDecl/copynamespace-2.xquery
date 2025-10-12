declare default element namespace "http://example.org/names";

declare copy-namespaces preserve ,  no-inherit;

let $new := <newElement xmlns="http://www.example.com/mynamespace">
  { element original { "Original Content" } }
</newElement>
return $new//*
