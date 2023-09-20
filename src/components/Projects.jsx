import { useScroll, useTransform, useMotionTemplate, motion } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const titleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"]
  });

  const clip = useTransform(scrollYProgress, [0.35, 0], [0,100])
  const clipPath = useMotionTemplate`inset(0 ${clip}% 0 0)`

  console.log(clip)

  const dataList = [
    {
      title: "An Amazing",
      alt: "Really Amazing",
    },
    {
      title: "Hover Effect",
      alt: "Effect",
    },
    {
      title: "That Will",
      alt: "Am I",
    },
    {
      title: "Mesmerize You",
      alt: "Right?",
    },
  ];

  return (
    <div>
      {dataList.map((data, index) => {
        return (
          <div
            key={index}
            className="font-jakarta font-black  w-screen max-w-4xl border-b border-gray-700 text-7xl relative group"
          >
            <p className="relative uppercase p-2 text-neutral-700 bg-clip-text bg-gradient-to-tr from-neutral-300 to-neutral-300 size">
              <motion.span className="text-neutral-300" style={{clipPath}} ref={titleRef}>{data.title}</motion.span>
              <span className="absolute inset-0 p-2  -z-10">{data.title}</span>
              <span className="absolute text-black transition-all ease-[cubic-bezier(0, 0.55, 0.45, 1)] duration-300 bg-amber-600 origin-center  inset-0 clip group-hover:unclipped p-2">
                {data.alt}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
