data employee;
infile '/home/u63599030/Current_Employee_Names__Salaries__and_Position_Titles (2).csv' DSD DLM=',' MISSOVER FIRSTOBS=2;
length Name $30 Job_Titles $60 Dep $25 FoPt $1 SoH $6 TH $3 AS $12 HR $7;
input Name $ Job_Titles $ Dep $ FoPt $ SoH $ TH $ AS $ HR $;

AS = input(AS, dollar11.);
HR = input(HR, dollar9.);
run;
