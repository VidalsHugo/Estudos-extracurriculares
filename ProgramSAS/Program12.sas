data newhomes;
infile '/home/u63599030/newhomes (2).txt';
input type$ price tax;
run;

/* Mantendo apenas Type e price */
data reducedhomes;
set newhomes;
keep type price;
run;

proc print data=reducedhomes;
run;

/* Mostrando apenas Tax */
data reducedhomes;
set newhomes;
drop type price;
run;

proc print data=reducedhomes;
run;