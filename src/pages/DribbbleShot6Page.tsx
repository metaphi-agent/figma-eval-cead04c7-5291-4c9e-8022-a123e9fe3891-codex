import MobileViewport from '../components/layout/MobileViewport'

export default function DribbbleShot6Page() {
  return (
    <MobileViewport className="bg-[#FFF0F0]">
      <div className="min-h-screen flex items-center justify-center px-6">
        <img
          src="./assets/images/dribbble-shot-6.png"
          alt="Dribbble shot"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </MobileViewport>
  )
}
