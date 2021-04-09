import React from "react"
import { DiGithubBadge } from "react-icons/di"
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"

export const mainMenuItems = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "/#",
    title: "about",
  },
  {
    path: "/#",
    title: "perks",
  },
  {
    path: "/#",
    title: "contact",
  },
]

export const socialMenuItems = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/company/hackclubcucek/",
    name: "LinkedIn",
  },
  {
    icon: <FaTwitter />,
    url: "https://www.twitter.com/hackclubcucek",
    name: "Twitter",
  },
  {
    icon: <DiGithubBadge />,
    url: "https://github.com/hackclub-cucek",
    name: "GitHub",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/programmermecucek/",
    name: "Instagram",
  },
]

export const footerMenuItems = [
  {
    path: "/#",
    title: "privacy",
  },
  {
    path: "/#",
    title: "cookies",
  },
]
