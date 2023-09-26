data macrotest;
input type $ price tax;

Datalines;
Single 300000 0.20
Single 250000 0.25
Duplex 175000 0.15
;
run;

%MACRO function(prog, vars);
proc &prog;
var &vars;
run;
%MEND;

%FUNCTION(means, price);
