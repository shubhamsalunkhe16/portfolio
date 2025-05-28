import { Linkedin, PhoneCall, MailIcon, MapPin } from "lucide-react";
import userMeta from "../constants/userMeta";
import openLink from "../utils/openLink";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  const { socialLinks } = userMeta;
  return (
    <section className="w-full" id="contact" data-aos="fade-up">
      <div className="lg:text-center">
        <SectionHeader title={"LET'S CONNECT"} />
      </div>
      <dl className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-x-10 md:gap-x-14 gap-y-10 lg:gap-y-14">
        <div className="flex gap-4 items-center">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-bg-primary">
              <MailIcon />
            </div>
          </div>
          <div>
            <dt className="heading-xl">Email</dt>
            <dd className="para-md text-text-secondary hover:text-primary hover:underline break-all">
              <a href="mailto:salunkheshubham0@gmail.com">
                salunkheshubham0@gmail.com
              </a>
            </dd>
          </div>
        </div>
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-bg-primary">
              <PhoneCall />
            </div>
          </div>
          <div className="ml-4">
            <dt className="heading-xl">Phone number</dt>
            <dd className="para-md text-text-secondary hover:text-primary hover:underline break-all">
              <a href="tel:+919004409190">9004409190</a>
            </dd>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-bg-primary">
              <Linkedin />
            </div>
          </div>
          <div className="ml-4">
            <dt className="heading-xl">LinkedIn</dt>
            <dd className="text-base text-text-secondary">
              <p
                className="para-md text-text-secondary hover:text-primary hover:underline break-all"
                onClick={() => openLink(socialLinks.linkedin)}
              >
                linkedin.com/in/shubhamsalunkhe16/
              </p>
            </dd>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-bg-primary">
              <MapPin />
            </div>
          </div>
          <div className="ml-4">
            <dt className="heading-xl">Address</dt>
            <dd className="para-md text-text-secondary">
              Charkop, Kandiwali (w.),
              <br />
              Mumbai-67
            </dd>
          </div>
        </div>
      </dl>
    </section>
  );
};

export default Contact;
