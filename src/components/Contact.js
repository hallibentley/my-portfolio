import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gray-900">
      <div className="container max-w-6xl px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
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
        <div className="bg-gray-200 relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="text-gray-900 sm:text-4xl text-3xl mb-1 font-medium">
              Get in touch
            </h2>
            <h2 className="text-gray-900 tracking-widest text-xs">
              EMAIL:
            </h2>
            <a className="text-blue-400 leading-relaxed">
              hallibentley@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
