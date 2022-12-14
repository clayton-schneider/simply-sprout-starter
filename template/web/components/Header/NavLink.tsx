import Link from "next/link";

interface INavLinkProps {
  link: string;
  linkText: string;
  className?: string | null;
}

const NavLink = ({ link, linkText, className }: INavLinkProps) => {
  return (
    <Link href={link ? `/${link}` : "/404"}>
      <span className={className + " cursor-pointer"}>
        {linkText ? linkText : "Link Text"}
      </span>
    </Link>
  );
};

export default NavLink;
