import React from "react";
import { NavLink } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

import E2CAlert from "../components/common/Alert";
import E2CButton from "../components/common/Button";

import E2CLearnMore from "../components/common/LearnMore";

import FeatureCard from "../components/agent/FeatureCard";
import StepCard from "../components/agent/StepCard";

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

      <section className="z-10 relative md:container mx-auto my-4 flex flex-row items-center agent-join-family">
        <div className="w-full lg:w-1/2 px-8 md:px-12 md:pt-8 lg:px-16 lg:pt-12">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-10">
            Join the E2 family
          </h3>
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <p className="text-base lg:text-xl xl:text-xl leading-8 mb-4">
              Maximise the potential of your school and join the leaders in
              online education.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <E2CButton color="white" bgColor="primary">
              Get Started Now
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
      </section>
      <section className="relative w-full overflow-x-hidden">
        <img
          src="/images/message_circle_bg.svg"
          alt="circle"
          className="absolute z-0 agent-circle"
        />
      </section>
      <section className="relative z-10 mt-24 lg:mt-36">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <h1 className="text-4xl lg:text-4xl font-bold mb-4 leading-10 text-center">
            Why become an agent for E2Classroom?
          </h1>
        </ScrollAnimation>
      </section>
      <section className="z-10 relative md:container mx-auto my-16 lg:my-8 relative flex flex-row items-center">
        <div className="hidden lg:block lg:w-1/2 xl:w-1/2">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <img
              src="/images/agent_photo.png"
              alt="agent_photo"
              className="mx-auto"
              style={{
                height: "auto",
                width: "400px",
              }}
            />
          </ScrollAnimation>
        </div>
        <div className="w-full lg:w-1/2 px-8 md:px-16 lg:px-18">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <h3 className="text-3xl lg:text-3xl font-bold mb-4 leading-10">
              Join forces with the best online English teaching platform in the
              world.
            </h3>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <p className="text-base lg:text-xl xl:text-xl leading-8">
              When you join the E2 family, you will immediately be given all the
              support you need to efficiently transition your school online and
              begin offering world-class materials to your students.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <E2CLearnMore
              text="Learn more our student management"
              onClick={() => console.log("Learn more our student management")}
            />
          </ScrollAnimation>
        </div>
      </section>
      <section className="relative">
        <img
          src="/images/message_bg.png"
          className="agent-message-bg absolute z-0 w-12/12"
          alt="message_bg"
        />
      </section>
      <section className="z-10 relative md:container mx-auto my-16 lg:my-8 flex flex-row items-center z-10">
        <div className="container lg:w-1/2 px-8 md:px-16 lg:px-18">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <h3 className="text-3xl lg:text-3xl font-bold mb-4 leading-10">
              Give students the best opportunity
            </h3>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <p className="text-base lg:text-xl xl:text-xl leading-8">
              Once properly set up it's up to you how much time and effort you
              spend on promoting the courses. If you have an attractive link on
              your homepage or mention the program to each potential student who
              enters your offices, the more you will sell and earn in
              commission.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <E2CLearnMore
              text="Learn more our student management"
              onClick={() => console.log("Learn more our student management")}
            />
          </ScrollAnimation>
        </div>
        <div className="hidden lg:block relative lg:w-1/2 xl:w-1/2">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <img src="/images/message.png" alt="message" className="w-full" />
          </ScrollAnimation>
        </div>
      </section>
      <section className="relative z-10 mt-24 lg:mt-36">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <h2 className="text-4xl lg:text-4xl font-bold mb-4 leading-10 text-center">
            What does an enrollment include?
          </h2>
        </ScrollAnimation>
      </section>
      <section className="relative z-10">
        <div className="w-full container mx-auto flex flex-row justify-center flex-wrap">
          <ScrollAnimation
            className="w-full md:w-1/2"
            animateIn="fadeInUp"
            animateOnce={true}
          >
            <FeatureCard
              image="/images/emojione_desktop-computer.svg"
              title="Fully online self-study"
              subtitle="Expert structured English courses, tailored to your students level of knowledge"
            />
          </ScrollAnimation>
          <ScrollAnimation
            className="w-full md:w-1/2"
            animateIn="fadeInUp"
            animateOnce={true}
          >
            <FeatureCard
              image="/images/flat-color-icons_library.svg"
              title="A huge library of content"
              subtitle="Heaps of practice questions, interactive lessons, and methods"
            />
          </ScrollAnimation>
          <ScrollAnimation
            className="w-full md:w-1/2"
            animateIn="fadeInUp"
            animateOnce={true}
          >
            <FeatureCard
              image="/images/emojione_laptop-computer.svg"
              title="Live Classes"
              subtitle="Online or classroom based classes scheduled inside the platform"
            />
          </ScrollAnimation>
          <ScrollAnimation
            className="w-full md:w-1/2"
            animateIn="fadeInUp"
            animateOnce={true}
          >
            <FeatureCard
              image="/images/flat-color-icons_online-support.svg"
              title="Amazing support"
              subtitle="Access to General english support from beginner to advanced"
            />
          </ScrollAnimation>
          <ScrollAnimation
            className="w-full md:w-1/2"
            animateIn="fadeInUp"
            animateOnce={true}
          >
            <FeatureCard
              image="/images/eva_more-horizontal-outline.svg"
              title="Much more!"
              subtitle="Including Pronunciation, Grammar and Vocabulary courses"
            />
          </ScrollAnimation>
        </div>
      </section>
      <section className="relative my-16 z-10 md:container mx-auto flex flex-row items-center bg-brand-01 rounded-lg overflow-x-hidden">
        <div className="absolute agency-green-box bg-brand-01"></div>
        <div className="w-full lg:w-1/2 px-8 md:px-12 lg:px-16 py-4 md:py-8 lg:py-12">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <h3 className="text-white text-3xl lg:text-4xl font-bold mb-4 leading-10">
              Get started now
            </h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <p className="text-white text-xl lg:text-xl font-bold mb-4 leading-10">
              Become an agent in 3 easy steps.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <StepCard
              number={1}
              title="Reach out."
              subtitle="Contact us to discuss how we can best implement your online learning strategy."
            />
            <StepCard
              number={2}
              title="Build your site"
              subtitle="Create your landing page, or use our template to promote your new online learning platform."
            />
            <StepCard
              number={3}
              title="Promote your course"
              subtitle="Inform your students of how they can now study from home."
            />
            <StepCard
              number={4}
              title="There is no fourth step"
              subtitle="Just checking you’re paying attention."
            />
          </ScrollAnimation>
          <ScrollAnimation
            className="text-center lg:text-left"
            animateIn="fadeInUp"
            animateOnce={true}
          >
            <E2CButton color="primary" bgColor="white">
              Get Started Now
            </E2CButton>
          </ScrollAnimation>
        </div>
        <div className="hidden lg:block relative lg:w-1/2 xl:w-1/2">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <img
              src="/images/preview.png"
              alt="preview"
              className="ml-auto"
              style={{
                height: "auto",
                width: "600px",
              }}
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
      <section
        className="container relative mx-auto p-2 md:p-4 lg:p-8 z-10"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
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
      </section>
    </div>
  );
};

export default AgentPage;
