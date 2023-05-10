import Link from "next/link";
import "../community/community.css";

const Channel = () => {
  return (
    <div
      className="flex flex-wrap w-full gap-14 pt-24 pb-24 px-4 lg:px-24 justify-center relative right-markbar"
      // style={{ background: "linear-gradient(280.57deg, rgba(10, 35, 252, 0.5) 0%, rgba(0, 8, 77, 0) 35%)" }}
    >
      {Channels.map((channel, index) => (
        <div
          className="w-60 lg:w-[370px] h-50 lg:h-[270px] py-5 px-3 lg:px-7 rounded-lg" key={index}
          style={{
            background: "linear-gradient(125.84deg, rgba(50, 181, 255, 0.7) 6.42%, rgba(0, 26, 255, 0.7) 49.21%, rgba(50, 181, 255, 0.7) 94.38%)"
          }}
        >
          <h1 className="text-2xl lg:text-4xl font-semibold">{channel.title}</h1>
          <p className="text-sm lg:text-base !leading-[150%] h-28 mt-6">{channel.content}</p>
          <div className="mt-2">
            <Link href={channel.route} className="text-base lg:text-xl text-[#78DFFF] font-semibold mt-2">
              {channel.label}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Channel;

const Channels = [
  {
    title: "Documentation",
    content: "Guides to develop applications for the CodeX blockchain, run nodes, and get involved in the Codex ecosystem.",
    label: "Get Started",
    route: ""
  },
  {
    title: "Discussion Forum",
    content: "Participate in open discussions across various threads, explore opportunities to collaborate, and get more involved in projects building on CodeX.",
    label: "Get Involved",
    route: ""
  },
  {
    title: "Telegram",
    content: "Join our Telegram to chat with us directly, take part in our growing ecosystem.",
    label: "Join Us",
    route: ""
  },
]