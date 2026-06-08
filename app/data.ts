import { Project, Skill, WorkExperience } from './types';

export const SKILLS: Skill[] = [
  {
    name: 'TypeScript & JavaScript',
    category: 'Languages',
    level: 95,
    color: 'text-blue-400 group-hover:border-blue-500/50',
    iconName: 'Code',
    description: 'Typing architectures, custom generics, decorator patterns, and compiler tuning.'
  },
  {
    name: 'Golang',
    category: 'Languages',
    level: 82,
    color: 'text-cyan-400 group-hover:border-cyan-500/50',
    iconName: 'Blocks',
    description: 'Concurrent pipeline patterns, microservices development, and high-performance routing.'
  },
  {
    name: 'Rust',
    category: 'Languages',
    level: 70,
    color: 'text-orange-400 group-hover:border-orange-500/50',
    iconName: 'ShieldAlert',
    description: 'Memory safety paradigms, embedded development, and WASM compilation bindings.'
  },
  {
    name: 'React 19 & Next.js 15',
    category: 'Frontend',
    level: 92,
    color: 'text-cyan-500 group-hover:border-cyan-500/50',
    iconName: 'Cpu',
    description: 'Server actions, React Server Components (RSC), hydration stream optimizations, and custom hooks.'
  },
  {
    name: 'Tailwind CSS & Framer Motion',
    category: 'Frontend',
    level: 96,
    color: 'text-pink-400 group-hover:border-pink-500/50',
    iconName: 'Sparkles',
    description: 'Complex fluid designs, layout-id migrations, physics animations, and custom utility plugins.'
  },
  {
    name: 'Node.js & Express / NestJS',
    category: 'Backend',
    level: 90,
    color: 'text-emerald-400 group-hover:border-emerald-500/50',
    iconName: 'Server',
    description: 'Event-driven streaming, custom middleware pipelines, authentication pipelines, and WebSocket grids.'
  },
  {
    name: 'PostgreSQL / Prisma',
    category: 'Backend',
    level: 88,
    color: 'text-blue-500 group-hover:border-blue-500/50',
    iconName: 'Database',
    description: 'Index optimizations, custom scaling constraints, and dynamic raw JSON aggregation.'
  },
  {
    name: 'GraphQL / gRPC',
    category: 'Backend',
    level: 80,
    color: 'text-purple-400 group-hover:border-purple-500/50',
    iconName: 'Network',
    description: 'Federated schema grids, protobuf mappings, and subscription stream backends.'
  },
  {
    name: 'Docker & Kubernetes',
    category: 'DevOps & Tools',
    level: 85,
    color: 'text-sky-400 group-hover:border-sky-500/50',
    iconName: 'Layers',
    description: 'Multi-stage builds, clean deployment configs, and containerized scale routines.'
  },
  {
    name: 'AWS Core & Cloudflare',
    category: 'DevOps & Tools',
    level: 84,
    color: 'text-amber-400 group-hover:border-amber-500/50',
    iconName: 'Cloud',
    description: 'Secure S3 Buckets, serverless Lambdas, and Cloudflare Page/Worker caching.'
  },
  {
    name: 'Git & GitHub CI/CD',
    category: 'DevOps & Tools',
    level: 90,
    color: 'text-violet-400 group-hover:border-violet-500/50',
    iconName: 'GitBranch',
    description: 'Automated runner workflows, semantic release pipelines, staging verification arrays.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Helix Orchestrator',
    description: 'Desentralisasi visual workflow engine untuk eksekusi serverless pipelines yang efisien dan real-time.',
    longDescription: 'Helix Orchestrator menggabungkan node-graph editor berbasis canvas dengan engine serverless di backend. Platform ini mampu menjadwalkan, memantau, dan mematangkan pipeline berukuran ribuan langkah dalam mikrodetik dengan visualisasi logging interaktif.',
    tags: ['Next.js', 'Go', 'WebSockets', 'Canvas API', 'Redis'],
    category: 'Full-Stack',
    glowColor: 'purple',
    stars: 1420,
    forks: 182,
    liveUrl: 'https://demo.helix-orchestrator.io',
    githubUrl: 'https://github.com/example/helix-orchestrator',
    metrics: { label: 'Latency', value: '< 12ms' }
  },
  {
    id: '2',
    title: 'Aether Engine',
    description: 'WebGL custom canvas dan particle editor dengan dynamic physics simulator berbasis GPU.',
    longDescription: 'Aether Engine adalah tool visual berbasis WebGL untuk menyusun partikel interaktif kompleks yang disinkronisasi dengan musik atau interaksi mouse. Dibuat murni menggunakan shader GLSL dan optimasi memori GPU secara real-time.',
    tags: ['React', 'WebGL', 'Three.js', 'Zig Assembly', 'GLSL'],
    category: 'Frontend',
    glowColor: 'cyan',
    stars: 875,
    forks: 92,
    liveUrl: 'https://aether.example.io',
    githubUrl: 'https://github.com/example/aether-engine',
    metrics: { label: 'Compute Unit', value: '60 FPS stable' }
  },
  {
    id: '3',
    title: 'Prism Protocol',
    description: 'Real-time crypto and order-book analytic pipeline yang memproses jutaan trading ticks per detik.',
    longDescription: 'Prism Protocol mengumpulkan live feed trading dari 12 broker teratas, memproses spread arbritage dengan thread Rust berkinerja tinggi, dan menyalurkan order book visual berlatensi ultra-rendah ke dashboard client.',
    tags: ['Rust', 'Node.js', 'RxJS', 'TimescaleDB', 'Docker'],
    category: 'Backend',
    glowColor: 'blue',
    stars: 1105,
    forks: 145,
    liveUrl: 'https://prism.crypto-analytic.io',
    githubUrl: 'https://github.com/example/prism-protocol',
    metrics: { label: 'Throughput', value: '1.2M events/s' }
  },
  {
    id: '4',
    title: 'Nebula Distributed DB',
    description: 'Penyimpanan Key-Value database terdistribusi ultra-ringan dengan konsensus Raft.',
    longDescription: 'Nebula DB adalah implementasi protokol konsensus Raft yang efisien untuk penyimpanan konfigurasi terdistribusi dalam arsitektur microservices. Dilengkapi dengan API RESTful dan gRPC bawaan untuk transisi data berkecepatan tinggi.',
    tags: ['Golang', 'Raft Consensus', 'gRPC', 'RocksDB', 'K8s'],
    category: 'Backend',
    glowColor: 'pink',
    stars: 642,
    forks: 58,
    liveUrl: 'https://nebula.example.io',
    githubUrl: 'https://github.com/example/nebula-db',
    metrics: { label: 'Consensus Latency', value: '4.2ms avg' }
  }
];

