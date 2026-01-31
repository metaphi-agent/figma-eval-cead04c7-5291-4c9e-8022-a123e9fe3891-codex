import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const ProfilePage = React.lazy(() => import('./pages/ProfilePage'))
const BioDataPage = React.lazy(() => import('./pages/BioDataPage'))
const WorkerProfilePage = React.lazy(() => import('./pages/WorkerProfilePage'))
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'))

function AppFallback() {
  return (
    <div className="min-h-dvh bg-[var(--color-bg)]">
      <div className="mx-auto flex min-h-dvh w-full max-w-[375px] items-center justify-center px-4">
        <div className="w-full rounded-[18px] bg-white p-6 text-center shadow-[0_10px_30px_rgba(16,24,40,0.10)]">
          <div
            className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-[color:rgba(6,1,179,0.20)] border-t-[color:var(--color-primary)]"
            aria-hidden="true"
          />
          <p className="mt-3 text-sm text-[color:var(--color-ink)]">Loading…</p>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<AppFallback />}>
      <Routes>
        <Route path="/" element={<Navigate to="/profile" replace />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings/bio-data" element={<BioDataPage />} />
        <Route path="/profile/worker" element={<WorkerProfilePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/profile" replace />} />
      </Routes>
    </Suspense>
  )
}
