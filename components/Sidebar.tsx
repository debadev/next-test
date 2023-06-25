import SidebarLink from "./SidebarLink";

const links = [
  { label: "Search", link: "/home" },
  {
    label: "Experts",
    link: "/experts",
    childs: [
      { label: "Ask an Expert", link: "/askexpert" },
      { label: "Search", link: "/expertsearch" },
    ],
  },
  { label: "Topics", link: "/topics" },
];

const Sidebar = () => {
  return (
    <div>
      {links.map((link: any) => (
        <SidebarLink link={link} />
      ))}
    </div>
  );
};

export default Sidebar;
