import React from "react"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

const HomePage = () => {
  return (
    <>
      <Banner />
      <TextBlock
        id="about"
        title="What is Hackclub"
        paragraph="Hack Club CUCEK is a chapter of the international non-profit Hack Club and is a developers club at Cochin university college of engineering Kuttanad."
      >
        <a
          href="https://hackclub.com"
          target="_blank"
          rel="noreferrer"
          to="https://hackclub.com"
          smooth={true}
          duration={500}
        >
          <Button
            href="https://google.com"
            label="Tell Me More"
            cta="Visit Hack Club"
          />
        </a>
      </TextBlock>
      <TextBlockImg
        id="about"
        title="What do we do here"
        subtitle="Please don't get fooled by the name. Hacking is not the only thing happening around . We do a lot of stuff here. We just want you to grasp every teeny tiny bit of info about tech."
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="Super fast speed increases"
            title="Events"
            content="Events which helps you to learn something new "
          />
          <Perk
            img={perk2Img}
            alt="Great savings to be made"
            title="Networking"
            content="Meet like minded people and stay motivated "
          />
          <Perk
            img={perk3Img}
            alt="Super fast speed increases"
            title="Mentoring"
            content="Group of students mentors who are ready to help you "
          />
        </div>
      </TextBlockImg>
    </>
  )
}

export default HomePage
/*

      <Contact
        id="contact"
        title="Contact Startup today and see how we can help your business grow"
        subtitle="Every second counts when you're looking to get your new business started. Drop Startup a message and one of our representatives will be in contact"
      />
*/
