export type Complexity = 'Advanced' | 'Intermediate' | 'Core'

export const complexityRank: Record<Complexity, number> = {
  Advanced: 3,
  Intermediate: 2,
  Core: 1,
}

export const stats = [
  { label: 'Years of Craft', value: '5+' },
  { label: 'Projects Delivered', value: '30+' },
  { label: 'Teams Supported', value: '12' },
]

export const skills = [
  {
    category: 'Frontend Engineering',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Design Systems'],
  },
  {
    category: 'Backend & Data',
    items: ['Node.js', 'Go', 'GraphQL', 'PostgreSQL', 'Redis', 'Event-Driven Architecture'],
  },
  {
    category: 'DevOps & Platform',
    items: ['Kubernetes', 'Docker', 'Terraform', 'GitHub Actions', 'Observability', 'CI/CD'],
  },
]

export const projects = [
  {
    title: 'Distributed Event Platform',
    complexity: 'Advanced' as const,
    description:
      'Event-driven platform that ingests real-time streams, normalizes data, and powers live analytics dashboards.',
    stack: ['Kafka', 'Go', 'PostgreSQL', 'React', 'Grafana'],
  },
  {
    title: 'AI Knowledge Base',
    complexity: 'Advanced' as const,
    description:
      'Semantic search and retrieval system with agent workflows for support, onboarding, and sales enablement.',
    stack: ['TypeScript', 'OpenAI', 'Vector DB', 'Next.js', 'Tailwind'],
  },
  {
    title: 'Fintech Personal Finance Suite',
    complexity: 'Intermediate' as const,
    description:
      'Secure money management suite with smart budgeting, forecasting, and an automated insights engine.',
    stack: ['Node.js', 'PostgreSQL', 'React', 'Docker'],
  },
  {
    title: 'Creative Portfolio CMS',
    complexity: 'Core' as const,
    description:
      'A composable CMS for creators featuring blocks, themes, and instant preview deployments.',
    stack: ['React', 'Vite', 'Tailwind', 'Supabase'],
  },
  {
    title: 'Realtime Collaboration Board',
    complexity: 'Intermediate' as const,
    description:
      'Multi-cursor collaboration with presence, comments, and offline-first sync for teams.',
    stack: ['WebSockets', 'Redis', 'React', 'Zustand'],
  },
]

export const devopsProjects = [
  {
    title: 'GitOps Deployment Pipeline',
    description:
      'Kubernetes-ready GitOps workflow with automated preview environments and policy checks.',
    stack: ['Argo CD', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    title: 'Observability Command Center',
    description:
      'Unified monitoring dashboard for logs, metrics, and traces with custom alert playbooks.',
    stack: ['Prometheus', 'Grafana', 'Loki', 'OpenTelemetry'],
  },
  {
    title: 'Secure Multi-Cloud Landing Zone',
    description:
      'Infrastructure baseline for AWS + GCP with automated compliance and cost guardrails.',
    stack: ['Terraform', 'AWS', 'GCP', 'OPA'],
  },
]

export const highlights = [
  {
    title: 'Product-first engineering',
    description:
      'I translate product intent into fast, reliable builds that users can feel instantly.',
  },
  {
    title: 'Automation with taste',
    description:
      'From CI/CD to infra guardrails, I automate anything that slows teams down.',
  },
  {
    title: 'Design meets DevOps',
    description:
      'I bring a design-minded approach to platform work, prioritizing clarity and resilience.',
  },
]

export const timeline = [
  {
    year: '2024',
    title: 'Scaled multi-cloud delivery',
    description:
      'Led platform enablement for teams shipping across AWS + GCP with unified observability.',
  },
  {
    year: '2023',
    title: 'Shipped a realtime collaboration suite',
    description:
      'Built live presence, whiteboard tooling, and durable sync for distributed teams.',
  },
  {
    year: '2022',
    title: 'Founded a product studio',
    description:
      'Partnered with founders to bring MVPs from idea to launch with end-to-end ownership.',
  },
]
