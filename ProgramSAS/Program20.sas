data mpi_national;

infile '/home/u63599030/MPI_national (1).csv' DSD DLM=',' MISSOVER FIRSTOBS=2;
length Country $50 ISO $3 MPIU 5 HRU 5 IDU 5 MPIR 5 HRR 5 IDR 5;
input ISO $ Country $ MPIU HRU IDU MPIR HRR IDR;
MPI_diff = MPIU - MPIR;

if ISO = 'NIG' then ISO = 'NGA';

separator = ',';
ISO_Country = catx(separator, ISO, Country);

Country=ISO_Country;
drop separator;
run;

proc print data=mpi_national;
where IDU >=40.0;
run;
