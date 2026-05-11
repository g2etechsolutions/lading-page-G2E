'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/atoms/ScrollReveal'

const technologies = [
  { name: 'AWS', category: 'Cloud' },
  { name: 'TypeScript', category: 'Linguagem' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'Terraform', category: 'IaC' },
  { name: 'NestJS', category: 'Backend' },
  { name: 'Python', category: 'IA/Data' },
  { name: 'Redis', category: 'Cache' },
]

export default function TechStackSection() {
  return (
    <section className="relative py-16 border-y border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-on-surface-muted mb-10">
            Tecnologias que dominamos
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, i) => (
            <ScrollReveal key={tech.name} delay={i * 0.05} direction="up">
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-2.5 rounded-lg border border-border bg-surface-elevated/50 hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-default group"
              >
                <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
