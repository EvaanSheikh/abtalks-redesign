"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  ExternalLink,
} from "lucide-react";

interface Resource {
  title: string;
  type: string;
  url: string;
}

interface ResourceListProps {
  resources: Resource[];
}

export default function ResourceList({
  resources,
}: ResourceListProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -3,
      }}
      className="glass hover-card rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg"
    >
      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="rounded-full bg-violet-600/10 p-3">
          <BookOpen
            size={20}
            className="text-violet-400"
          />
        </div>

        <div>

          <h2 className="text-xl font-bold text-white">
            Learning Resources
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Helpful documentation and guides.
          </p>

        </div>

      </div>

      {/* Resources */}

      <div className="mt-6 space-y-4">

        {resources.map((resource, index) => (

          <motion.a
            key={resource.title}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.12,
            }}
            whileHover={{
              scale: 1.02,
              x: 4,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition-all duration-300 hover:border-violet-500 hover:bg-zinc-900"
          >
            <div>

              <div className="flex items-center gap-2">

                <BookOpen
                  size={16}
                  className="text-violet-400"
                />

                <h3 className="font-semibold text-white">
                  {resource.title}
                </h3>

              </div>

              <span className="mt-2 inline-flex rounded-full bg-violet-600/10 px-3 py-1 text-xs font-medium text-violet-300">
                {resource.type}
              </span>

            </div>

            <motion.div
              whileHover={{
                rotate: -8,
                scale: 1.15,
              }}
            >
              <ExternalLink
                size={22}
                className="text-zinc-500 transition-colors group-hover:text-violet-400"
              />
            </motion.div>

          </motion.a>

        ))}

      </div>
    </motion.section>
  );
}