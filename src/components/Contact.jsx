import React from "react";
import { Linkedin, PhoneCall, MailIcon, MapPin } from "lucide-react";
import userMeta from "../constants/userMeta";
import openLink from "../utils/openLink";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  const { socialLinks } = userMeta;
  return (
    <section className="w-full" id="contact" data-aos="fade-up">
      <div className="lg:text-center">
        <SectionHeader title={"LET'S CONNECT"} borderTop />
      </div>
      <div className="mt-4 md:mt-12">
        <dl className="space-y-10 md:space-y-0 md:grid lg:grid-cols-2 md:gap-x-16 gap-y-12 lg:gap-y-24 mb-10">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-black">
                <MailIcon />
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-text-primary">
                Email
              </dt>
              <dd className="text-base text-text-secondary hover:text-primary break-all">
                <a href="mailto:salunkheshubham0@gmail.com">
                  salunkheshubham0@gmail.com
                </a>
              </dd>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-black">
                <PhoneCall />
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-text-primary">
                Phone number
              </dt>
              <dd className="text-base text-text-secondary hover:text-primary break-all">
                <a href="tel:+919004409190">9004409190</a>
              </dd>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-black">
                <Linkedin />
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-text-primary">
                LinkedIn
              </dt>
              <dd className="text-base text-text-secondary">
                <p
                  className="text-text-secondary hover:text-primary break-all"
                  onClick={() => openLink(socialLinks.linkedin)}
                >
                  linkedin.com/in/shubhamsalunkhe16/
                </p>
              </dd>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-black">
                <MapPin />
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-text-primary">
                Address
              </dt>
              <dd className="text-base text-text-secondary">
                Charop, Kandiwali (w.),
                <br />
                Mumbai-67
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Contact;
