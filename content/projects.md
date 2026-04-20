---
projects:
  - title: "Federated Learning for Privacy-Preserving IoT"
    slug: "federated-learning-iot"
    description: "Designing energy-efficient federated learning frameworks for heterogeneous IoT networks, enabling collaborative model training without raw data sharing."
    tags:
      - Federated Learning
      - IoT
      - Privacy
    overview: "The proliferation of IoT devices generates enormous volumes of sensitive data at the network edge. This project develops communication-efficient and privacy-preserving federated learning protocols that allow IoT devices to collaboratively train models without centralizing data, addressing both privacy regulations and bandwidth constraints inherent to IoT deployments."
    objectives:
      - "Minimize communication overhead in federated rounds across heterogeneous IoT hardware"
      - "Incorporate differential privacy guarantees while preserving model utility"
      - "Handle statistical heterogeneity (non-IID data) across geographically distributed IoT nodes"
      - "Design hierarchical aggregation strategies for multi-tier IoT network topologies"
    methods:
      - "Differential privacy mechanisms (Gaussian and Laplace noise injection)"
      - "Gradient compression and sparsification for bandwidth efficiency"
      - "Asynchronous federated optimization for slow or intermittent IoT clients"
      - "Secure aggregation protocols to prevent model inversion attacks"

  - title: "AI-Native 6G Network Architecture"
    slug: "ai-native-6g"
    description: "Integrating AI/ML natively into 6G network layers for adaptive resource management, dynamic network slicing, and integrated sensing and communication (ISAC)."
    tags:
      - 6G
      - Network Slicing
      - ISAC
    overview: "Next-generation 6G networks require fundamentally new design paradigms where AI is not an add-on but a native component of every network layer. This project investigates how deep learning, reinforcement learning, and generative AI can be embedded into radio access, core, and edge layers to achieve self-optimizing, zero-touch networks capable of supporting diverse services from eMBB to URLLC and massive IoT simultaneously."
    objectives:
      - "Develop AI-native air interface designs that jointly optimize sensing and communication"
      - "Build dynamic network slicing engines using deep reinforcement learning for multi-tenant QoS"
      - "Design intelligent spectrum management and interference coordination for sub-THz bands"
      - "Investigate generative AI for network digital twin creation and what-if scenario planning"
    methods:
      - "Deep Reinforcement Learning (DRL) for resource allocation"
      - "Transformer-based models for wireless channel prediction"
      - "Multi-agent RL for distributed network slice management"
      - "Diffusion models for radio environment map generation"

  - title: "Agentic LLM Security"
    slug: "agentic-llm-security"
    description: "Securing agentic LLM systems against prompt injection, tool misuse, and adversarial manipulation, with autonomous defense for multi-agent workflows."
    tags:
      - LLM Security
      - Agentic AI
      - Adversarial ML
    overview: "As large language models are deployed as autonomous agents that invoke tools, browse the web, and coordinate with other agents, they introduce a new class of attack surfaces spanning prompt injection, tool abuse, memory poisoning, and multi-agent collusion. This project develops threat models, detection mechanisms, and runtime defenses that make agentic LLM systems robust, auditable, and trustworthy in high-stakes deployments."
    objectives:
      - "Characterize attack surfaces unique to tool-using, memory-augmented LLM agents"
      - "Build runtime monitors that detect prompt injection and anomalous tool invocations"
      - "Design policy-enforcing guardrails for multi-agent communication and task delegation"
      - "Develop benchmarks and red-teaming frameworks for evaluating agentic LLM robustness"
    methods:
      - "Adversarial prompt generation and automated red-teaming pipelines"
      - "Information-flow tracking across agent memory, tools, and external content"
      - "Constrained decoding and policy-based action filtering for safe tool use"
      - "Reinforcement learning from safety feedback (RLSF) for defensive agent training"

  - title: "Agentic AI for UAV"
    slug: "agentic-ai-uav"
    description: "Developing agentic AI frameworks that enable UAVs to autonomously plan, reason, and coordinate missions in dynamic airspace and edge environments."
    tags:
      - UAV
      - Agentic AI
      - LLM
    overview: "Unmanned aerial vehicles (UAVs) are evolving from remotely piloted platforms into autonomous agents capable of perception, reasoning, and cooperative decision-making. This project builds agentic AI systems—grounded in large language models, tool use, and multi-agent planning—that allow UAVs to interpret high-level mission intent, adapt to unforeseen conditions, and coordinate with other aerial and ground agents with minimal human supervision."
    objectives:
      - "Design LLM-driven planning agents that translate natural-language mission goals into executable UAV task graphs"
      - "Enable closed-loop perception-reasoning-action cycles for autonomous navigation and task execution"
      - "Develop multi-agent coordination protocols for swarms of UAVs under communication and energy constraints"
      - "Ensure safe, verifiable, and policy-compliant behavior of agentic UAVs in shared airspace"
    methods:
      - "Tool-augmented LLM agents with memory and reflection for mission planning"
      - "Hierarchical reinforcement learning coupled with language-based task decomposition"
      - "Multi-agent communication via structured natural-language protocols"
      - "Runtime guardrails and formal safety checks for autonomous flight decisions"

  - title: "Quantum-Assisted ML for Next-Generation Networks"
    slug: "quantum-assisted-ml-nextgen-networks"
    description: "Exploring quantum and hybrid quantum-classical ML algorithms to accelerate training, enhance expressivity, and tackle optimization bottlenecks in next-generation networks."
    tags:
      - Quantum ML
      - Hybrid Computing
      - Optimization
    overview: "As classical machine learning approaches fundamental limits in training cost and optimization complexity, quantum computing offers a promising complement through superposition, entanglement, and quantum parallelism. This project investigates hybrid quantum-classical learning pipelines that embed variational quantum circuits into classical ML workflows to address large-scale optimization, feature encoding, and resource allocation problems arising in wireless networks and edge intelligence."
    objectives:
      - "Design variational quantum circuits (VQCs) for classification and regression tasks on edge-scale datasets"
      - "Develop hybrid quantum-classical optimizers for resource allocation in 6G and edge networks"
      - "Benchmark quantum kernel methods against classical counterparts for feature-rich wireless data"
      - "Investigate noise-resilient training strategies suitable for near-term NISQ hardware"
    methods:
      - "Variational Quantum Eigensolver (VQE) and QAOA for combinatorial network optimization"
      - "Parameterized quantum circuits trained with parameter-shift gradients"
      - "Quantum kernel estimation for support vector machines"
      - "Hybrid pipelines combining PennyLane/Qiskit simulators with classical deep learning frameworks"
---
