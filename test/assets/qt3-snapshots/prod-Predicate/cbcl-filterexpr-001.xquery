declare function local:nan () {
  xs:float("NaN")
};

(1 to 10)[not(position() < xs:float("NaN"))]
