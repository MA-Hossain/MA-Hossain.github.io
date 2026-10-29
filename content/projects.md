---
projects:
  - title: "Hybrid Quantum-Classical Computing for Next-Generation Networks"
    slug: "hybrid-quantum-classical-networks"
    description: "Partitioning network optimization across quantum and classical resources, so variational and annealing-based solvers handle the intractable core while classical hardware carries the rest."
    tags:
      - Quantum Computing
      - Hybrid Algorithms
      - Network Optimization
    overview: "Many of the hardest problems in next-generation networking, among them resource allocation, routing under uncertainty, and slice admission, are combinatorial and grow faster than classical solvers can follow. Near-term quantum hardware cannot run these workloads end to end, but it can take the part classical methods handle worst. This project studies how to split a network optimization problem between the two, which subproblems justify a quantum solver at all, and what a hybrid pipeline must do to stay useful under the noise and qubit limits of current devices."
    objectives:
      - "Identify the network optimization subproblems where a quantum solver offers real advantage over a strong classical heuristic"
      - "Build hybrid pipelines that decompose large problems into quantum-sized cores with classical pre- and post-processing"
      - "Characterize how gate noise and limited coherence degrade solution quality at realistic problem sizes"
      - "Benchmark hybrid pipelines against tuned classical baselines rather than naive ones"
    methods:
      - "QAOA and variational quantum eigensolvers for combinatorial subproblems"
      - "Quantum annealing on QUBO formulations of resource allocation"
      - "Classical decomposition, including Benders and column generation, to size subproblems for available hardware"
      - "Noise-aware circuit design and error mitigation across simulators and cloud quantum backends"

  - title: "Quantum Networking for Space-Air-Ground Integrated Networks"
    slug: "quantum-networking-sagin"
    description: "Entanglement distribution and quantum key exchange across space, air, and ground layers, including handover and weather resilience for satellite-to-ground links."
    tags:
      - Quantum Networking
      - SAGIN
      - Entanglement Distribution
    overview: "A space-air-ground integrated network layers satellites, aerial platforms, and terrestrial infrastructure into a single system. Carrying quantum information across those layers is harder than carrying classical traffic. Entanglement is fragile, photons are lost to atmospheric turbulence and cloud cover, and the links themselves are moving. This project develops the protocols and the control plane a quantum-capable SAGIN would need, covering entanglement distribution over heterogeneous links, key management, and what becomes of a quantum session when a satellite passes out of view."
    objectives:
      - "Design entanglement distribution protocols that span satellite, aerial, and ground segments"
      - "Model atmospheric loss and turbulence to predict achievable key rates on free-space links"
      - "Develop handover schemes that preserve quantum sessions as satellites and aerial relays move"
      - "Study placement of quantum repeaters and trusted nodes under realistic coverage constraints"
    methods:
      - "Free-space optical channel modeling for satellite-to-ground and air-to-ground links"
      - "Discrete-event simulation of entanglement swapping and purification scheduling"
      - "Decoy-state QKD analysis under finite-key and atmospheric-loss conditions"
      - "Routing and resource allocation for a hybrid quantum-classical control plane"

  - title: "Self-evolving Unmanned Aerial Systems"
    slug: "self-evolving-uas"
    description: "Aerial platforms that keep adapting after deployment, revising their own policies from operational experience rather than relying on a fixed model trained before launch."
    tags:
      - UAS
      - Lifelong Learning
      - Autonomy
    overview: "Most autonomous aerial systems are frozen at deployment. The policy that flies the aircraft is the policy that was trained in simulation months earlier, while conditions drift, airframes wear, and missions change, so the gap between the training distribution and the operating environment only widens. This project studies aerial systems that keep learning in the field, updating their own policies from the data they generate while flying, without catastrophic forgetting and without drifting outside the behavior their operators approved."
    objectives:
      - "Develop on-platform learning that adapts control and planning policies from operational data"
      - "Prevent catastrophic forgetting so adaptation on a new mission does not erase earlier competence"
      - "Keep adaptation inside verified behavioral bounds so autonomy does not drift out of certification"
      - "Share learned experience across a fleet without moving raw sensor data off the aircraft"
    methods:
      - "Continual and lifelong reinforcement learning with experience replay"
      - "Sim-to-real transfer and online domain adaptation"
      - "Federated learning across fleets under bandwidth and privacy constraints"
      - "Runtime monitors that constrain policy updates to an approved operating envelope"

  - title: "Security and Trustworthiness of UAS"
    slug: "uas-security-trust"
    description: "Defending autonomous aerial systems against spoofing, hijacking, and adversarial control, and establishing the assurance evidence operators need before granting them authority."
    tags:
      - UAS Security
      - Adversarial ML
      - Assurance
    overview: "An autonomous aircraft is a target in a way a remotely piloted one is not. An attacker who can shape what its sensors report, or what its learned policy decides, can redirect it without ever touching the control link. GNSS spoofing, perception attacks, poisoned training data, and compromised command links all arrive at the same outcome. This project builds defenses for those attack surfaces and, just as importantly, the assurance evidence an operator or a regulator needs before trusting an autonomous platform with real authority."
    objectives:
      - "Characterize the attack surface of autonomous aerial systems across sensing, learning, and command links"
      - "Detect GNSS spoofing and sensor manipulation in flight through cross-sensor consistency"
      - "Harden learned perception and control policies against adversarial and poisoned inputs"
      - "Define the assurance evidence that justifies granting an autonomous platform operational authority"
    methods:
      - "Adversarial robustness evaluation of perception and control models"
      - "Multi-sensor consistency checking and anomaly detection for spoofing"
      - "Authenticated and integrity-protected command, control, and telemetry links"
      - "Runtime verification and structured assurance cases for autonomy certification"
---
