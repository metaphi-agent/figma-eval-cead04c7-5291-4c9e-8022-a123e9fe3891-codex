import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const ProfilePage = lazy(() => import('./pages/ProfilePage'))
const BioDataPage = lazy(() => import('./pages/BioDataPage'))
const DashboardPage = lazy(() => import('./pages/DashboardPage'))
const IphoneProfilePage = lazy(() => import('./pages/IphoneProfilePage'))
const DribbbleShot4Page = lazy(() => import('./pages/DribbbleShot4Page'))
const DribbbleShot6Page = lazy(() => import('./pages/DribbbleShot6Page'))

function AppFallback() {
  return (
    <div className="min-h-screen bg-[var(--color-app-bg)] grid place-items-center">
      <div className="text-[var(--color-muted)] text-sm">Loading…</div>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<AppFallback />}>
      <Routes>
        <Route path="/" element={<Navigate to="/profile" replace />} />

        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/settings---account---personal-information---bio-data"
          element={<BioDataPage />}
        />
        <Route path="/dashboard---1" element={<DashboardPage />} />
        <Route path="/iphone-xr-xs-max---26" element={<IphoneProfilePage />} />
        <Route path="/dribbble-shot---4" element={<DribbbleShot4Page />} />
        <Route path="/dribbble-shot---6" element={<DribbbleShot6Page />} />

        <Route path="*" element={<Navigate to="/profile" replace />} />
      </Routes>
    </Suspense>
  )
}
