import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gray-900">
      <div className="container max-w-6xl px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">

        <div className="w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(07" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195656.52007243581!2d-83.13091187835921!3d39.98313021620715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883889c1b990de71%3A0xe43266f8cfb1b533!2sColumbus%2C%20OH!5e0!3m2!1sen!2sus!4v1664369597496!5m2!1sen!2sus"
          />
        </div>

        <div className="bg-gray-200 rounded py-6 px-3 w-1/2">
          <div className="">
            <h3 className="text-gray-900 text-2xl font-medium p-2">
              Get In Touch
            </h3>
            <h2 className="text-gray-900 font-base p-2">
              EMAIL: <span className="text-blue-500">hallibentley@gmail.com</span>
            </h2>
            <br />
            <a href="https://www.linkedin.com/in/halli-bentley-a744aa179/"
              className="linkedin p-2">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a href="https://www.github.com/hallibentley"
              className="github p-2">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
