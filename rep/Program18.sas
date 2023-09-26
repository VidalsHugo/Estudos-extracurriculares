data inputfunc;
input sale $9.;
/* Funcao input: transforma characters para numero */
numsale=input(sale,comma9.);
datalines;
6,515,353
;
run;

proc print data=inputfunc;
run;

data inputfunc2;
input sale;
/* Funcao put: transforma numeros para characters */
charsale=put(sale,7.);
datalines;
6515353
;
run;

proc print data=inputfunc2;
run;