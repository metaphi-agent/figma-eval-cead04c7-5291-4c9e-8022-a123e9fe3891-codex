import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import MobileViewport from '../components/layout/MobileViewport'
import MaskedIcon from '../components/ui/MaskedIcon'

type FieldErrors = Partial<Record<'firstName' | 'lastName' | 'phone' | 'gender' | 'dob', string>>

function TextField({
  value,
  onChange,
  placeholder,
  rightIcon,
  leftAdornment,
  error,
}: {
  value: string
  onChange: (value: string) => void
  placeholder: string
  rightIcon?: string
  leftAdornment?: React.ReactNode
  error?: string
}) {
  return (
    <div className="w-full">
      <div className="bg-white px-4 h-[52px] flex items-center gap-3 border border-black/5">
        {leftAdornment ? <div className="shrink-0">{leftAdornment}</div> : null}
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 text-[13px] outline-none placeholder:text-[#9A9A9A]"
        />
        {rightIcon ? (
          <MaskedIcon src={rightIcon} className="w-4 h-4 text-[var(--color-primary)]" />
        ) : null}
      </div>
      {error ? <div className="mt-1 text-[11px] text-[var(--color-danger)]">{error}</div> : null}
    </div>
  )
}

export default function BioDataPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FieldErrors>({})

  const validate = useMemo(() => {
    return () => {
      const next: FieldErrors = {}
      if (!firstName.trim()) next.firstName = 'First name is required'
      if (!lastName.trim()) next.lastName = 'Last name is required'
      if (!phone.trim()) next.phone = 'Phone number is required'
      if (!gender.trim()) next.gender = 'Select your gender'
      if (!dob.trim()) next.dob = 'Date of birth is required'
      setErrors(next)
      return Object.keys(next).length === 0
    }
  }, [dob, firstName, gender, lastName, phone])

  async function onSubmit() {
    if (!validate()) return
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 600))
    setIsSubmitting(false)
  }

  return (
    <MobileViewport className="bg-white">
      <div className="px-6 pt-10 pb-10">
        <div className="flex items-center justify-between">
          <Link
            to="/profile"
            className="w-10 h-10 rounded-full grid place-items-center hover:bg-black/5 active:bg-black/10 transition-colors duration-150"
            aria-label="Back"
          >
            <span className="text-[20px] leading-none text-[var(--color-ink)]">‹</span>
          </Link>
          <div className="text-[14px] font-medium text-[var(--color-ink)]">Bio-data</div>
          <div className="w-10" />
        </div>

        <div className="mt-10 flex flex-col items-center">
          <div className="w-[62px] h-[62px] rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] grid place-items-center">
            <img
              src="./assets/images/avatar.png"
              alt="User avatar"
              className="w-[56px] h-[56px] rounded-full object-cover"
            />
          </div>

          <div className="mt-4 text-[16px] font-bold text-[var(--color-ink)]">
            Itunuoluwa Abidoye
          </div>
          <div className="mt-1 text-[12px] text-black/40">Itunuoluwa@petra.africa</div>
        </div>

        <div className="mt-10 space-y-4">
          <TextField
            value={firstName}
            onChange={setFirstName}
            placeholder="What's your first name?"
            error={errors.firstName}
          />
          <TextField
            value={lastName}
            onChange={setLastName}
            placeholder="And your last name?"
            error={errors.lastName}
          />

          <TextField
            value={phone}
            onChange={setPhone}
            placeholder="Phone number"
            error={errors.phone}
            leftAdornment={
              <div className="flex items-center gap-2 pr-2 border-r border-black/10">
                <div className="w-5 h-3 rounded-[2px] bg-gradient-to-r from-green-600 via-white to-green-600 border border-black/10" />
              </div>
            }
          />

          <TextField
            value={gender}
            onChange={setGender}
            placeholder="Select your gender"
            error={errors.gender}
            rightIcon="./assets/icons/chevron.svg"
          />

          <TextField
            value={dob}
            onChange={setDob}
            placeholder="What is your date of birth?"
            error={errors.dob}
            rightIcon="./assets/icons/tab-requests.svg"
          />
        </div>

        <button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          className="mt-10 w-full h-[54px] rounded-[12px] bg-[var(--color-primary)] text-white font-medium text-[14px] shadow-[0_10px_26px_rgba(6,1,180,0.28)] transition-colors duration-150 disabled:opacity-70"
        >
          {isSubmitting ? 'Updating…' : 'Update Profile'}
        </button>
      </div>
    </MobileViewport>
  )
}
