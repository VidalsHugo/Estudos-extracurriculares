data studentscores;
input gender score;
cards;
1 48
1 45
2 50
2 42
1 41
2 51
1 52
1 43
2 52
;
run;

proc sort data=studentscores;
by gender;
run;

data studentscore1;
set studentscores;
count + 1;
by gender;
if first.gender then count=1;
run;
