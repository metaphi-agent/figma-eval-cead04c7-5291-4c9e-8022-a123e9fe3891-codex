import MobileViewport from '../components/layout/MobileViewport'

export default function DribbbleShot4Page() {
  return (
    <MobileViewport className="bg-[#F1F1FF]">
      <div className="min-h-screen flex items-center justify-center px-6">
        <img
          src="./assets/images/dribbble-shot-4.png"
          alt="Dribbble shot"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </MobileViewport>
  )
}
