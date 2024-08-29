// Importing necessary React and icon components
import React from "react";
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

// Define the type for the SocialIcon props
interface SocialIconProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// Reusable SocialIcon component with hover effect
const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon }) => <Icon className="social-icon hover:text-[#F8B195] size={30} " />;

// Define the type for the footer items
interface FooterItem {
  type: "icon" | "section";
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title?: string;
  items?: string[];
}

// Footer component
const Footer: React.FC = () => {
  // Array defining the content and structure of the footer
  const items: FooterItem[] = [
    // Social media icons
    { type: "icon", icon: FaFacebookSquare },
    { type: "icon", icon: FaInstagram },
    { type: "icon", icon: FaTwitterSquare },
    { type: "icon", icon: FaGithubSquare },
    { type: "icon", icon: FaDribbbleSquare },
    // Footer sections
    { type: "section", title: "Solutions", items: ["Analytics", "Commerce", "Insights"] },
    { type: "section", title: "Support", items: ["Pricing", "Guides", "API Status"] },
    { type: "section", title: "Company", items: ["About", "Blog", "Careers"] },
    { type: "section", title: "Legal", items: ["Policy", "Terms"] },
  ];

  return (
    <div className="bg-deep-teal mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      {/* Left section with brand and social icons */}
      <div>
        <h1 className="w-full lg:text-4xl xl:text-5xl font-bold text-[#e87041]">Colab_team_7.</h1>

        <p className="py-4 xl:text-xl">
          Shop with Confidence: Discover the latest in electronics, from cutting-edge smartphones to home essentials. Our curated selection ensures quality and
          innovation in every product.
        </p>
        <div className="flex justify-between md:w-[75%] my-6 text-5xl">
          {items.map((item, index) => (item.type === "icon" ? <SocialIcon key={index} icon={item.icon!} /> : null))}
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6 p-5">
        {/* Mapping over sections and rendering content */}
        {items.map((item, index) =>
          item.type === "section" ? (
            <div key={index}>
              <h6 className="font-medium text-gray-100 text-xl">{item.title}</h6>
              <ul>
                {/* Mapping over items in each section */}
                {item.items?.map((subItem, subIndex) => (
                  <li key={subIndex} className="py-2 text-lg">
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>
      <span> © 2024 Craetive. All Rights Reserved </span>
    </div>
  );
};

export default Footer;
