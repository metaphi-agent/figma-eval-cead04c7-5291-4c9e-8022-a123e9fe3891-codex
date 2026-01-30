import MobileViewport from '../components/layout/MobileViewport'

function Chip({ label }: { label: string }) {
  return (
    <div className="min-w-[74px] h-[44px] bg-white rounded-[10px] shadow-[0_10px_24px_rgba(0,0,0,0.12)] grid place-items-center px-3">
      <div className="text-[10px] text-[#F04438] text-center leading-3 whitespace-pre-line">
        {label}
      </div>
    </div>
  )
}

export default function IphoneProfilePage() {
  return (
    <MobileViewport className="bg-white">
      <div className="min-h-screen grid grid-cols-2">
        <div className="bg-[#FFF0F0] px-6 pt-10">
          <button
            type="button"
            className="w-10 h-10 rounded-full grid place-items-center hover:bg-black/5 active:bg-black/10 transition-colors duration-150"
            aria-label="Back"
          >
            <span className="text-[#F04438] text-[20px] leading-none">‹</span>
          </button>

          <div className="mt-8 flex flex-col items-center">
            <div className="w-[110px] h-[110px] rounded-full bg-white grid place-items-center shadow-[0_16px_40px_rgba(0,0,0,0.14)]">
              <img
                src="./assets/images/avatar.png"
                alt="Profile avatar"
                className="w-[96px] h-[96px] rounded-full object-cover"
              />
            </div>
            <div className="mt-5 text-[22px] font-bold text-[var(--color-ink)]">Tobi Lateef</div>
          </div>
        </div>

        <div className="px-6 pt-10">
          <div className="text-right text-[14px] font-medium text-[var(--color-ink)]">Profile</div>

          <div className="mt-10 space-y-4">
            <div>
              <div className="text-[12px] text-black/60">Profession</div>
              <div className="text-[12px] text-[#F04438]">Contractor</div>
            </div>
            <div>
              <div className="text-[12px] text-black/60">Contact</div>
              <div className="text-[12px] text-[#F04438]">+234 808 2344 4675</div>
            </div>
            <div>
              <div className="text-[12px] text-black/60">Location</div>
              <div className="text-[12px] text-[#F04438]">Lagos</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[12px] text-black/60">Position</div>
              <div className="w-8 h-4 rounded-full bg-black/20 relative">
                <div className="absolute left-1 top-1 w-2 h-2 rounded-full bg-[#F04438]" />
              </div>
              <div className="text-[12px] text-[#F04438]">open</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="text-center text-[12px] text-black/60 font-medium mt-2">
          Jobs done
        </div>
        <div className="mt-4 px-6 flex gap-3 overflow-x-auto pb-4">
          <Chip label={'Product\\nDesign'} />
          <Chip label={'Front end'} />
          <Chip label={'Visual\\nDesigner'} />
          <Chip label={'Voyager'} />
        </div>

        <div className="flex items-center justify-center gap-2 pb-5">
          <div className="w-2 h-2 rounded-full bg-[#F04438]" />
          <div className="w-2 h-2 rounded-full bg-black/10" />
          <div className="w-2 h-2 rounded-full bg-black/10" />
        </div>

        <div className="bg-[#F04438] text-white px-8 py-10">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <div className="text-[52px] font-bold leading-none">4.3</div>
              <div className="mt-1 text-[10px] opacity-90">Average Rating</div>
            </div>
            <div>
              <div className="text-[52px] font-bold leading-none">37</div>
              <div className="mt-1 text-[10px] opacity-90">Jobs Completed</div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-10">
            <div>
              <div className="text-[10px] opacity-90">pay range</div>
              <div className="mt-1 text-[22px] font-bold leading-none">150k - 200k</div>
              <div className="mt-1 text-[10px] opacity-90">(negotiable)</div>
            </div>
            <div>
              <div className="text-[52px] font-bold leading-none">02</div>
              <div className="mt-1 text-[10px] opacity-90">ongoing</div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-8">
            <div>
              <div className="text-[10px] opacity-90">Availability</div>
              <div className="text-[10px]">Excellent</div>
            </div>
            <div>
              <div className="text-[10px] opacity-90">Service</div>
              <div className="text-[10px]">Good</div>
            </div>
            <div>
              <div className="text-[10px] opacity-90">Quality</div>
              <div className="text-[10px]">Good</div>
            </div>
          </div>
        </div>
      </div>
    </MobileViewport>
  )
}
