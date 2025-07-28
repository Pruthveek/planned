"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { useState } from "react";
import Link from "next/link"; 
export function NavbarHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const navItems = [
    { name: "Product", link: "#", dropdown: true },
    { name: "Company", link: "#", dropdown: true },
    { name: "Pricing", link: "#pricing" },
    { name: "Become a partner", link: "/" },
    { name: "Plan event", link: "#plan" },
  ];

  return (
    <div className="relative w-full z-50">
      <Navbar>
        <NavBody>
          <NavbarLogo />

          {/* Desktop nav items with dropdowns */}
          <div className="hidden lg:flex items-center gap-6">
            <Menu setActive={setActive}>
              {navItems.map((item, idx) =>
                item.dropdown ? (
                  <MenuItem
                    key={idx}
                    setActive={setActive}
                    active={active}
                    item={item.name}
                  >
                    {item.name === "Product" && (
                      <div className="grid grid-cols-2 gap-6 p-4 text-sm">
                        <ProductItem
                          title="Algochurn"
                          href="https://algochurn.com"
                          src="https://assets.aceternity.com/demos/algochurn.webp"
                          description="Prepare for tech interviews like never before."
                        />
                        <ProductItem
                          title="Tailwind Master Kit"
                          href="https://tailwindmasterkit.com"
                          src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                          description="Production ready Tailwind css components for your next project"
                        />
                        <ProductItem
                          title="Moonbeam"
                          href="https://gomoonbeam.com"
                          src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                          description="Never write from scratch again. Go from idea to blog in minutes."
                        />
                        <ProductItem
                          title="Rogue"
                          href="https://userogue.com"
                          src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                          description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                        />
                      </div>
                    )}

                    {item.name === "Company" && (
                      <div className="flex flex-col space-y-4 text-sm p-4">
                        <HoveredLink href="#about">About us</HoveredLink>
                        <HoveredLink href="#team">Our team</HoveredLink>
                        <HoveredLink href="#careers">Careers</HoveredLink>
                        <HoveredLink href="#contact">Contact</HoveredLink>
                      </div>
                    )}
                  </MenuItem>
                ) : (
                  <Link
                    key={idx}
                    href={item.link}
                    className="text-sm font-medium text-black dark:text-white px-2 py-1"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </Menu>
          </div>

          {/* Right-side buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <NavbarButton variant="primary" className="border border-neutral-200">
              Log in
            </NavbarButton>
            <NavbarButton variant="dark">
              Talk to our team <span className="ml-1">›</span>
            </NavbarButton>
            <div className="pl-2 text-sm font-medium text-black dark:text-white cursor-pointer flex items-center gap-1">
              En <span className="text-xs">&#9662;</span>
            </div>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black dark:text-white"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col w-full gap-3 pt-2">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full border border-neutral-200"
              >
                Log in
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="dark"
                className="w-full"
              >
                Talk to our team
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
