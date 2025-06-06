declare construction preserve;
declare copy-namespaces no-preserve ,  inherit;

declare namespace ns = "http://www.xqsharp.com/test/namespace-sensitive";

<e>{
    .//ns:sensitive
  }</e>
