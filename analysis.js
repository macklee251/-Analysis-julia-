### A Pluto.jl notebook ###
# v0.19.36

using Markdown
using InteractiveUtils

# ╔═╡ 6639b868-19ee-4fde-a652-703679942a36
begin
    import Pkg
    # activate a temporary environment
    Pkg.activate(mktempdir())
    Pkg.add([
        Pkg.PackageSpec(name="Makie", version="0.12.0"),
        Pkg.PackageSpec(name="GLMakie", version="0.1.25"),
        Pkg.PackageSpec(name="CairoMakie", version="0.3.12"),
		Pkg.PackageSpec(name="PlutoUI"),
		Pkg.PackageSpec(name="Plots"),
    ])
    using PlutoUI, VegaDatasets, DataVoyager, VegaLite, Makie, GLMakie, CairoMakie, 	Plots; plotly(size=(360,360))
end

# ╔═╡ f19e5619-9a7a-4d1f-b1ef-b5ae3fcff4da
md"""
## O termo analise se refere ao processo de pegar um tópico ou substância complexa e quebrá-lo em partes menores afim de obter uma melhor compreesão do mmesmo 
"""

# ╔═╡ 05a45b85-47e9-438e-93dc-223d19300d74
data = dataset("iris")

# ╔═╡ 9a85a78a-0fec-4751-b2e8-badba67317b3
v = Voyager(data)

# ╔═╡ fc184bc3-eab8-410f-9724-c1f8f9f3b698
begin
	p = v[]
	#save("iris_voyager.svg", p)
end

# ╔═╡ ec111b1f-698a-4a31-81a7-c2c5e7e27f7d
md"""
## The Supply curve 
"""

# ╔═╡ e250451e-403d-45f1-989e-7642ae773123
md"
$$Q(P) = 3P-6$$
"

# ╔═╡ ba9691ab-5a66-4691-9abd-2c19ee89779c
md"""
Onde Q é a quantidade e P é o preço
"""

# ╔═╡ 1597bf8b-f572-406c-8855-4b4d38cfc57c
Q₁(P) = 3P-6

# ╔═╡ 5a2505d9-0358-44e9-9074-8cfc24a98f9f
md"""
## Demand curve
"""

# ╔═╡ eb214ae7-750f-4065-a73e-6860b42eff83
md"
$$Q(P) = 32-2P$$
"

# ╔═╡ a241ebd3-8e54-44e5-a559-a2179f475bbd
Q₂(P) = 3P-6

# ╔═╡ 02085514-fc47-4525-a443-901b30f98774
md"""
 ### Makie instead of almost other plot packges was written specifically for julia, so it is super optimized to this language. It is not the easiest plotting package to learn, but it is a good one
"""

# ╔═╡ c3dd6392-446d-4e48-b5a1-a62d0e189f85
md"""
#### Changing the indepented variable to plot it
"""

# ╔═╡ 4f44c92f-74e5-41e7-b83a-82fbe411a9bc
P₁(Q) = 2 + Q/3

# ╔═╡ e5aed175-9426-4957-ba68-7f069ac34d30
P₂(Q) = 16 - Q/2

# ╔═╡ 4ec72d62-7414-41dd-a4dd-7b4ad2332f7a
scene, layout = layoutscene(resolution=(325, 325))


# ╔═╡ Cell order:
# ╟─f19e5619-9a7a-4d1f-b1ef-b5ae3fcff4da
# ╠═6639b868-19ee-4fde-a652-703679942a36
# ╠═05a45b85-47e9-438e-93dc-223d19300d74
# ╠═9a85a78a-0fec-4751-b2e8-badba67317b3
# ╠═fc184bc3-eab8-410f-9724-c1f8f9f3b698
# ╟─ec111b1f-698a-4a31-81a7-c2c5e7e27f7d
# ╟─e250451e-403d-45f1-989e-7642ae773123
# ╟─ba9691ab-5a66-4691-9abd-2c19ee89779c
# ╠═1597bf8b-f572-406c-8855-4b4d38cfc57c
# ╟─5a2505d9-0358-44e9-9074-8cfc24a98f9f
# ╟─eb214ae7-750f-4065-a73e-6860b42eff83
# ╠═a241ebd3-8e54-44e5-a559-a2179f475bbd
# ╟─02085514-fc47-4525-a443-901b30f98774
# ╟─c3dd6392-446d-4e48-b5a1-a62d0e189f85
# ╠═4f44c92f-74e5-41e7-b83a-82fbe411a9bc
# ╠═e5aed175-9426-4957-ba68-7f069ac34d30
# ╠═4ec72d62-7414-41dd-a4dd-7b4ad2332f7a
