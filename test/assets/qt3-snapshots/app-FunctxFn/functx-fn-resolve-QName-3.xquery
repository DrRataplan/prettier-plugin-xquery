declare namespace ord = "http://datypic.com/ord";
declare namespace dty = "http://datypic.com";
declare namespace dty2 = "http://datypic.com/ns2";

let $root :=
  <root> <order
      xmlns="http://datypic.com" xmlns:ord="http://datypic.com/ord"
      > <!-- ... --> </order> </root>
return (resolve-QName("ord:myName", $root/dty:order))
