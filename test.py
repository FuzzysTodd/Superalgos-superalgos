import time
from simulator.safe_core import propose_tx, sign_tx, execute_tx

def test_multisig_timelock_enforced():
    s = {"vault": {"ETH":10,"USDC":0}, "spokes": {}, "pending": [], "keys": ["K1","K2","K3"]}
    propose_tx(s, {"type":"fund_spoke","spoke":"PaymentScheduler","asset":"ETH","amount":5.0}, timelock_hours=0.001)
    sign_tx(s, 0, "K1"); sign_tx(s, 0, "K2")
    # Expect timelock block
    try:
        execute_tx(s, 0)
        assert False, "timelock should block execution"
    except Exception as e:
        assert "timelock" in str(e).lower()
    time.sleep(4)
    execute_tx(s, 0)
    assert s["spokes"]["PaymentScheduler"]["ETH"] == 5.0
    assert s["vault"]["ETH"] == 5.0
