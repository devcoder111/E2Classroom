import React from "react";
import { NavLink } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

import E2CAlert from "../components/common/Alert";
import E2CButton from "../components/common/Button";

import E2CHomeMain from "../components/home/Main";
import E2CSchedule from "../components/home/Schedule";
import E2COrganize from "../components/home/Organize";
import E2CCourseWork from "../components/home/CourseWork";
import E2CRichMedia from "../components/home/RichMedia";

import E2CLearnMore from "../components/common/LearnMore";

const announcementString =
  "E2Classroom is here to help during COVID-19. Special pricing available to help schools transition their coursework online.";

const HomePage = () => {
  return (
    <div className="w-full">
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
      <section className="text-center mt-8 container mx-auto">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
            Transition your school online
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <p className="text-base lg:text-xl xl:text-xl mt-2 lg:w-2/3 w-full mx-auto p-4 lg:p-0">
            Increase the potential of your school with a fully integrated and
            managed online learning platform through E2Classroom - hassle-free.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <div className="my-6">
            <E2CButton color="white" bgColor="primary">
              Get Started Now
            </E2CButton>
            <E2CButton color="primary" bgColor="white" showBorder={true}>
              How it Works
            </E2CButton>
          </div>
        </ScrollAnimation>
      </section>
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <section className="relative mb-2 sm:mb-2 md:mb-2 lg:mb-48">
          <E2CHomeMain />

          <E2CSchedule />

          <E2COrganize />

          <E2CRichMedia />

          <E2CCourseWork />
        </section>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <section>
          <div className="container mx-auto py-4 hidden md:flex flex-col md:flex-row justify-between items-center">
            <h4 className="text-4xl">Trusted by</h4>
            <img src="/images/trust1.svg" alt="trust1" />
            <img src="/images/trust2.svg" alt="trust2" />
            <img src="/images/trust3.svg" alt="trust3" />
            <img src="/images/trust4.svg" alt="trust4" />
          </div>
          <div className="ellipse_bg"></div>
        </section>
      </ScrollAnimation>
      <section className="z-10 relative md:container mx-auto my-4 flex flex-row items-center home-become-leader">
        <div className="w-full lg:w-1/2 px-8 md:px-12 md:pt-8 lg:px-16 lg:pt-12">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-10">
              Become a leader in online English education
            </h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <p className="text-base lg:text-xl xl:text-xl leading-8">
              Join us and our partners as we continue to lead online English
              education throughout the world. Thanks to E2Classroom, together we
              have taught over 1 million students in over 200 countries.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <E2CLearnMore
              text="Join E2Classroom today"
              onClick={() => console.log("Join E2Classroom today")}
            />
          </ScrollAnimation>
        </div>
        <div className="hidden lg:block relative lg:w-1/2 xl:w-1/2">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <img
              src="/images/schedule.png"
              alt="schedule"
              style={{
                height: "auto",
                width: "800px",
              }}
            />
          </ScrollAnimation>
        </div>
      </section>
      <section className="relative">
        <img
          src="/images/message_bg.png"
          className="home-message-bg absolute z-0 w-full"
          alt="message_bg"
        />
      </section>
      <section className="z-10 relative md:container mx-auto my-16 lg:my-8 relative flex flex-row items-center">
        <div className="hidden lg:block lg:w-1/2 xl:w-1/2">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <img src="/images/message.png" alt="message" className="w-full" />
          </ScrollAnimation>
        </div>
        <div className="w-full lg:w-1/2 px-8 md:px-16 lg:px-18">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-10">
              Save your time, use our resources.
            </h3>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <p className="text-base lg:text-xl xl:text-xl leading-8">
              With courses in grammar, vocabulary, pronunciation and spelling,
              E2Classroom will supply premium materials designed by world-class
              English teachers to ensure that schools have a superior online
              learning platform, ready within 48-hours.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <E2CLearnMore
              text="Learn more about our materials"
              onClick={() => console.log("Learn more about our materials")}
            />
          </ScrollAnimation>
        </div>
      </section>
      <section className="relative">
        <img
          src="/images/message_circle_bg.svg"
          alt="circle"
          className="absolute z-0 support-circle hidden lg:block"
        />
      </section>
      <section className="z-10 relative md:container mx-auto my-16 lg:my-8 flex flex-row items-center z-10">
        <div className="container lg:w-1/2 px-8 md:px-16 lg:px-18">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-10">
              Trust in technology.
            </h3>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <p className="text-base lg:text-xl xl:text-xl leading-8">
              E2Classroom is powered by LearningBase - innovative software that
              provides you with all the necessary tools to create an open
              networked e-learning ecosystem. LearningBase makes the e-learning
              experience more advanced than ever before.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <E2CLearnMore
              text="Learn more about the technology"
              onClick={() => console.log("Learn more about the technology")}
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <img
              src="/images/nextliveclass.png"
              alt="nextliveclass"
              className="hidden lg:block w-full h-auto mt-8"
            />
          </ScrollAnimation>
        </div>
        <div className="hidden lg:block relative lg:w-1/2 xl:w-1/2">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <img
              src="/images/liveclass.png"
              alt="liveclass"
              className="w-full"
            />
          </ScrollAnimation>
        </div>
      </section>
      <section className="relative">
        <img
          src="/images/message_circle_bg.svg"
          alt="circle"
          className="absolute z-0 trust-circle block md:hidden"
        />
      </section>
      <section className="z-10 relative my-16 lg:my-8 text-center container mx-auto px-4 pt-8 pb-4 lg:px-8 lg:pt-12 lg:pb-8 xl:px-16 xl:pt-12 sm:rounded-md bg-brand-01">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Support when you need it.
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <p className="text-base text-white lg:text-xl xl:text-2xl mt-2 lg:w-2/3 w-full mx-auto">
            Schools will benefit from a partnership with E2Language, a trusted
            world leader in English language test preparation. With expert
            teacher training, E2Classroom Support will guide you through the
            process of seamlessly transitioning to digital learning.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <div className="my-6">
            <E2CButton color="brand-01" bgColor="white">
              Get Started Free
            </E2CButton>
          </div>
        </ScrollAnimation>
      </section>
      <section className="relative">
        <img
          src="/images/message_circle_bg.svg"
          alt="circle"
          className="absolute z-0 support-circle hidden lg:block"
        />
      </section>
      <section
        className="container relative mx-auto p-2 md:p-4 lg:p-8 z-10"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOnce={true}
          initiallyVisible={true}
        >
          <div className="overflow-hidden">
            <div className="float-right">
              <div className="inline-flex items-center">
                <p className="mr-2">Special thanks to </p>
                <img
                  className=" "
                  src="/images/speech.png"
                  alt="gray-logo"
                />
              </div>
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
          <div class="flex mb-4">
            <div class="w-1/2 ">
              <E2CButton color="black" bgColor="white" showBorder={false}>
                <i className="fa fa-globe mr-2" aria-hidden="true"></i>ENGLISH
              </E2CButton>
            </div>

            <div class="w-1/2 ">
              <img
                className="float-right"
                src="/images/logo-01-gray.png"
                alt="gray-logo"
              />
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
};

export default HomePage;
