import { motion } from "framer-motion";
import about1 from "@/assets/about1.jpg";
import about2 from "@/assets/about2.jpg";
import about3 from "@/assets/about4.jpg";

export default function About() {
  const sections = [
    {
      title: "Aahasuvai – A Taste of Pure Spice",
      content: "Rooted in the warmth of our grandmother’s kitchen, Aahasuvai brings to life a legacy of authentic taste. With decades of love and learning, our spice blends are a tribute to tradition, carefully curated using premium spices sourced from the finest regions across India.",
      image: about1,
      reverse: false,
    },
    {
      title: "What We Stand For",
      content: "What makes Aahasuvai unique is not just the quality — it’s the process. Our raw spices are sun-dried naturally, preserving their aroma, flavor, and medicinal value. Each masala is blended with innovation and tradition, ensuring a rich, consistent taste that reminds you of home. ",
      image: about2,
      reverse: true,
    },
    {
      title: "Looking Ahead",
      content: "From everyday essentials like turmeric, cumin, and chilli powder to signature blends for South Indian specialties, Aahasuvai spices are a celebration of purity and taste. Packed with care using modern techniques, we lock in freshness and goodness without compromise. We are dedicated to bringing you a Healthy Feast, one spice at a time.",
      image: about3,
      reverse: false,
    },
  ];

  return (
<section className="py-16 bg-[#004d3d]" style={{ color: "#fff6e7" }}>
  <div className="max-w-6xl mx-auto px-6 space-y-24">
    {sections.map((sec, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: sec.reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={`flex flex-col md:flex-row ${sec.reverse ? "md:flex-row-reverse" : ""} items-center gap-10`}
      >
        <img
          src={sec.image}
          alt={sec.title}
          className="w-full md:w-1/2 rounded-2xl shadow-md object-cover h-64 md:h-96"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{sec.title}</h2>
          <p className="text-lg leading-relaxed">{sec.content}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>
  );
}
