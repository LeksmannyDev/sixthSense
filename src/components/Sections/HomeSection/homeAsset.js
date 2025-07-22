import homeBanner1 from "../../../assets/Home/homeBanner.webp";
import service1 from "../../../assets/What/service1.webp";
import service2 from "../../../assets/What/service2.webp";
import change from "../../../assets/Home/change.png";
import leadership from "../../../assets/Home/leadership.png";
import team from "../../../assets/Home/team.png";
import culture from "../../../assets/Home/culture.png";
import executivee from "../../../assets/Home/executivee.png";
import executive from "../../../assets/Home/executive.png";
import choose from "../../../assets/Home/choose.webp";
import collaborative from "../../../assets/Home/collaborative.png";
import perosnalised from "../../../assets/Home/peronalised.png";
import unparalled from "../../../assets/Home/uparllel.png";
import zylus from "../../../assets/What/zylus.png";
import roland from "../../../assets/Home/roland.png";
import finglow from "../../../assets/Home/finglow.png";
import banner1 from "../../../assets/Home/Banner1.webp";
import prevArrow from "../../../assets/Home/leftArrow.svg";
import nextArrow from "../../../assets/Home/nextArrow.svg";
import Leading from "../../../assets/What/Leading.png";
import Teams from "../../../assets/What/Teams.png";
import Data from "../../../assets/What/Data.png";
import Public from "../../../assets/What/Public.png";
import Women from "../../../assets/What/Women.png";
import Sales from "../../../assets/What/Sales.png";
import Finance from "../../../assets/What/Finance.png";
import GenZ from "../../../assets/What/GenZ.png";
import Executive from "../../../assets/What/Executive.png";

export const homeAsset = {
  homeBanner1,
  choose,
  banner1,
  prevArrow,
  nextArrow,
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
      "Our faculty has trained and consulted for top brands across Nigeria's key sectors.",
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
    client: "The Zylus Team",
    logo: zylus,
  },
  {
    quote:
      "SixthSense Leadership helped us reshape our organizational culture. The workshops were not only informative but also engaging. Our team is now more collaborative and innovative than ever!",
    client: "Finchglow Holdings",
    logo: finglow,
  },
  {
    quote:
      "SixthSense Leadership helped us reshape our organizational culture. The workshops were not only informative but also engaging. Our team is now more collaborative and innovative than ever!",
    client: "FBN Insurance Brokers",
    logo: roland,
  },
];

export const executiveProgram = [
  {
    icon: Leading,
    title: "Leading with\n Emotional Intelligence",
    description:
      "Develop the skills to understand, manage, and leverage emotions for effective leadership and stronger team dynamics.",
  },
  {
    icon: Data,
    title: "Data-Driven\n Leadership",
    description:
      "Learn to make informed decisions by analyzing and interpreting data to drive strategic business outcomes.",
  },
  {
    icon: Public,
    title: "Public Speaking &\n  Communication in Leadership ",
    description:
      "Develop the ability to inspire, engage, and manage diverse teams to achieve peak performance.",
  },
  {
    icon: Women,
    title: "Women in\n Leadership",
    description:
      "Equip women leaders with the tools, strategies, and confidence to thrive and lead in diverse and dynamic environments.",
  },
  {
    icon: Sales,
    title: "Sales\n Leadership",
    description:
      "Build the expertise to drive sales performance, motivate teams, and achieve revenue goals with strategic leadership.",
  },
  {
    icon: Executive,
    title: "Executive Presence\n & Personal Branding",
    description:
      "Develop the ability to inspire, engage, and manage diverse teams to achieve peak performance.",
  },
  {
    icon: Finance,
    title: "Finance for\n Non-Finance Managers",
    description:
      "Gain essential financial knowledge and tools to make sound decisions and contribute to your organization's financial success.",
  },
  {
    icon: GenZ,
    title: "Leading Gen Zs\n in the Workplace",
    description:
      "Understand how to attract, engage, and develop the talent of the future for long-term organizational success.",
  },
  {
    icon: Teams,
    title: "Leading\n High-performing Teams",
    description:
      "Build competencies to implement practices that empower teams to consistently exceed targets and adapt to evolving challenges",
  },
];
