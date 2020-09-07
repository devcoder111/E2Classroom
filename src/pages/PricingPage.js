import React from "react";
import { NavLink } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

import E2CAlert from "../components/common/Alert";
import E2CButton from "../components/common/Button";

import FeatureCard from "../components/agent/FeatureCard";

const announcementString =
  "E2Classroom is here to help during COVID-19. Special pricing available to help schools transition their coursework online.";

const AgentPage = () => {
  return (
    <div className="w-full">
      <section className="absolute z-0 agency-top">
        <img src="/images/agency-top.svg" className="w-full" alt="agency-top" />
      </section>
      <E2CAlert
        color="alert-text"
        bgColor="alert-background"
        left={<i className="fa fa-info-circle" aria-hidden="true"></i>}
        right={<i className="fa fa-times" aria-hidden="true"></i>}
      >
        <span>{announcementString}</span>
        <NavLink className="underline mx-4" to="/annoucements">
          Learn More
        </NavLink>
      </E2CAlert>

      <section className="relative my-4 z-10 pricing-family">
        <div className="relative z-10 md:container mx-auto mt-12 flex flex-row items-center">
          <div className="w-full lg:w-1/2 px-8 md:px-12 md:pt-8 lg:px-16 lg:pt-12">
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOnce={true}
              initiallyVisible={true}
            >
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-10">
                Pricing
              </h3>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <p className="text-base lg:text-xl xl:text-2xl leading-8 mb-4">
                Contact us now to learn about our simple and transparent
                packages.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <E2CButton color="white" bgColor="primary">
                Contact Us
              </E2CButton>
            </ScrollAnimation>
          </div>
          <div className="hidden lg:block relative lg:w-1/2 xl:w-1/2">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <img
                src="/images/agent_open.png"
                alt="agent_open"
                className="mx-auto"
                style={{
                  height: "auto",
                  width: "400px",
                }}
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-x-hidden">
        <img
          src="/images/message_circle_bg.svg"
          alt="circle"
          className="absolute z-0 agent-circle"
        />
      </section>
      <section className="relative z-10">
        <div className="w-full container mx-auto mt-36 flex flex-row justify-center flex-wrap">
          <ScrollAnimation
            className="w-full lg:w-1/2"
            animateIn="fadeInUp"
            animateOnce={true}
          >
            <FeatureCard
              image="/images/icon-cal.png"
              title="Monthly Licence Fee"
              subtitle="We don’t like surprises, so that’s why we charge a simple monthly licence fee at the beginning of each month to cover the costs of both platform and material use, leaving you with nothing to worry about - it’s that easy."
            />
          </ScrollAnimation>
          <ScrollAnimation
            className="w-full lg:w-1/2"
            animateIn="fadeInUp"
            animateOnce={true}
          >
            <FeatureCard
              image="/images/icon-people.svg"
              title="Per Student Per Month"
              subtitle="At the end of each calendar month, we generate an invoice based on the number of active students using your schools platform throughout the previous month. That way, you are only paying for the students who are actively using and engaged with your platform - a win, win!"
            />
          </ScrollAnimation>
        </div>
      </section>
      <section
        className="relative mx-auto p-2 md:p-4 lg:p-8 z-10 mt-36"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <img
          src="/images/message_bg.png"
          className="pricing-message-bg absolute z-0 w-full"
          alt="message_bg"
        />
        <div className="container mx-auto">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <img
              className="hidden md:block"
              src="/images/logo-01-gray.png"
              alt="gray-logo"
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <div className="hidden md:flex flex-row mt-4">
              <div className="w-1/3">
                <h5 className="text-text-01 text-xl">COURSES</h5>
                <div className="flex flex-row text-text-02">
                  <ul className="w-1/2 flex flex-col">
                    <li>General English</li>
                    <li>IELTS Academic</li>
                    <li>IELTS General</li>
                  </ul>
                  <ul className="w-1/2 flex flex-col">
                    <li>PTE</li>
                    <li>OET</li>
                    <li>TOEFL</li>
                  </ul>
                </div>
              </div>
              <div className="w-1/3">
                <h5 className="text-text-01 text-xl">SOLUTIONS</h5>
              </div>
              <div className="w-1/3">
                <h5 className="text-text-01 text-xl">SOLUTIONS</h5>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeInUp"
            animateOnce={true}
            initiallyVisible={true}
          >
            <hr className="my-4" />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeInUp"
            animateOnce={true}
            initiallyVisible={true}
          >
            <div>
              <E2CButton color="black" bgColor="white" showBorder={false}>
                <i className="fa fa-globe mr-2" aria-hidden="true"></i>ENGLISH
              </E2CButton>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default AgentPage;
