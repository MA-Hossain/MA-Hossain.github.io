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

  - title: "Digital Twin-enabled MEC for Heterogeneous Networks"
    slug: "digital-twin-mec"
    description: "Built a digital twin framework for mobile edge computing supporting multi-service IoT deployments in heterogeneous network environments."
    tags:
      - Digital Twin
      - MEC
      - HetNet
    overview: "Digital twins provide a real-time virtual replica of physical network infrastructure, enabling predictive optimization, what-if analysis, and proactive failure recovery. This project developed a lightweight digital twin platform tailored for mobile edge computing in heterogeneous IoT networks, enabling operators to simulate and optimize multi-service deployments without disrupting live operations."
    objectives:
      - "Construct accurate digital twin models for MEC servers and IoT end-devices"
      - "Enable real-time synchronization between physical and virtual network states"
      - "Use digital twin simulations to pre-optimize task offloading and resource allocation policies"
      - "Validate twin fidelity under dynamic network conditions and device mobility"
    methods:
      - "Model-based systems engineering for twin construction"
      - "Online learning for adaptive twin state synchronization"
      - "Deep Q-Network (DQN) for offloading policy optimization within the twin"
      - "Trace-driven simulation using real IoT traffic datasets"

  - title: "UAV-assisted Mobile Edge Computing"
    slug: "uav-mec"
    description: "Designed numerology-capable UAV-MEC systems for massive IoT deployments, optimizing task offloading and trajectory planning in dynamic environments."
    tags:
      - UAV
      - MEC
      - IoT
    overview: "Unmanned aerial vehicles (UAVs) serving as flying edge servers offer unique flexibility for providing compute and communication services to ground IoT devices in areas without fixed infrastructure. This project designed numerology-aware UAV-MEC architectures that jointly optimize UAV trajectory, computation task offloading decisions, and radio resource allocation to serve massive IoT networks with heterogeneous QoS requirements."
    objectives:
      - "Jointly optimize UAV flight trajectory and offloading decisions under energy and latency constraints"
      - "Support mixed numerology waveforms to serve diverse IoT service types simultaneously"
      - "Develop multi-UAV cooperative strategies for large-scale IoT coverage"
      - "Model and minimize UAV propulsion energy while maintaining coverage guarantees"
    methods:
      - "Successive convex approximation (SCA) for non-convex trajectory optimization"
      - "Multi-numerology OFDM waveform design"
      - "Deep Deterministic Policy Gradient (DDPG) for continuous trajectory control"
      - "Lyapunov optimization for online resource management under time-varying channels"
---
