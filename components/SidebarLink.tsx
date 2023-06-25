import Link from "next/link";

type LinkType = {
  label: string;
  link: string;
  childs: LinkType[];
};

const SidebarLink = ({ link }: { link: LinkType }) => {
  return (
    <div>
      {link.childs && link.childs.length > 0 ? (
        <div className="relative">
          <button className="p-4">{link.label}</button>
          <div>
            {link.childs.map((child: LinkType) => (
              <Link href={child.link}>{child.label}</Link>
            ))}
          </div>
        </div>
      ) : (
        <Link href={link.link}>{link.label}</Link>
      )}
    </div>
  );
};

export default SidebarLink;
