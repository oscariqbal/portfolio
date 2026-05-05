import { ContactTypes } from "@/types/contacts";
import { EmailIcon } from "@/public/icon/email";
import { InstagramIcon } from "@/public/icon/instagram";
import { LinkedinIcon } from "@/public/icon/linkedin";
import { WhatsAppIcon } from "@/public/icon/whatsApp";
import { GitHubIcon } from "@/public/icon/github";

export const Contacts: ContactTypes[] = [
  {
    name: "email",
    link: "/",
    comp: EmailIcon,
  },
  {
    name: "instagram",
    link: "/",
    comp: InstagramIcon,
  },
  {
    name: "linkedin",
    link: "/daw",
    comp: LinkedinIcon,
  },
  {
    name: "whatsApp",
    link: "/",
    comp: WhatsAppIcon,
  },
  {
    name: "github",
    link: "/",
    comp: GitHubIcon,
  },
]