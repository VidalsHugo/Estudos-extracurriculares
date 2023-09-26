data houseprice;
input type$ price tax;
cards;
Single 300000 0.20
Single 250000 0.25
Duplex 175000 0.15
;
run;

proc print data=houseprice;
run;

/* Organizando de forma decrescente por Taxa */
proc sort data=houseprice out=houseprice2;
by descending tax;
run;

proc print data=houseprice2;
run;