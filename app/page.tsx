import React from 'react';
import Header from './components/Header';

const HomePage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center">
      <Header />
        
      <div className=" flex flex-row h-[85%] lg:ml-32">
        <div className="w-full lg:w-2/3 flex flex-col text-left ml-3">       
          <h1 className="text-[#000000] font-bold text-[28px] md:text-[32px] lg:text-[40px] lg:w-[496px] pt-40">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>         
          <p className="text-[#787054] font-medium text-[18px] lg:text-[30px] max-w-[902px] h-auto flex pt-2 pb-5 mb-14">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>         
          <button className="bg-[#A29875] text-[#FFFFFF] font-medium text-[18px] lg:text-[24px] p-3  rounded-[10px] w-[200px] md:w-[250px] lg:w-[288px]">
            Explore Now
          </button>
        </div>

        <div className="relative lg:w-1/3 flex justify-center items-center mt-16 pr-10">         
          <div className="relative h-auto">
            <div className="m-[4%] absolute inset-0 border-[1px] border-[#FFFFFF] rounded-[50px_0px_50px_0px] lg:rounded-[150px_0px_150px_0px]">
            </div>  
            <img 
              src="/images/slider-1.jpg.svg" 
              alt="Jewelry Display" 
              className="object-contain rounded-[50px_0px_50px_0px] lg:rounded-[150px_0px_150px_0px]"
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;