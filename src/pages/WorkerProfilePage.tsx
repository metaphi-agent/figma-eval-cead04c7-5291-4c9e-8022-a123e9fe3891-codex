import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { Icon } from '../components/ui/Icon'
import { Switch } from '../components/ui/Switch'

type JobChip = { label: string; accent?: boolean }

export default function WorkerProfilePage() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(true)
  const [active, setActive] = useState(2)

  const chips = useMemo<JobChip[]>(
    () => [
      { label: 'Product\nDesign' },
      { label: 'Front end', accent: true },
      { label: 'Visual\nDesigner', accent: true },
      { label: 'Voyager' },
    ],
    [],
  )

  return (
    <div className="min-h-dvh bg-white">
      <div className="mx-auto w-full max-w-[414px]">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="h-full w-1/2 bg-[rgba(239,70,55,0.10)]" />
          </div>

          <div className="relative px-6 pt-10">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)]"
              aria-label="Go back"
            >
              <span className="text-[color:var(--color-accent)]">
                <Icon src="./assets/icons/arrow-left.svg" alt="" size={22} />
              </span>
            </button>

            <div className="mt-4 flex flex-col items-center text-center">
              <img
                src="./assets/images/avatar-worker.png"
                alt="Tobi Lateef"
                className="h-[117px] w-[117px] rounded-full object-cover ring-4 ring-white"
              />
              <p className="mt-4 font-[var(--font-display)] text-[22px] font-semibold text-[color:var(--color-text)]">
                Tobi Lateef
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 pb-8">
              <div className="col-span-2 text-right font-[var(--font-display)] text-[16px] font-medium text-[color:var(--color-text)]">
                Profile
              </div>
              <div className="font-[var(--font-display)]">
                <p className="text-[12px] font-medium text-[color:var(--color-text)]">Profession</p>
                <p className="text-[12px] text-[color:var(--color-accent)]">Contractor</p>
              </div>
              <div className="font-[var(--font-display)]">
                <p className="text-[12px] font-medium text-[color:var(--color-text)]">Contact</p>
                <p className="text-[12px] text-[color:var(--color-accent)]">+234 808 2344 4675</p>
              </div>
              <div className="font-[var(--font-display)]">
                <p className="text-[12px] font-medium text-[color:var(--color-text)]">Location</p>
                <p className="text-[12px] text-[color:var(--color-accent)]">Lagos</p>
              </div>
              <div className="flex items-center justify-between font-[var(--font-display)]">
                <div>
                  <p className="text-[12px] font-medium text-[color:var(--color-text)]">Position</p>
                  <div className="mt-1 flex items-center gap-2">
                    <Switch
                      checked={isOpen}
                      onCheckedChange={setIsOpen}
                      label="Position open"
                      variant="accent"
                    />
                    <p className="text-[12px] text-[color:var(--color-accent)]">open</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white px-6 pb-8 pt-4">
          <p className="text-center font-[var(--font-display)] text-[14px] font-medium text-[color:var(--color-text)]">
            Jobs done
          </p>

          <div className="mt-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-5">
              {chips.map((c, idx) => (
                <button
                  key={c.label}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={clsx(
                    'flex h-[56px] w-[82px] items-center justify-center rounded-[10px] bg-white px-2 text-center',
                    'shadow-[0_4px_14px_rgba(16,24,40,0.10)]',
                    'font-[var(--font-display)] text-[11px] font-medium leading-[14px]',
                    idx === active ? 'text-[color:var(--color-accent)]' : 'text-[color:var(--color-text)]',
                  )}
                >
                  <span className="whitespace-pre-line">{c.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-1 flex items-center justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={clsx(
                  'h-2 w-2 rounded-full',
                  i === active ? 'bg-[color:var(--color-accent)]' : 'bg-[rgba(239,70,55,0.25)]',
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <section className="bg-[color:var(--color-accent)] px-6 py-10 text-white">
          <div className="grid grid-cols-2 gap-y-8 gap-x-10 font-[var(--font-display)]">
            <div>
              <p className="text-[44px] leading-none">4.3</p>
              <p className="mt-1 text-[10px] opacity-90">Average Rating</p>
            </div>
            <div className="text-right">
              <p className="text-[44px] leading-none">37</p>
              <p className="mt-1 text-[10px] opacity-90">Jobs Completed</p>
            </div>
            <div>
              <p className="text-[10px] opacity-90">pay range</p>
              <p className="mt-2 text-[26px] leading-none">150k - 200k</p>
              <p className="mt-1 text-[10px] opacity-90">(negotiable)</p>
            </div>
            <div className="text-right">
              <p className="text-[44px] leading-none">02</p>
              <p className="mt-1 text-[10px] opacity-90">ongoing</p>
            </div>
            <div>
              <p className="text-[10px] opacity-90">Availability</p>
              <p className="mt-1 text-[12px]">Excellent</p>
            </div>
            <div className="flex justify-between gap-10">
              <div>
                <p className="text-[10px] opacity-90">Service</p>
                <p className="mt-1 text-[12px]">Good</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] opacity-90">Quality</p>
                <p className="mt-1 text-[12px]">Good</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
