"use client";
import Link from "next/link";
import { Children, useState } from "react";
import { isJsxOpeningLikeElement } from "typescript";
import { useRouter } from "next/navigation";

const SidebarLink = ({ link }: { link: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleToggle = () => {
    if (link.childs) {
      setIsOpen(!isOpen);
    } else {
      router.push(link.link);
    }
  };
  return (
    <li className="relative">
      <button
        className="nav-item flex items-center justify-between w-full p-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
        onClick={handleToggle}
      >
        <span>{link.label}</span>
        {link.childs && (
          <svg
            className={`w-4 h-4 transition-transform transform ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6.707 8.293a1 1 0 0 1 1.414 0L10 10.586l1.879-1.879a1 1 0 1 1 1.414 1.414l-2.586 2.586a1 1 0 0 1-1.414 0L6.707 9.707a1 1 0 0 1 0-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <ul className="subnav pl-4">
          {link.childs &&
            link.childs.map((childItem: any, index: any) => (
              <li key={index}>
                <a
                  href={childItem.link}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  {childItem.label}
                </a>
              </li>
            ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarLink;
