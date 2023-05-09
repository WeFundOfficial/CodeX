import Link from "next/link";

const Channel = () => {
  return (
    <div className="flex flex-wrap w-full gap-14 pt-4 pb-24 px-4 lg:px-24 justify-center relative right-markbar">
      {Channels.map((channel, index) => (
        <div
          className="w-60 lg:w-[370px] h-50 lg:h-[270px] py-5 px-3 lg:px-7 rounded-lg" key={index}
          style={{
            background: "linear-gradient(125.84deg, rgba(50, 181, 255, 0.7) 6.42%, rgba(0, 26, 255, 0.7) 49.21%, rgba(50, 181, 255, 0.7) 94.38%)"
          }}
        >
          <h1 className="text-2xl lg:text-4xl">{channel.title}</h1>
          <p className="text-sm lg:text-base leading-[150%] h-28 mt-6">{channel.content}</p>
          <div className="mt-2">
            <Link href={channel.route} className="text-base lg:text-xl mt-2">{channel.label}</Link>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Channel;

const Channels = [
  {
    title: "Discussion Forum",
    content: "Participate in open discussions across various threads, explore opportunities to collaborate, and get more involved in projects building on CodeX.",
    label: "Get Involved",
    route: ""
  },
  {
    title: "Documentation",
    content: "Guides to develop applications for the CodeX blockchain, run nodes, and get involved in the Codex ecosystem.",
    label: "Get Started",
    route: ""
  },
  {
    title: "Telegram",
    content: "Join our Telegram to chat with us directly, take part in our growing ecosystem.",
    label: "Join Us",
    route: ""
  },
  {
    title: "Whitepaper",
    content: "The vision for the CodeX blockchain is to make blockchain to be mass adoption, seamless, safe, no-limit and upgradeable.",
    label: "Explore Whitepaper",
    route: ""
  },
  {
    title: "Foundation",
    content: "The vision for the CodeX blockchain is to make blockchain to be mass adoption, seamless, safe, no-limit and upgradeable.",
    label: "Get To Know",
    route: ""
  },
  {
    title: "Github",
    content: "Lets begin the journey and be part of CodeX, either start project on CodeX or veteran developer contributor. ",
    label: "Learn more",
    route: ""
  },
]