import "./token.scss";

export default function AppCard() {
  return (
    <div className="appcard p-[24px]">
      <div className="applogo mb-[24px]">
        <img src="./applogo.jpg" alt="logo" className="w-full h-[100px]" />
      </div>
      <div className="titlecontent">
        <div className="app-name font-medium text-[16px] mb-[6px]">InfinCE</div>
        <div className="app-info font-normal text-[14px]">
          InfinCE is more than just a digital workplace. It’s a future-proof
          enterprise cloud solution that brings together all the essential
          productivity tools and operational apps in one place.
        </div>
      </div>
      <div className="rating flex h-[24px] gap-2 content-center mt-[16px] mb-[24px]">
        <img src="./rating.png" alt="logo" className="h-[16px]" />
        <div className="rate-count font-medium text-[14px]">4.6k Rating</div>
      </div>
      <div className="button flex justify-center h-[40px] w-full">
        <button className="btn-label font-medium text-[16px] w-full">
          Buy
        </button>
      </div>
    </div>
  );
}
