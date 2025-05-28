declare copy-namespaces preserve ,  inherit;
declare construction preserve;

declare namespace atomic = "http://www.w3.org/XQueryTest";

<new>{
    (//atomic:QName/@atomic:attr)[1]
  }</new>
