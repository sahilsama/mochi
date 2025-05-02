import React from "react";

function Landingpage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-2">
      <div className="textstructure mt-50 ml-7">
        {["WE CREATE", "EYE OPENING", "PRESENTATION"].map((items, index) => {
          return (
            <div className="masker">
              <h1 className="uppercase text-[7.5vw] leading-[6vw]  tracking-tighter  font-bold">
                {items}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
        "For public and private companies", 
        "From the first pitch to IPO"
        ].map((items, index) => (
          <p className="text-md font-light tracking-tight leading-none mb-15">{items}
          </p>
        ))}

        <div className="start">
            <div className="px-4 py-4 border-[1px] border-zinc-700 font-light text-sm rounded-full ">
                start the project
                <div className="w-3 rounded-full"></div>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
