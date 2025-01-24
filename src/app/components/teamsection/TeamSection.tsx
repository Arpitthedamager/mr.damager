// components/TeamSection.tsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  role: string;
  image: string;
  backImage: string;
  socialLinks: { platform: string; url: string; icon: string }[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Mr. Williams",
    role: "Software Engineer",
    image: "/images/member1.png",
    backImage: "/images/back1.png",
    socialLinks: [
      { platform: "Facebook", url: "https://facebook.com", icon: "/icons/facebook.png" },
      { platform: "Instagram", url: "https://instagram.com", icon: "/icons/instagram.png" },
      { platform: "Twitter", url: "https://twitter.com", icon: "/icons/twitter.png" },
      { platform: "LinkedIn", url: "https://linkedin.com", icon: "/icons/linkedin.png" },
    ],
  },
  // Add more team members as needed
];

const TeamSection: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".team-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".our-team-section",
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <section className="our-team-section py-16 ">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-gray-600">Our Team</p>
          <h1 className="text-3xl font-bold text-gray-800">The Faces Behind Our Success</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-card  rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <img
                  src={member.backImage}
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 p-6">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <div className="flex justify-center space-x-4 mt-4">
                    {member.socialLinks.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                        <img
                          src={link.icon}
                          alt={`${link.platform} icon`}
                          className="w-6 h-6"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
