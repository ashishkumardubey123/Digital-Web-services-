"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const [navbar, setNavbar] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menu = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/service" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
   <nav
  className={`
     fixed  top-0 inset-x-0 z-[100]

    border
    ${
    isSticky
        ? " transition-all duration-500 ease-out md:translate-y-3 md:w-3/4 lg:w-4/5 mx-auto md:rounded-3xl backdrop-blur-xl shadow-4xl border-gray-400"
        : "w-full bg-transparent border-transparent  "
    }
  `}
  style={
    isSticky
      ? {
          background:
            "linear-gradient(143.6deg, rgba(29, 78, 216, 0) 20.79%, rgba(29, 78, 216, 0.28) 40.92%, rgba(29, 78, 216, 0) 70.35%)",
        }
      : {
          background: "transparent",
        }
  }
>
      <div className="px-4 mx-auto lg:max-w-7xl md:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* LEFT — LOGO */}
          <Link href="/" className="flex gap-1 items-center">
            <img
              src=".\Nav-logo.png"
              alt="logo"
             
              className="w-14 rounded-full w-50 h-13 shadow-md"
            />
            <span className="font-satoshi text-sm font-bold "> Digital Web-Services </span>
          </Link>

          {/* CENTER — MENU */}
          <ul className="hidden md:flex items-center font-satoshi gap-10 absolute left-1/2 -translate-x-1/2">
            {menu.map((item) => {
              const active = pathname === item.path;
              return (
                <Link key={item.name} href={item.path}>
                  <li
                    className={`
                      relative text-lg font-medium hover:text-violet-600   cursor-pointer transition
                      ${active ? "text-purple-500" : "  "}
                    `}
                  >
                    {item.name}
                    <span
                      className={`
                        absolute -bottom-1 left-0 h-[2px] bg-purple-500 transition-all duration-300
                        ${active ? "w-full" : "w-0 hover:w-full"}
                      `}
                    />
                  </li>
                </Link>
              );
            })}
          </ul>

          {/* RIGHT — CTA BUTTON */}
          <div className="hidden md:block">
            <a
              href="tel:9302300834"
              className="
                relative overflow-hidden
                px-5 py-2 rounded-full text-white font-medium
                bg-purple-600
                transition-all duration-300
                hover:scale-[1.06]
                hover:shadow-[0_0_25px_rgba(168,85,247,0.7)]
              "
            >
              <span className="relative z-10">📞 9302300834</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <img src="/close.svg" width={30} height={30} alt="close" />
              ) : (
                <img
                  src="/hamburger-menu.svg"
                  width={30}
                  height={30}
                  alt="menu"
                />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-500 ease-out
            ${navbar ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <ul className="mt-4 flex flex-col gap-4 bg-black/90 backdrop-blur-xl p-6 rounded-xl shadow-lg">
            {menu.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setNavbar(false)}
              >
                <li
                  className={`
                    text-lg text-center font-medium
                    ${pathname === item.path ? "text-purple-500" : "text-white"}
                  `}
                >
                  {item.name}
                </li>
              </Link>
            ))}

            <a
              href="tel:9302300834"
              className="mt-3 text-center bg-purple-600 text-white py-2 rounded-full"
            >
              📞 9302300834
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
