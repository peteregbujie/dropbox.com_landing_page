import {
 adobe,
 arrow,
 asana,
 backup,
 canvas,
 docSend,
 dropbox,
 google,
 helloSign,
 microsoft,
 //  pane1,
 //  pane2,
 //  pane3,
 //  pane4,
 //  pane5,
 //  pane6,
 //  pane7,
 //  pane8,
 slack,
 slide1,
 slide2,
 slide3,
 slide4,
 slide5,
 slide6,
 slide7,
 trello,
 zoom,
} from "../assets";
import pane1 from "../public/pane 1.png";
import pane2 from "../public/pane 2.jpg";
import pane3 from "../public/pane 3.png";
import pane4 from "../public/pane 4.jpg";
import pane5 from "../public/pane 5.png";
import pane6 from "../public/pane 6.png";
import pane7 from "../public/pane 7.svg";
import pane8 from "../public/pane 8.png";

export const navLinks1 = [
 {
  id: "home",
  title: "Why Dropbox?",
 },
 {
  id: "products",
  title: "Products",
 },
 {
  id: "solutions",
  title: "Solutions",
 },
 {
  id: "pricing",
  title: "Pricing",
 },
];

export const navLinks2 = [
 {
  id: "contact",
  title: "Contact",
 },
 {
  id: "getapp",
  title: "Get app",
 },
 {
  id: "Sign up",
  title: "Sign up",
 },
 {
  id: "sign in",
  title: "Sign in",
 },
];

export const navLinks3 = [
 {
  id: "Sign up",
  title: "Sign up",
 },
 {
  id: "sign in",
  title: "Sign in",
 },
];

export const Why = [
 {
  id: "overview",
  title: "Overview",
 },
 {
  id: "get-inspired",
  title: "Get Inspired",
 },
 {
  id: "customers",
  title: "What customer say",
 },
 {
  id: "app-integration",
  title: "App integration",
 },
 {
  id: "resources",
  title: "Resources",
 },
 {
  id: "better",
  title: "Better with Dropbox",
 },
 {
  id: "share",
  title: "Share files",
 },
 {
  id: "store",
  title: "Store and organize",
 },
 {
  id: "sync",
  title: "Sync your devices",
 },
 {
  id: "protect",
  title: "Protect and secure data",
 },
];

export const Products = [
 {
  img: dropbox,
  title: "Dropbox",
  subtitle: "Store,share, and access files across devices",
 },
 {
  img: backup,
  title: "Backup",
  subtitle: "Store,share, and access files across devices",
 },
 {
  img: helloSign,
  title: "HelloSign",
  subtitle: "Request and add signatures to documents",
 },
 {
  img: docSend,
  title: "DocSend",
  subtitle: "Send documents securely nd track activity",
 },
 {
  img: arrow,
  title: "Advance access",
  subtitle: "Preview new product experiences",
 },
];

export const Solutions = [
 "Creatives",
 "Sales",
 "Marketing",
 " HR",
 "IT",
 "Team Lead",
 "Personal",
];

export const Contact = [
 {
  id: "support",
  title: "Support",
 },
 {
  id: "help",
  title: "Help center",
 },
 {
  id: "sales",
  title: "Contact Sales",
 },
 {
  id: "email",
  title: "Email",
 },
 {
  id: "phone",
  title: 8006205395,
 },
];

