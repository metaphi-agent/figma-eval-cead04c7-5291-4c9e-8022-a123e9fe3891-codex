import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { Icon } from '../components/ui/Icon'
import { Switch } from '../components/ui/Switch'

type SettingsRow = {
  title: string
  subtitle?: string
  leftIconSrc: string
  right?: 'chevron' | 'alert' | 'switch'
  to?: string
}

function SettingsCard({
  title,
  rows,
  className,
}: {
  title?: string
  rows: SettingsRow[]
  className?: string
}) {
  const [faceIdEnabled, setFaceIdEnabled] = useState(false)

  return (
    <section
      className={clsx(
        'rounded-[10px] bg-[color:var(--color-surface)]',
        'shadow-[0_4px_44px_rgba(0,0,0,0.06)]',
        className,
      )}
    >
      {title ? (
        <h2 className="px-4 pt-4 text-[13px] font-medium text-[color:var(--color-muted)]">{title}</h2>
      ) : null}
      <div className="px-4 py-4">
        <div className="flex flex-col gap-[25px]">
          {rows.map((row) => {
            const content = (
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:rgba(6,1,179,0.05)]">
                    <Icon src={row.leftIconSrc} alt="" size={20} />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-[color:var(--color-text)]">{row.title}</p>
                    {row.subtitle ? (
                      <p className="mt-1 text-[11px] text-[color:var(--color-muted)]">{row.subtitle}</p>
                    ) : null}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {row.right === 'alert' ? (
                    <Icon src="./assets/icons/alert.svg" alt="" size={14} className="opacity-90" />
                  ) : null}
                  {row.right === 'switch' ? (
                    <Switch
                      checked={faceIdEnabled}
                      onCheckedChange={setFaceIdEnabled}
                      label={row.title}
                      className="shrink-0"
                    />
                  ) : null}
                  {row.right === 'chevron' ? (
                    <Icon src="./assets/icons/chevron-right.svg" alt="" size={12} className="opacity-70" />
                  ) : null}
                </div>
              </div>
            )

            return row.to ? (
              <Link
                key={row.title}
                to={row.to}
                className="block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg)]"
              >
                {content}
              </Link>
            ) : (
              <div key={row.title}>{content}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TabBar() {
  const tabs = useMemo(
    () => [
      { label: 'Home', icon: './assets/icons/tab-home.svg', to: '/dashboard' },
      { label: 'Card', icon: './assets/icons/tab-card.svg', to: '/dashboard' },
      { label: 'Transactions', icon: './assets/icons/tab-transactions.svg', to: '/dashboard' },
      { label: 'Requests', icon: './assets/icons/tab-requests.svg', to: '/dashboard' },
      { label: 'Profile', icon: './assets/icons/tab-profile.svg', to: '/profile' },
    ],
    [],
  )

  return (
    <nav
      className={clsx(
        'fixed bottom-0 left-1/2 w-full max-w-[375px] -translate-x-1/2 bg-white',
        'h-[49px] shadow-[0_0_64px_rgba(37,35,35,0.10)]',
        'rounded-t-[20px]',
      )}
      aria-label="Bottom navigation"
    >
      <div className="grid h-full grid-cols-5">
        {tabs.map((t) => (
          <Link
            key={t.label}
            to={t.to}
            className={clsx(
              'flex flex-col items-center justify-center gap-0.5 text-[10px] text-[color:var(--color-ink)]',
              'outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-white',
            )}
          >
            <Icon src={t.icon} alt="" size={20} />
            <span>{t.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default function ProfilePage() {
  return (
    <div className="min-h-dvh bg-[color:var(--color-bg)] pb-[70px]">
      <div className="mx-auto w-full max-w-[375px] px-4 pt-6">
        <h1 className="text-[20px] font-bold leading-[21px] tracking-tight text-[color:var(--color-text)]">
          Profile
        </h1>

        <section className="mt-4 rounded-[5px] bg-[color:var(--color-primary)] shadow-[0_4px_44px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-4 px-4 py-4">
            <div className="relative">
              <img
                src="./assets/images/avatar-profile.png"
                alt="Profile avatar"
                className="h-[57px] w-[57px] rounded-full object-cover ring-2 ring-[color:var(--color-accent)]"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[16px] font-bold text-white">Itunuoluwa Abidoye</p>
              <p className="truncate text-[13px] text-white/70">@Itunuoluwa</p>
            </div>
            <Link
              to="/settings/bio-data"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 outline-none transition-colors hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Edit profile"
            >
              <Icon src="./assets/icons/edit.svg" alt="" size={24} />
            </Link>
          </div>
        </section>

        <SettingsCard
          className="mt-6"
          rows={[
            {
              title: 'My Account',
              subtitle: 'Make changes to your account',
              leftIconSrc: './assets/icons/icon-profile.svg',
              right: 'alert',
              to: '/settings/bio-data',
            },
            {
              title: 'Saved Beneficiary',
              subtitle: 'Manage your saved account',
              leftIconSrc: './assets/icons/icon-profile.svg',
              right: 'chevron',
              to: '/settings/bio-data',
            },
            {
              title: 'Face ID / Touch ID',
              subtitle: 'Manage your device security',
              leftIconSrc: './assets/icons/1-223.svg',
              right: 'switch',
            },
            {
              title: 'Two-Factor Authentication',
              subtitle: 'Further secure your account for safety',
              leftIconSrc: './assets/icons/1-236.svg',
              right: 'chevron',
              to: '/settings/bio-data',
            },
            {
              title: 'Log out',
              subtitle: 'Further secure your account for safety',
              leftIconSrc: './assets/icons/1-246.svg',
              right: 'chevron',
              to: '/profile/worker',
            },
          ]}
        />

        <p className="mt-6 text-[13px] font-medium text-[color:var(--color-muted)]">More</p>

        <SettingsCard
          className="mt-3"
          rows={[
            {
              title: 'Help & Support',
              leftIconSrc: './assets/icons/notification.svg',
              right: 'chevron',
              to: '/dashboard',
            },
            {
              title: 'About App',
              leftIconSrc: './assets/icons/heart.svg',
              right: 'chevron',
              to: '/dashboard',
            },
          ]}
        />
      </div>
      <TabBar />
    </div>
  )
}
