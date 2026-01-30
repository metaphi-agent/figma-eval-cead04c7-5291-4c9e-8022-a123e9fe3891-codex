import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import MaskedIcon from '../ui/MaskedIcon'

type TabKey = 'home' | 'card' | 'transactions' | 'requests' | 'profile'

const tabs: Array<{
  key: TabKey
  label: string
  to: string
  icon: string
}> = [
  { key: 'home', label: 'Home', to: '/dashboard---1', icon: './assets/icons/tab-home.svg' },
  { key: 'card', label: 'Card', to: '/dashboard---1', icon: './assets/icons/tab-card.svg' },
  {
    key: 'transactions',
    label: 'Transactions',
    to: '/profile',
    icon: './assets/icons/tab-transactions.svg',
  },
  { key: 'requests', label: 'Requests', to: '/profile', icon: './assets/icons/tab-requests.svg' },
  { key: 'profile', label: 'Profile', to: '/profile', icon: './assets/icons/tab-profile.svg' },
]

function getActiveKey(pathname: string): TabKey {
  if (pathname.startsWith('/dashboard')) return 'home'
  if (pathname.startsWith('/profile')) return 'profile'
  if (pathname.startsWith('/settings')) return 'profile'
  if (pathname.startsWith('/iphone')) return 'home'
  return 'profile'
}

export default function BottomTabBar() {
  const { pathname } = useLocation()
  const active = getActiveKey(pathname)

  return (
    <nav className="absolute left-0 right-0 bottom-0 bg-white border-t border-black/10">
      <div className="h-[72px] px-3 grid grid-cols-5 items-center">
        {tabs.map((tab) => {
          const isActive = tab.key === active
          return (
            <Link
              key={tab.key}
              to={tab.to}
              className={clsx(
                'flex flex-col items-center justify-center gap-1 py-2 rounded-xl transition-colors duration-150',
                isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-muted)]',
                'hover:bg-black/5 active:bg-black/10',
              )}
            >
              <div
                className={clsx(
                  'w-9 h-9 rounded-full grid place-items-center',
                  isActive && 'bg-[#EEF0FF]',
                )}
              >
                <MaskedIcon src={tab.icon} className="w-5 h-5" />
              </div>
              <div className="text-[10px] leading-3">{tab.label}</div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
