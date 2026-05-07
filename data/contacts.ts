import { ContactTypes } from "@/types/contacts";
import { EmailIcon } from "@/public/icon/email";
import { InstagramIcon } from "@/public/icon/instagram";
import { LinkedinIcon } from "@/public/icon/linkedin";
import { WhatsAppIcon } from "@/public/icon/whatsApp";
import { GitHubIcon } from "@/public/icon/github";

export const Contacts: ContactTypes[] = [
  {
    name: "email",
    link: "https://mailto:oiqbalmustofa@gmail.com",
    comp: EmailIcon,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/oscariqball",
    comp: InstagramIcon,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/oscar-iqbal-mustofa-1622243a2",
    comp: LinkedinIcon,
  },
  {
    name: "whatsApp",
    link: "https://wa.me/6285800957241",
    comp: WhatsAppIcon,
  },
  {
    name: "github",
    link: "https://github.com/oscariqbal",
    comp: GitHubIcon,
  },
]