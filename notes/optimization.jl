#=
    JuMP high-level interface that allows us to use a commom syntax 
    to access many different optimization solvers like GLPK (Linear solver) 
    and Ipopt (Nonlinear solver).
=#
  
#=
    The Plots is similar to the JuMP, it is a package that serves 
    as plotting frontend that can access several different plotting 
    packages, like GR and PyPlot,  to use as backends.
=#

#=
@article{DunningHuchetteLubin2017,
author = {Iain Dunning
and Joey Huchette and Miles Lubin},
title = {JuMP: A ModeLing Language for Mathematical Optimization},
journal = {SIAM Review},
voLume = ｛59｝，
number=128，
pages = ｛295-320｝，
year = (2017),
dor = {10.1137/15M1020575},
=#

# import Pkg; Pkg.add("JuMP"), Pkg.add("GLPK") ,Pkg.add("Ipopt"), Pkg.add("Plots");   
using JuMP, GLPK, Ipopt, Plots

model = Model(GLPK. Optimizer)
@variable(model, x >= 0)
@variable(model, y >= 0)
@constraint(model, 6x + 8y >= 100)
@constraint(model, 7x + 12y >= 120)
@objective(model, Min, 12x + 20y)
optimize!(model)
@show value(x) ;
@show value(y) ;
@show objective_value(model);