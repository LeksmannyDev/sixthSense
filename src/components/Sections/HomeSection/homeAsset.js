import homeBanner1 from "../../../assets/Home/homeBanner.png";
import service1 from "../../../assets/What/service1.jpg";
import service2 from "../../../assets/What/service2.jpg";
import change from "../../../assets/Home/change.png";
import leadership from "../../../assets/Home/leadership.png";
import team from "../../../assets/Home/team.png";
import culture from "../../../assets/Home/culture.png";
import executivee from "../../../assets/Home/executivee.png";
import executive from "../../../assets/Home/executive.png";
import choose from "../../../assets/Home/choose.jpg";
import collaborative from "../../../assets/Home/collaborative.png";
import perosnalised from "../../../assets/Home/peronalised.png";
import unparalled from "../../../assets/Home/uparllel.png";
import zylus from "../../../assets/What/zylus.png";
import roland from "../../../assets/Home/roland.png";
import finglow from "../../../assets/Home/finglow.png";
import banner1 from "../../../assets/Home/Banner1.png";

export const homeAsset = {
  homeBanner1,
  choose,
  banner1,
};

export const services = [
  {
    title: "Leadership Solutions",
    image: service1,
    items: [
      {
        icon: leadership,
        name: "Leadership Development",
        description:
          "Tailored training and development programs for enhanced team performance",
      },
      {
        icon: executive,
        name: "Executive Coaching",
        description: "Personalized guidance to foster leadership excellence",
      },
      {
        icon: executivee,
        name: "Executive Retreats",
        description:
          "Immersive sessions designed to align leadership teams, foster strategic thinking, and rejuvenate focus on organizational goals",
      },
    ],
  },
  {
    title: "Organizational Transformation",
    image: service2,
    items: [
      {
        icon: change,
        name: "Change Management",
        description: "Expert strategy development for long-term success",
      },
      {
        icon: team,
        name: "Team Building Workshop",
        description:
          "Bespoke consulting to drive innovation and navigate complex changes seamlessly",
      },
      {
        icon: culture,
        name: "Culture Shift",
        description:
          "Specialized solutions to shape culture and drive transformation",
      },
    ],
  },
];

export const chooseUs = [
  {
    title: "Unparalleled Expertise",
    icon: unparalled,
    description:
      "Our faculty have trained top brands across Nigeria's key sectors.",
  },
  {
    title: "Personalized Approach",
    icon: [perosnalised],
    description:
      "We contextualize our expertise to address your unique challenges.",
  },
  {
    title: "Collaborative Partnerships",
    icon: collaborative,
    description: "We partner with you every step of the way.",
  },
];

export const testimonials = [
  {
    quote:
      "The coaching I received from SixthSense Leadership was a game-changer for me. I gained clarity in my vision and improved my decision-making skills. I can confidently lead my team towards our goals now.",
    client: "CLIENT NAME",
    company: "The Zylus Team",
    logo: zylus,
  },
  {
    quote:
      "SixthSense Leadership helped us reshape our organizational culture. The workshops were not only informative but also engaging. Our team is now more collaborative and innovative than ever!",
    client: "CLIENT NAME",
    company: "FBN Insurance Brokers",
    logo: roland,
  },

  {
    quote:
      "SixthSense Leadership helped us reshape our organizational culture. The workshops were not only informative but also engaging. Our team is now more collaborative and innovative than ever!",
    client: "CLIENT NAME",
    company: "Finchglow Holdings",
    logo: finglow,
  },
];
