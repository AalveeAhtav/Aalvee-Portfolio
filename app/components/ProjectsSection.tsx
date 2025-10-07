'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Flight Plan with Cost and Time Estimation',
    description: "A Java program which will determine all possible flight plans for a person wishing to travel between two different cities by an airline (assuming a flight path exists). Also filters out the top 3 flights either by cost or time using Iterative Backtracking.",
    image: '/flights.png',
    tools: ['Java', 'Iterative Backtracking'],
	  repo: 'https://github.com/AalveeAhtav/Flight_Project',
  },
  {
    id: 2,
    title: 'Complex Navigation Game',
    description: "Navigate through a complex containing various locations. Also find the shortest path using Dijkstra’s algorithm from one location to another.",
    image: '/complex.png',
    tools: ['Java', 'Dijkstra’s Algorithm'],
	  repo: 'https://github.com/AalveeAhtav/Complex-Game',
  },
  {
    id: 3,
    title: 'CardiCrew (For BlackHeart NGO - CFG)',
    description: 'Built a fullstack website with a team during the 24hr JP Morgan Code for Good hackathon that addressed the needs of the BlackHeart NGO such as summarized policies and a community heat map.',
    image: '/blackheart.png',
    tools: ['Next.js', 'React', 'Node.js', 'Express.js','Firebase', 'Gemini API'],
	  repo: 'https://github.com/cfgtexas25/Team-27',
  },
  {
    id: 4,
    title: 'Aim Trainer',
    description: "Designed with Python utilizing its various libraries. Keeps track of hit or missed targets and shows accuracy.",
    image: '/aim_trainer.png',
    tools: ['Python'],
	  repo: 'https://github.com/AalveeAhtav/aim-trainer-python',
  },
  {
    id: 5,
    title: 'Weather App',
    description: 'Designed with React and JavaScript to show real time Weather information using OpenWeather’s API.',
    image: '/weather_app.png',
    tools: ['React', 'JavaScript', 'OpenWeather API'],
	  repo: 'https://github.com/AalveeAhtav/weather_app_react',
  },
  {
    id: 6,
    title: 'FinSight AI',
    description: `AI-powered tool to upload and analyze financial report PDFs with real-time data extraction, chatbot Q&A, and visual dashboards. Supports tables, images, and charts via Unstructured.io with optimized prompt tuning for accuracy and performance.`,
    image: '/finsight.png',
    tools: ['Python', 'Flask', 'React', 'JavaScript', 'OpenAI API', 'Next.js'],
	  repo: 'https://github.com/Aproteem/HACK-AI-2.5',
  },
  {
    id: 7,
    title: 'Spooderman Hangman Word Guessing Game',
    description: 'Terminal-based hangman game with Spiderman ASCII animations. Built in C++ with custom game logic and UI.',
    image: '/spooderman.png',
    tools: ['C++', 'ASCII Art'],
	  repo: 'https://github.com/AalveeAhtav/DallasCollege-SpoodermanGame',
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: project.id * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
          >
            <Image src={project.image} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 items-center">
                {project.tools?.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs bg-white/10 px-3 py-1 rounded-full text-white"
                  >
                    {tool}
                  </span>
                ))}

                <Link
				href={project.repo}
				target="_blank"
				rel="noopener noreferrer"
				className="text-xs px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full transition-colors ml-auto"
				>
				GitHub
				</Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
