import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Icon } from '../components/ui/Icon'
import type { ReactNode } from 'react'

function StatCard({
  tone,
  title,
  lines,
}: {
  tone: 'soft' | 'accent'
  title: string
  lines: ReactNode[]
}) {
  const isAccent = tone === 'accent'
  return (
    <div
      className={clsx(
        'w-full rounded-[14px] p-4',
        'shadow-[0_10px_30px_rgba(16,24,40,0.10)]',
        isAccent
          ? 'bg-[color:var(--color-accent)] text-white'
          : 'bg-[rgba(239,70,55,0.12)] text-[color:var(--color-text)]',
      )}
    >
      <p className={clsx('text-[11px]', isAccent ? 'text-white/90' : 'text-[color:rgba(24,29,39,0.70)]')}>
        {title}
      </p>
      <div className="mt-2 space-y-1">{lines.map((l, i) => <div key={i}>{l}</div>)}</div>
    </div>
  )
}

function HouseCard({
  variant,
  name,
}: {
  variant: 'add' | 'person'
  name: string
}) {
  return (
    <div className="flex h-[129px] w-[83px] flex-col items-center justify-center rounded-[14px] bg-white shadow-[0_10px_24px_rgba(16,24,40,0.10)]">
      {variant === 'add' ? (
        <div className="flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[color:var(--color-accent)] text-white">
          <span className="text-xl leading-none">+</span>
        </div>
      ) : (
        <img
          src="./assets/images/avatar-dashboard.png"
          alt=""
          className="h-[43px] w-[43px] rounded-full object-cover"
          loading="lazy"
        />
      )}
      <p className="mt-3 whitespace-pre-line text-center font-[var(--font-display)] text-[13px] font-medium text-[color:var(--color-text)]">
        {name}
      </p>
    </div>
  )
}

function ServicePill({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex h-[93px] w-full items-center justify-center gap-4 rounded-[18px] bg-white shadow-[0_10px_30px_rgba(16,24,40,0.10)]">
      <Icon src={icon} alt="" size={42} className="h-[42px] w-auto" />
      <p className="font-[var(--font-display)] text-[20px] font-medium text-black">{label}</p>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="min-h-dvh bg-white">
      <div className="mx-auto w-full max-w-[414px] px-5 pt-10">
        <header className="flex items-center justify-between">
          <h1 className="font-[var(--font-display)] text-[16px] font-medium text-[color:var(--color-text)]">
            Profile
          </h1>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)]"
            aria-label="Open menu"
          >
            <Icon src="./assets/icons/menu.svg" alt="" size={16} />
          </button>
        </header>

        <div className="mt-4 flex items-center gap-3">
          <img
            src="./assets/images/avatar-dashboard.png"
            alt="Adewale Taiwo"
            className="h-[55px] w-[55px] rounded-full object-cover"
          />
          <div>
            <p className="font-[var(--font-display)] text-[20px] text-[color:var(--color-text)]">
              Adewale Taiwo
            </p>
            <p className="font-[var(--font-display)] text-[14px] text-[color:var(--color-accent)]">
              House Manager
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <StatCard
            tone="soft"
            title="Wallet Balance:"
            lines={[
              <p
                key="v"
                className="font-[var(--font-display)] text-[20px] font-semibold text-[color:var(--color-accent)]"
              >
                $5046.57
              </p>,
              <p key="s" className="text-[11px] text-[color:rgba(24,29,39,0.70)]">
                Total Service
                <span className="ml-2 font-semibold text-[color:var(--color-text)]">24</span>
              </p>,
            ]}
          />
          <StatCard
            tone="accent"
            title="Master Card"
            lines={[
              <p key="n" className="font-[var(--font-display)] text-[16px] font-semibold">
                5999-XXXX
              </p>,
              <p key="u" className="font-[var(--font-display)] text-[16px] font-semibold">
                Adewale T.
              </p>,
            ]}
          />
        </div>

        <div className="relative mt-8">
          <div className="absolute -right-5 top-0 h-[240px] w-1/2 bg-[rgba(239,70,55,0.10)]" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <h2 className="font-[var(--font-display)] text-[16px] text-[color:var(--color-text)]">
                Houses
              </h2>
            </div>
            <div className="mt-4 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <HouseCard variant="add" name={'Add\nWorkers'} />
              <HouseCard variant="person" name={'Tobi\nLateef'} />
              <HouseCard variant="person" name={'Queen\nNeedle'} />
              <HouseCard variant="person" name={'Joan\nBlessing'} />
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h2 className="font-[var(--font-display)] text-[16px] text-[color:var(--color-text)]">
            Services
          </h2>
          <Link
            to="/profile/worker"
            className="font-[var(--font-display)] text-[14px] text-[color:var(--color-accent)]"
          >
            All
          </Link>
        </div>

        <div className="mt-4 space-y-6 pb-12">
          <ServicePill icon="./assets/icons/electrician.svg" label="Electrical" />
          <ServicePill icon="./assets/icons/helmet.svg" label="Others" />
        </div>
      </div>
    </div>
  )
}
