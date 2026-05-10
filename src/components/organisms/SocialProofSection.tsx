import Icon from '@/components/atoms/Icon'

const industries = [
  { icon: 'storefront', label: 'Varejo' },
  { icon: 'health_and_safety', label: 'Saúde' },
  { icon: 'local_shipping', label: 'Logística' },
  { icon: 'account_balance', label: 'Finanças' },
]

export default function SocialProofSection() {
  return (
    <section className="py-12 bg-surface-container-lowest border-y border-outline-variant/10">
      <div className="w-full max-w-[1440px] mx-auto px-margin-desktop">
        <p className="font-label-caps text-label-caps text-on-surface-variant text-center uppercase tracking-widest mb-8">
          Empresas que já evoluíram com a G2E
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {industries.map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-xl font-display-xl font-bold">
              <Icon name={icon} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
