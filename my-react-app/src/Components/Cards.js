import React, { useState } from "react";
import "../css/Cards.css";

const cardData = [
  {
    iconlink: "https://skyhitmedia.com/images/Search2.png",
    imagelink: "https://skyhitmedia.com/images/seo-desk.png",
    title: "Search Engine Optimization (SEO)",
    description: "Search Engine Optimization (SEO) is crucial for improving your website’s visibility on search engines. By optimizing content, keywords, and site structure, SEO drives organic traffic to your site. Our SEO services ensure higher rankings and better online presence for your business.",
    link: "see more"
  },
  {
    iconlink: "https://skyhitmedia.com/images/Market2.png",
    imagelink: "https://skyhitmedia.com/images/franchise-desk.png",
    title: "Franchise SEO",
    description: "Franchise SEO focuses on optimizing multiple locations of a franchise for local search visibility. We ensure each franchisee ranks well in their specific geographic area, driving targeted traffic. Our Franchise SEO strategies help increase brand recognition and customer engagement across all locations.",
    link: "see more"
  },
  {
    iconlink: "https://skyhitmedia.com/images/Group2.png",
    imagelink: "https://skyhitmedia.com/images/local-seo-desk.png",
    title: "Local SEO",
    description: "Local SEO helps businesses appear in local search results, driving more customers from specific geographic areas. By optimizing Google My Business, local listings, and reviews, we enhance your visibility. Our Local SEO services ensure your business stands out to nearby customers looking for your products or services.",
    link: "see more"
  },
  {
    iconlink: "https://skyhitmedia.com/images/Settings2.png",
    imagelink: "https://skyhitmedia.com/images/technical-seo-desk.png",
    title: "Technical SEO",
    description: "Technical SEO focuses on optimizing the backend of your website for better search engine crawling and indexing. We improve site speed, mobile responsiveness, and fix technical issues to enhance user experience. Our Technical SEO services ensure your website is fully optimized for higher rankings and better performance.",
    link: "see more"
  },
  {
    iconlink: "https://skyhitmedia.com/images/Link2.png",
    imagelink: "https://skyhitmedia.com/images/link-building-desk.png",
    title: "Link Building",
    description: "Link building is a key SEO strategy that involves acquiring high-quality backlinks to boost your website’s authority. We focus on gaining relevant, credible links that improve your site's search rankings. Our link building services help increase your online visibility and drive organic traffic to your website.",
    link: "see more"
  },
  {
    iconlink: "https://skyhitmedia.com/images/Web-Design2.png",
    imagelink: "https://skyhitmedia.com/images/web-design-desktop%20v.png",
    title: "Web Design & Development",
    description: "Our Web Design & Development services focus on creating user-friendly, responsive websites that engage visitors and drive conversions. We ensure your website is visually appealing, fast, and mobile-optimized for an exceptional user experience. From design to development, we build websites that reflect your brand and meet your business goals.",
    link: "see more"
  },
  {
    iconlink: "https://skyhitmedia.com/images/Web-Design-02.png",
    imagelink: "https://skyhitmedia.com/images/coustmweb-desk.png",
    title: "Custom Website Design",
    description: "Custom website design creates unique, user-friendly websites tailored to your brand, enhancing online presence, functionality, and customer engagement.",
    link: "see more"
  },
  {
    iconlink: "https://skyhitmedia.com/images/Social-Media2.png",
    imagelink: "https://skyhitmedia.com/images/social-media-desk.png",
    title: "Social Media Marketing",
    description: "Social media marketing builds brand awareness, engages audiences, drives traffic, and boosts conversions through targeted strategies on popular platforms.",
    link: "see more"
  },
  {
    iconlink: "https://skyhitmedia.com/images/Buy2.png",
    imagelink: "https://skyhitmedia.com/images/pay-per-click-desk.png",
    title: "Pay Per Click (PPC) Management",
    description: "Drive instant results with strategic PPC management, increasing visibility, enhancing leads, and ensuring cost-effective ad performance for your business.",
    link: "see more"
  },
  {
    iconlink: "https://skyhitmedia.com/images/edit-music2.png",
    imagelink: "https://skyhitmedia.com/images/ecommerce-desk.png",
    title: "eCommerce Marketing",
    description: "Boost sales and brand visibility with eCommerce marketing strategies, including SEO, PPC, email campaigns, and social media engagement.",
    link: "see more"
  },
  {
    iconlink: "https://skyhitmedia.com/images/Market2.png",
    imagelink: "https://skyhitmedia.com/images/content-writing-desk.png",
    title: "Content Writing",
    description: "Engage your audience with compelling content writing that drives traffic, builds trust, improves SEO, and strengthens your brand’s message.",
    link: "see more"
  },
  {
    iconlink: "https://skyhitmedia.com/images/Group2.png",
    imagelink: "https://skyhitmedia.com/images/cro-desk.png",
    title: "Conversion Rate Optimization (CRO)",
    description: "Improve user experience and maximize sales with Conversion Rate Optimization (CRO), utilizing data-driven strategies to boost website performance.",
    link: "see more"
  },
  
];

const Card = ({ icon, illustration, title, description, link }) => {
  return (
    <div className="card">
      <div className="icon-section">
        <img src={icon} alt="Card Icon" className="iconlink" />
      <div className="imagelink-section">
        <img src={illustration} alt="Card imagelink" className="imagelink" />
      </div>
      </div>

      <h3 className="title">{title}</h3>
      <p className="description">
        {description}{" "}
        <link to ="/see-more"></link>
      </p>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <Card
          key={index}
          icon={card.iconlink}
          illustration={card.imagelink}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default Cards;
