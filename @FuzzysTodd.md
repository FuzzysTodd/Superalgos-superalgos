FuzzysTodd/
└─ Superalgos-superalgos/
   ├─ bootstrap/
   │  ├─ bootstrap.ps1
   │  ├─ repair.ps1
   │  └─ env.ps1
   ├─ config/
   │  ├─ app.config.xml
   │  └─ secrets.local.xml (gitignored)
   ├─ provenance/
   │  ├─ runs/               # JSONL logs per run
   │  └─ errors/
   ├─ services/
   │  ├─ dashboard/
   │  │  ├─ app.py
   │  │  ├─ requirements.txt
   │  │  └─ templates/
   │  │     └─ index.html
   │  ├─ validator/
   │  │  ├─ validate.py
   │  │  ├─ cuda_kernel.cu
   │  │  └─ __init__.py
   │  └─ fpga/
   │     ├─ handoff.py
   │     └─ driver_stub.py
   ├─ superalgos_integration/
   │  ├─ ingest.py
   │  └─ emit.py
   ├─ scripts/
   │  ├─ run_dashboard.ps1
   │  ├─ run_validator.ps1
   │  └─ run_all.ps1
   ├─ tests/
   │  ├─ test_validator.py
   │  └─ test_provenance.py
   └─ README.md
