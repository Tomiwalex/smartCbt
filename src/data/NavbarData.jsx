import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export const contactDetails = [
    {
        icon: FaMapMarkerAlt,
        content: "Shenley Road, Opposite Sainsbury's, Hemel-Hempstead, Hertfordshire HP2 7AS, United Kingdom ",
    },

    {
        icon: FaEnvelope,
        content: "support@mightyskyconcepts.co.uk  ",
    }
]


export const socialsLinks = [

    {
        display: "Facebook",
        icon: FaFacebook,
        link: "https://facebook.com",
    },

    {
        display: "Instagram",
        icon: FaInstagram,
        link: "https://instagram.com",
    },


    {
        display: "LinkedIn",
        icon: FaLinkedin,
        link: "https://linkedin.com/mightyskytechnologies",
    },

    {
        display: "Twitter",
        icon: BsTwitterX,
        link: "https://twitter.com/mightyskytech",
    },
]

export const NavbarData = [
    {
        id: "",
        display: "Home",
        path: "/",
    },

    {
        id: "how-to-download",
        display: "How to Download",
        path: "/how-to-download",
        isSection: true,
    },

    {
        id: "why-us",
        display: "Why SMART CBT",
        path: "/why-us",
        isSection: true,
    },

    {
        id: "faqs",
        display: "FAQS",
        path: "/faqs",
        isSection: true,
    },

]


export const footerNavData = [
    {
        id: "terms-and-condition",
        display: "Terms & Condition",
        path: "/terms-and-condition",
    },

    {
        id: "privacy-policy",
        display: "Privacy Policy",
        path: "/privacy-policy",
    },

]



export const storeBtns = [
    {
        title: "Google Play Store",
        image: "https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/SmartCBT/s1804midhv9g3m2q42q2",
        url: "/",
    },

    {
        title: "Apple Store",
        image: "https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/SmartCBT/fnvyh7qds0jdrp56oowb",
        url: "/",
    },
  ] 
  