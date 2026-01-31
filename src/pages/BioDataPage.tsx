import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { TextField } from '../components/ui/TextField'

type Errors = Partial<Record<'firstName' | 'lastName' | 'phone' | 'gender' | 'dob', string>>

export default function BioDataPage() {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    gender: '',
    dob: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const genderOptions = useMemo(() => ['Female', 'Male', 'Other'], [])

  function validate(next = values) {
    const nextErrors: Errors = {}
    if (!next.firstName.trim()) nextErrors.firstName = 'First name is required.'
    if (!next.lastName.trim()) nextErrors.lastName = 'Last name is required.'
    if (!next.phone.trim()) nextErrors.phone = 'Phone number is required.'
    if (!next.gender.trim()) nextErrors.gender = 'Gender is required.'
    if (!next.dob.trim()) nextErrors.dob = 'Date of birth is required.'
    return nextErrors
  }

  async function onSubmit() {
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setIsSubmitting(true)
    try {
      await new Promise((r) => setTimeout(r, 650))
      navigate('/profile')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-dvh bg-[color:var(--color-bg)]">
      <div className="mx-auto w-full max-w-[375px] px-4 pt-6">
        <header className="relative flex items-center justify-center">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="absolute left-0 inline-flex h-10 w-10 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)]"
            aria-label="Go back"
          >
            <Icon src="./assets/icons/arrow-left.svg" alt="" size={22} />
          </button>
          <h1 className="text-[14px] font-medium text-[color:var(--color-text)]">Bio-data</h1>
        </header>

        <div className="mt-8 flex flex-col items-center text-center">
          <img
            src="./assets/images/avatar-biodata.png"
            alt="Profile avatar"
            className="h-[78px] w-[78px] rounded-full object-cover ring-2 ring-[color:var(--color-accent)]"
          />
          <p className="mt-4 text-[16px] font-bold text-[color:var(--color-text)]">Itunuoluwa Abidoye</p>
          <p className="mt-1 text-[13px] text-[color:var(--color-muted)]">Itunuoluwa@petra.africa</p>
        </div>

        <form
          className="mt-10 space-y-0 overflow-hidden rounded-[10px] bg-white shadow-[0_4px_44px_rgba(0,0,0,0.06)]"
          onSubmit={(e) => {
            e.preventDefault()
            onSubmit()
          }}
        >
          <TextField
            label="First name"
            placeholder="What’s your first name?"
            value={values.firstName}
            onChange={(firstName) => {
              const next = { ...values, firstName }
              setValues(next)
              setErrors((prev) => ({ ...prev, firstName: validate(next).firstName }))
            }}
            error={errors.firstName}
            autoComplete="given-name"
          />
          <TextField
            label="Last name"
            placeholder="And your last name?"
            value={values.lastName}
            onChange={(lastName) => {
              const next = { ...values, lastName }
              setValues(next)
              setErrors((prev) => ({ ...prev, lastName: validate(next).lastName }))
            }}
            error={errors.lastName}
            autoComplete="family-name"
          />
          <div className="flex h-[54px] items-center gap-3 bg-white px-4 border-b border-[color:var(--color-divider)] focus-within:border-[color:var(--color-primary)]">
            <img
              src="./assets/images/ng-flag.png"
              alt="Nigeria"
              className="h-6 w-6 rounded-sm object-cover"
              loading="lazy"
            />
            <input
              value={values.phone}
              onChange={(e) => {
                const phone = e.target.value
                const next = { ...values, phone }
                setValues(next)
                setErrors((prev) => ({ ...prev, phone: validate(next).phone }))
              }}
              placeholder="Phone number"
              inputMode="tel"
              autoComplete="tel"
              className="h-full w-full bg-transparent text-[13px] leading-[19.5px] text-[color:var(--color-ink)] outline-none placeholder:text-[color:rgba(85,85,85,0.70)]"
            />
          </div>
          {errors.phone ? (
            <p className="px-4 pb-4 text-xs text-[color:var(--color-accent)]">{errors.phone}</p>
          ) : null}

          <div className="relative">
            <select
              value={values.gender}
              onChange={(e) => {
                const gender = e.target.value
                const next = { ...values, gender }
                setValues(next)
                setErrors((prev) => ({ ...prev, gender: validate(next).gender }))
              }}
              className="h-[54px] w-full appearance-none bg-white px-4 pr-12 text-[13px] leading-[19.5px] text-[color:var(--color-ink)] outline-none border-b border-[color:var(--color-divider)] focus:border-[color:var(--color-primary)]"
            >
              <option value="" disabled>
                Select your gender
              </option>
              {genderOptions.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 opacity-70">
              <Icon src="./assets/icons/chevron-right.svg" alt="" size={12} className="rotate-90" />
            </div>
          </div>
          {errors.gender ? (
            <p className="px-4 pb-4 text-xs text-[color:var(--color-accent)]">{errors.gender}</p>
          ) : null}

          <div className="flex h-[54px] items-center gap-3 bg-white px-4 border-b border-[color:var(--color-divider)] focus-within:border-[color:var(--color-primary)]">
            <input
              value={values.dob}
              onChange={(e) => {
                const dob = e.target.value
                const next = { ...values, dob }
                setValues(next)
                setErrors((prev) => ({ ...prev, dob: validate(next).dob }))
              }}
              placeholder="What is your date of birth?"
              inputMode="numeric"
              className="h-full w-full bg-transparent text-[13px] leading-[19.5px] text-[color:var(--color-ink)] outline-none placeholder:text-[color:rgba(85,85,85,0.70)]"
            />
            <Icon src="./assets/icons/calendar.svg" alt="" size={16} />
          </div>
          {errors.dob ? (
            <p className="px-4 pb-4 text-xs text-[color:var(--color-accent)]">{errors.dob}</p>
          ) : null}

          <div className="bg-[color:var(--color-bg)] px-4 py-6">
            <Button type="submit" isLoading={isSubmitting}>
              Update Profile
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
