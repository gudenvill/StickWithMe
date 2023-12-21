import type { NextPage } from "next";

const Main: NextPage = () => {
  return (
    <div className="bg-gray w-[1440px] h-[367px] overflow-hidden text-left text-mid text-slateblue font-dm-sans">
      <img
        className="absolute top-[33px] left-[667px] w-[106px] h-[77px] object-cover"
        alt=""
        src="/images/frame-9-1@2x.png"
      />
      <div className="absolute top-[145px] left-[389px] bg-white w-[661px] h-[5px] opacity-[0.1] mix-blend-normal" />
      <div className="absolute bottom-[104px] left-[calc(50%_+_65px)] rounded-lg bg-pink w-[175px] h-[59px] text-center">
        <b className="absolute top-[calc(50%_-_29.5px)] left-[calc(50%_-_87.5px)] flex items-center justify-center w-[175px] h-[59px]">
          Get started
        </b>
      </div>
      <div className="absolute top-[calc(50%_-_20.5px)] left-[52.71%] text-[22px] tracking-[-0.3px] text-white">
        Ready to get started?
      </div>
      <div className="absolute top-[166px] left-[409px] w-[212px] h-[98px] text-pink">
        <a className="[text-decoration:none] absolute top-[calc(50%_-_49px)] left-[4.25%] tracking-[-0.23px] text-[inherit]">
          About
        </a>
        <a className="[text-decoration:none] absolute top-[calc(50%_-_11px)] left-[7.08%] tracking-[-0.23px] text-[inherit]">
          Help
        </a>
        <a className="[text-decoration:none] absolute top-[calc(50%_+_27px)] left-[0%] tracking-[-0.23px] text-[inherit]">
          Services
        </a>
        <a className="[text-decoration:none] absolute top-[calc(50%_-_48px)] left-[68.4%] text-mini tracking-[-0.2px] text-white">
          Our Story
        </a>
        <a className="[text-decoration:none] absolute top-[calc(50%_-_10px)] left-[64.15%] text-mini tracking-[-0.2px] text-white">
          Contact Us
        </a>
        <a className="[text-decoration:none] absolute top-[calc(50%_+_28px)] left-[75%] text-mini tracking-[-0.2px] text-white">
          Team
        </a>
      </div>
    </div>
  );
};

export default Main;