export const Accordion_Data = [
 {
  id: "accordion-1",
  isOpen: true,
  title: "Get 2 GB of cloud storage for free with Dropbox Basic",
  text:
   "Save and access your files from any device, and share them with anyone. Discover what Dropbox can do for you—get a free account, no strings attached!",
  img: pane1,
  bgColor: "bg-cyan-300",
  height: 466,
 },
 {
  id: "accordion-2",
  isOpen: false,
  title: "Dropbox Plus has room for all your content with space to spare",
  text:
   "Safeguard your photos, personal docs, work files, and much more. Save everything with 2,000 GB of space—and get some handy tools to help you stay organized.",
  img: pane2,
  bgColor: "bg-orange-600",
  height: 446,
 },
 {
  id: "accordion-3",
  isOpen: false,
  title: "Dropbox Family is a place for everyone with space for everything",
  text:
   "Share 2,000 GB of storage between 6 people. Each family plan member gets their own private Dropbox account for less than the price of two Plus plans.",
  img: pane3,
  bgColor: "bg-amber-300",
  height: 549,
 },
 {
  id: "accordion-4",
  isOpen: false,
  title: "Make life easier for you and your clients with Dropbox Professional",
  text:
   "Get our full suite of premium productivity and sharing tools—plus 3,000 GB of space. Dropbox Professional makes it easier for you to work with colleagues and clients.",
  img: pane4,
  bgColor: "bg-red-300",
  height: 445,
 },
 {
  id: "accordion-5",
  isOpen: false,
  title: "Streamline your document workflow with Dropbox Sign",
  text:
   "Save yourself time and hassle with Dropbox Sign. You can sign legally-binding agreements with a few clicks. And it's just as easy to request a signature from someone else.",
  img: pane5,
  bgColor: "bg-orange-400",
  height: 670,
 },
 {
  id: "accordion-6",
  isOpen: false,
  title:
   "Centralize, secure, and easily access your work with Dropbox Standard",
  text:
   "Safeguard sensitive and confidential info. Automate time-consuming processes with powerful admin and collaboration tools. And easily recover your work if something ever goes wrong. Minimum 3 users per plan.",
  img: pane6,
  bgColor: "bg-lime-400",
  height: 392,
 },

 {
  id: "accordion-7",
  isOpen: false,
  title: "DocSend lets you track, analyze, and optimize your content",
  text:
   "Safely share business-critical documents and get real-time performance insights. DocSend helps you manage and optimize your company’s most important content.",
  img: pane7,
  bgColor: "bg-blue-200",
  height: 580,
 },
 {
  id: "accordion-8",
  isOpen: false,
  title:
   "Proactively detect threats to your team’s content with Dropbox Advanced",
  text:
   "Always-on security monitoring and alerts. Extended 1-year version history and file recovery. Plus all the storage space you need. Dropbox Advanced is a secure collaboration solution for your entire team. Minimum 3 users per plan.",
  img: pane8,
  bgColor: "bg-violet-300",
  height: 448,
 },
];

export const integrations = [
 {
  image: zoom,
  name: "Zoom",
  about:
   "Enhance remote collaboration with Zoom instant meetings and video recordings.",
 },
 {
  image: slack,
  name: "Slack",
  about:
   "Bring Slack conversations and Dropbox content together to keep teams in sync.",
 },
 {
  image: adobe,
  name: "Adobe Creative Cloud",
  about:
   "Easily and securely send files to clients and vendors from within Adobe Photoshop.",
 },
 {
  image: microsoft,
  name: "Microsoft Office",
  about: "Easily access, edit, and share Office docs online in Dropbox.",
 },
 {
  image: google,
  name: "Google Workspace",
  about: "Create, edit, and share Google Docs, Sheets, and Slides in Dropbox",
 },
 {
  image: trello,
  name: "Trello",
  about: "Collaborate on team projects in Trello with Dropbox content.",
 },
 {
  image: canvas,
  name: "Canvas",
  about: "Upload course files or assignments straight from Dropbox to Canvas.",
 },
 {
  image: asana,
  name: "Asana",
  about:
   "Track all of your teams work with Asana while keeping Dropbox content alongside.",
 },
];

export const Testimonials_Data = [
 {
  testimonial:
   "Dropbox has been tremendously helpful for social media. I can hop on anytime and pull whatever photo is inspiring me to post.",
  image: slide1,
  name: "Mary Ashley Krogh (MAK), Illustrator and Graphic Designer",
 },

 {
  testimonial:
   "Dropbox increased our team’s collaboration while working from home, which has increased our flexibility and could revolutionize our office culture.",
  image: slide2,
  name:
   "Adam Montgomery, Senior Manager of Programming, Sundance Film Festival",
 },

 {
  testimonial:
   "We’re a grass-roots nonprofit. When we use a tool that the rest of the design world uses, it helps professionalize our organization.",
  image: slide3,
  name: "Ann Kappes, Director of Art Partnerships at Creativity Explored",
 },
 {
  testimonial:
   "Dropbox easily allows me to transfer what’s in my mind to another person.",
  image: slide4,
  name:
   "Murray Bell, Founder and Executive Creative Director of Semi Permanent",
 },

 {
  testimonial:
   "Our team is working remotely—everyone's in a different time zone. Dropbox is a great hub for us to all work at once and seamlessly share files.",
  image: slide5,
  name: "Sophia Chang, Illustrator and Designer",
 },

 {
  testimonial:
   "Dropbox version control is very important. You may want to go back to an earlier version because there's an idea in there that you really like.",
  image: slide6,
  name: "Sahir Zaveri, CEO of King Children",
 },
 {
  testimonial:
   "Creative growth happens when you don’t have to worry about managing storage.",
  image: slide7,
  name: "Andi Scull, Founder and Creative Director, HOPE Organization",
 },
];