export const EXPERIENCES: WorkExperience[] = [
  {
    id: 'exp-1',
    role: 'Senior Full-Stack Developer',
    company: 'Quantum Labs Tech',
    duration: '2024 - Sekarang',
    description: [
      'Memimpin migrasi arsitektur monolitik ke microservices modular, meningkatkan kecepatan pipeline developer hingga 40%.',
      'Mendesain UI/UX real-time dashboard untuk data analisis industri yang menghemat waktu tunggu render server hingga 3x lipat.',
      'Mengembangkan custom state management di internal perusahaan menggunakan React Context dan sync hooks.'
    ],
    tags: ['Next.js', 'Go', 'Protobuf', 'Postgres', 'Docker'],
    glowAccent: 'border-l-blue-500 shadow-blue-500/10'
  },
  {
    id: 'exp-2',
    role: 'Core Backend Engineer',
    company: 'Synapse Fintech',
    duration: '2022 - 2024',
    description: [
      'Menulis ulang modul pembayaran ledger berkinerja tinggi menggunakan Golang, mengurangi overhead API latency dari 250ms ke 18ms.',
      'Mengintegrasikan sistem audit database otomatis untuk melacak pergeseran data transaksi secara real-time.',
      'Membangun sistem notifikasi push berskala besar menggunakan Redis PubSub dan standard SSE (Server-Sent Events).'
    ],
    tags: ['Golang', 'Redis', 'SQL', 'GitHub Actions', 'AWS'],
    glowAccent: 'border-l-purple-500 shadow-purple-500/10'
  }
];
