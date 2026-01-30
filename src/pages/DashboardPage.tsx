import MobileViewport from '../components/layout/MobileViewport'
import BottomTabBar from '../components/navigation/BottomTabBar'

function MiniHouseCard({
  label,
  showPlus,
}: {
  label: string
  showPlus?: boolean
}) {
  return (
    <div className="w-[78px] h-[92px] bg-white rounded-[10px] shadow-[0_10px_26px_rgba(0,0,0,0.10)] px-2 py-3 flex flex-col items-center justify-between">
      <div className="w-10 h-10 rounded-full bg-[#F0F0F0] grid place-items-center">
        {showPlus ? (
          <div className="w-8 h-8 rounded-full bg-[#F04438] text-white grid place-items-center text-[18px] leading-none">
            +
          </div>
        ) : (
          <img
            src="./assets/images/avatar.png"
            alt=""
            className="w-8 h-8 rounded-full object-cover"
            loading="lazy"
          />
        )}
      </div>
      <div className="text-[11px] text-[var(--color-ink)] font-medium text-center leading-4">
        <span className="whitespace-pre-line">{label}</span>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <MobileViewport className="bg-white">
      <div className="px-5 pt-10 pb-[92px]">
        <div className="flex items-center justify-between">
          <div className="text-[14px] font-medium text-[var(--color-ink)]">Profile</div>
          <button
            type="button"
            className="w-10 h-10 rounded-full grid place-items-center hover:bg-black/5 active:bg-black/10 transition-colors duration-150"
            aria-label="Menu"
          >
            <div className="space-y-1">
              <div className="w-4 h-[2px] bg-[#F04438] rounded-full" />
              <div className="w-4 h-[2px] bg-[#F04438] rounded-full" />
              <div className="w-4 h-[2px] bg-[#F04438] rounded-full" />
            </div>
          </button>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <div className="w-[56px] h-[56px] rounded-full bg-[#FFE5E5] grid place-items-center">
            <img
              src="./assets/images/avatar.png"
              alt="User avatar"
              className="w-[48px] h-[48px] rounded-full object-cover"
            />
          </div>
          <div>
            <div className="text-[18px] font-bold text-[var(--color-ink)] leading-6">
              Adewale Taiwo
            </div>
            <div className="text-[12px] text-[#F04438]">House Manager</div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-[#FFF0F0] rounded-[16px] shadow-[0_10px_26px_rgba(0,0,0,0.10)] px-5 py-5">
            <div className="text-[11px] text-black/60 font-medium">Wallet Balance:</div>
            <div className="mt-1 text-[18px] font-bold text-[#F04438]">$5046.57</div>
            <div className="mt-3 text-[11px] text-black/60 font-medium">Total Service</div>
            <div className="mt-1 text-[16px] font-bold text-[#F04438]">24</div>
          </div>

          <div className="bg-[#F04438] rounded-[16px] shadow-[0_10px_26px_rgba(0,0,0,0.10)] px-5 py-5 text-white">
            <div className="text-[11px] opacity-90 text-right">Master Card</div>
            <div className="mt-5 text-[14px] font-bold">5999-XXXX</div>
            <div className="mt-1 text-[14px] font-bold">Adewale T.</div>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-between">
          <div className="text-[14px] font-bold text-[var(--color-ink)]">Houses</div>
        </div>

        <div className="mt-4 flex gap-4">
          <MiniHouseCard label={'Add\\nWorkers'} showPlus />
          <MiniHouseCard label={'Tobi\\nLateef'} />
          <MiniHouseCard label={'Queen\\nNeedle'} />
          <MiniHouseCard label={'Joan\\nBlessing'} />
        </div>

        <div className="mt-7 flex items-center justify-between">
          <div className="text-[14px] font-bold text-[var(--color-ink)]">Services</div>
          <div className="text-[12px] font-medium text-[#F04438]">All</div>
        </div>

        <div className="mt-4 space-y-4">
          <div className="bg-white rounded-[16px] shadow-[0_12px_28px_rgba(0,0,0,0.12)] px-6 py-5 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFF0F0] grid place-items-center">
              <div className="w-5 h-5 bg-[#F04438] rounded-[4px]" />
            </div>
            <div className="text-[16px] font-bold text-[var(--color-ink)]">Electrical</div>
          </div>

          <div className="bg-white rounded-[16px] shadow-[0_12px_28px_rgba(0,0,0,0.12)] px-6 py-5 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFF0F0] grid place-items-center">
              <div className="w-5 h-5 bg-[#F04438] rounded-[4px]" />
            </div>
            <div className="text-[16px] font-bold text-[var(--color-ink)]">Others</div>
          </div>
        </div>
      </div>

      <BottomTabBar />
    </MobileViewport>
  )
}
