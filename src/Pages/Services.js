import React from "react";
import Card from "../Components/Card";

const offers = [
  [
    "Generative AI Integration",
    "Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.",
  ],
  [
    "AI Trust Layer Design",
    "Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data.",
  ],
  [
    "Scalability-Focused Solutions",
    "Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity.",
  ],
  [
    "End-to-End Workflow Automation",
    "Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration.",
  ],
];

const Services = () => {
  return (
    <div className="services-container">
      <h2>What we offer</h2>
      <div className="cards-box ">
        {offers.map((item, i) => {
          return <Card key={i} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Services;
