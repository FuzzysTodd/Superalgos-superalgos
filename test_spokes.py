from simulator.spokes import earmark_tax

def test_tax_earmarking():
    s = {"vault":{"USDC":0}, "spokes":{}}
    earmark_tax(s, "USDC", 1000, 25)
    assert s["spokes"]["TaxVault"]["USDC"] == 250
    assert s["vault"]["USDC"] == 750
