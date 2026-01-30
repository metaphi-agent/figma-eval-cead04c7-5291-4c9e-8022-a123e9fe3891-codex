import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import BottomTabBar from '../components/navigation/BottomTabBar'
import MobileViewport from '../components/layout/MobileViewport'
import MaskedIcon from '../components/ui/MaskedIcon'
import SettingsRow from '../components/ui/SettingsRow'
import Switch from '../components/ui/Switch'

type Row = {
  id: string
  title: string
  subtitle?: string
  icon: string
  type: 'link' | 'switch'
  danger?: boolean
  alert?: boolean
}

export default function ProfilePage() {
  const [faceIdEnabled, setFaceIdEnabled] = useState(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [darkModeEnabled, setDarkModeEnabled] = useState(false)

  const accountRows = useMemo<Row[]>(
    () => [
      {
        id: 'my-account',
        title: 'My Account',
        subtitle: 'Make changes to your account',
        icon: './assets/icons/row-profile.svg',
        type: 'link',
        alert: true,
      },
      {
        id: 'saved-beneficiary',
        title: 'Saved Beneficiary',
        subtitle: 'Manage your saved account',
        icon: './assets/icons/row-profile-2.svg',
        type: 'link',
        alert: true,
      },
      {
        id: 'face-id',
        title: 'Face ID / Touch ID',
        subtitle: 'Manage your device security',
        icon: './assets/icons/row-lock.svg',
        type: 'switch',
      },
      {
        id: 'two-factor',
        title: 'Two-Factor Authentication',
        subtitle: 'Further secure your account for safety',
        icon: './assets/icons/row-shield-done.svg',
        type: 'link',
      },
      {
        id: 'log-out',
        title: 'Log out',
        subtitle: 'Further secure your account for safety',
        icon: './assets/icons/row-logout.svg',
        type: 'link',
        danger: true,
      },
    ],
    [],
  )

  const moreRows = useMemo<Row[]>(
    () => [
      {
        id: 'help',
        title: 'Help & Support',
        icon: './assets/icons/notification.png',
        type: 'link',
      },
      {
        id: 'about',
        title: 'About App',
        icon: './assets/icons/row-shield-done.svg',
        type: 'link',
      },
      {
        id: 'notifications',
        title: 'Notifications',
        subtitle: 'Manage your notifications at ease',
        icon: './assets/icons/notification.png',
        type: 'switch',
      },
      {
        id: 'dark-mode',
        title: 'Dark Mode',
        subtitle: 'Switch to dark mode',
        icon: './assets/icons/row-profile.svg',
        type: 'switch',
      },
      {
        id: 'rate',
        title: 'Rate this app',
        subtitle: 'Further secure your account for safety',
        icon: './assets/icons/row-heart.png',
        type: 'link',
      },
      {
        id: 'privacy',
        title: 'Privacy Notice',
        icon: './assets/icons/row-shield-done.svg',
        type: 'link',
      },
      {
        id: 'terms',
        title: 'Terms of Use',
        icon: './assets/icons/row-shield-done.svg',
        type: 'link',
      },
    ],
    [],
  )

  return (
    <MobileViewport>
      <div className="px-4 pt-10 pb-[92px]">
        <div className="text-[20px] leading-6 font-bold text-[var(--color-ink)]">Profile</div>

        <div className="mt-4 bg-[var(--color-primary)] rounded-[6px] shadow-[0_10px_26px_rgba(0,0,0,0.12)] px-4 py-4 flex items-center gap-3">
          <div className="w-[57px] h-[57px] rounded-full bg-white grid place-items-center shrink-0">
            <img
              src="./assets/images/avatar.png"
              alt="User avatar"
              className="w-[53px] h-[53px] rounded-full object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="text-[14px] leading-5 font-bold text-white truncate">
              Itunuoluwa Abidoye
            </div>
            <div className="text-[12px] leading-4 text-white/70 truncate">@Itunuoluwa</div>
          </div>

          <button
            type="button"
            className="w-9 h-9 rounded-full grid place-items-center hover:bg-white/10 active:bg-white/20 transition-colors duration-150"
            aria-label="Edit profile"
          >
            <MaskedIcon src="./assets/icons/edit.svg" className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="mt-6 bg-white rounded-[10px] shadow-[0_14px_40px_rgba(0,0,0,0.08)] overflow-hidden">
          {accountRows.map((row, idx) => {
            const showDivider = idx !== accountRows.length - 1
            const right =
              row.type === 'switch' ? (
                <Switch checked={faceIdEnabled} onCheckedChange={setFaceIdEnabled} />
              ) : (
                <div className="flex items-center gap-2">
                  {row.alert ? (
                    <MaskedIcon
                      src="./assets/icons/alert.svg"
                      className="w-4 h-4 text-[var(--color-danger)]"
                    />
                  ) : null}
                  <MaskedIcon
                    src="./assets/icons/chevron.svg"
                    className="w-3 h-3 text-[#C4C4C4]"
                  />
                </div>
              )

            return (
              <div key={row.id}>
                <SettingsRow
                  iconSrc={row.icon}
                  title={row.title}
                  subtitle={row.subtitle}
                  endAdornment={right}
                  onClick={row.type === 'link' ? () => {} : undefined}
                  danger={row.danger}
                />
                {showDivider ? <div className="h-px bg-black/5 mx-4" /> : null}
              </div>
            )
          })}
        </div>

        <div className="mt-6 text-[14px] leading-5 font-medium text-[var(--color-ink)]">
          More
        </div>

        <div className="mt-3 bg-white rounded-[10px] shadow-[0_14px_40px_rgba(0,0,0,0.08)] overflow-hidden">
          {moreRows.map((row, idx) => {
            const showDivider = idx !== moreRows.length - 1

            let right: ReactNode
            if (row.type === 'switch') {
              if (row.id === 'notifications') {
                right = (
                  <Switch
                    checked={notificationsEnabled}
                    onCheckedChange={setNotificationsEnabled}
                  />
                )
              } else if (row.id === 'dark-mode') {
                right = (
                  <Switch checked={darkModeEnabled} onCheckedChange={setDarkModeEnabled} />
                )
              } else {
                right = <Switch checked={false} onCheckedChange={() => {}} />
              }
            } else {
              right = (
                <MaskedIcon src="./assets/icons/chevron.svg" className="w-3 h-3 text-[#C4C4C4]" />
              )
            }

            return (
              <div key={row.id}>
                <SettingsRow
                  iconSrc={row.icon}
                  title={row.title}
                  subtitle={row.subtitle}
                  endAdornment={right}
                  onClick={row.type === 'link' ? () => {} : undefined}
                />
                {showDivider ? <div className="h-px bg-black/5 mx-4" /> : null}
              </div>
            )
          })}
        </div>
      </div>

      <BottomTabBar />
    </MobileViewport>
  )
}
