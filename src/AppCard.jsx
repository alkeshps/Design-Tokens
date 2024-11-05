export default function AppCard() {
  return (
    <div className="main p-[24px] bg-white rounded-[24px] hover:border-[#E81E1E] hover:border-[2px] border-[2px] border-[#FFFFFF] hover:border-opacity-25">
      <div className="applogo mb-[24px]">
        <img src="./applogo.jpg" alt="logo" className="w-full h-[100px]" />
      </div>
      <div className="titlecontent">
        <div className="font-medium text-[16px] mb-[6px]">InfinCE</div>
        <div className="font-normal text-[14px] text-[#606060]">
          InfinCE is more than just a digital workplace. It’s a future-proof
          enterprise cloud solution that brings together all the essential
          productivity tools and operational apps in one place.
        </div>
      </div>
      <div className="rating flex h-[24px] gap-2 content-center mt-[16px] mb-[24px]">
        <img src="./rating.png" alt="logo" className="h-[16px]" />
        <div className="font-medium text-[14px]">4.6k Rating</div>
      </div>
      <div className="button bg-[#E81E1E] flex justify-center h-[40px] w-full rounded-lg">
        <button className="font-medium text-[16px] text-white w-full">
          Buy
        </button>
      </div>
    </div>
  );
}
