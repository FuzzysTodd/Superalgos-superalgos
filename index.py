import os
def test_index_template_exists():
    assert os.path.exists("simulator/templates/index.html")
