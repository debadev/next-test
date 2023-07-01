import SidebarLink from "./SidebarLink";

const links = [
  { label: "Search", link: "/ai/search" },
  {
    label: "Experts",
    link: "/experts",
    childs: [
      { label: "Ask an Expert", link: "/ai/expert/ask" },
      { label: "Search", link: "/expertsearch" },
    ],
  },
  { label: "Topics", link: "/ai/topics" },
];

const Sidebar = () => {
  return (
    <nav className="navbar bg-gray-800 h-screen w-24 flex justify-center items-center">
      <ul className="nav space-y-2 w-full">
        {links.map((item, index) => (
          <SidebarLink key={index} link={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
