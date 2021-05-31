import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import React from "react";

const sublinks = [
  {
    page: "Home",
    links: [
      { label: "Home 1", icon: <FaCreditCard />, url: "/home1" },
      { label: "Home 2", icon: <FaCreditCard />, url: "/home2" },
      { label: "Home 3", icon: <FaCreditCard />, url: "/home3" },
    ],
  },
  {
    page: "Exams",
    links: [
      { label: "plugins", icon: <FaBook />, url: "/products" },
      { label: "libraries", icon: <FaBook />, url: "/products" },
      { label: "help", icon: <FaBook />, url: "/products" },
      { label: "billing", icon: <FaBook />, url: "/products" },
    ],
  },
  {
    page: "Pages",
    links: [
      { label: "about", icon: <FaBriefcase />, url: "/products" },
      { label: "customers", icon: <FaBriefcase />, url: "/products" },
    ],
  },
  {
    page: "Events",
    links: [
      { label: "about", icon: <FaBriefcase />, url: "/products" },
      { label: "customers", icon: <FaBriefcase />, url: "/products" },
    ],
  },
  {
    page: "Features",
    links: [
      { label: "about", icon: <FaBriefcase />, url: "/products" },
      { label: "customers", icon: <FaBriefcase />, url: "/products" },
    ],
  },
  {
    page: "About",
    links: [
      { label: "about", icon: <FaBriefcase />, url: "/products" },
      { label: "customers", icon: <FaBriefcase />, url: "/products" },
    ],
  },
  {
    page: "Contact",
    links: [
      { label: "about", icon: <FaBriefcase />, url: "/products" },
      { label: "customers", icon: <FaBriefcase />, url: "/products" },
    ],
  },
];

export default sublinks;

// home, pages, courses, events, Features,  about, contact
