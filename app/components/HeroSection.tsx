'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="h-screen flex items-center justify-center relative overflow-hidden"
		>
			{/* Background gradients */}
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
			</div>

			{/* Main content */}
			<div className="relative z-10 text-center">
				{/* Profile picture */}
				<motion.div
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.1 }}
					className="flex justify-center mb-6"
				>
					<div className="rounded-full overflow-hidden w-[230px] h-[230px]">
						<Image
							src="/IMG_3489.jpg"
							alt="Aalvee Ahtav"
							width={230}
							height={230}
							className="object-cover"
						/>
					</div>
				</motion.div>

				{/* Name */}
				<motion.h1
					initial={{ y: 50 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
				>
					Aalvee Ahtav
				</motion.h1>

				{/* Title */}
				<motion.p
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="text-lg md:text-xl text-gray-300 mb-2 px-4"
				>
					Software Engineer
				</motion.p>

				{/* Location */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.5 }}
					className="flex items-center justify-center gap-2 text-gray-300 mb-4"
				>
					<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path
							fillRule="evenodd"
							d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
							clipRule="evenodd"
						/>
					</svg>
					<span>Dallas, Texas</span>
				</motion.div>

				{/* Bio */}
				<motion.p
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="text-sm md:text-base text-gray-400 mt-2 max-w-2xl mx-auto px-4"
				>
					Aspiring software engineer with hands-on experience building full-stack web apps, AI tools, and coding interactive
					games. Proven teamwork and customer skills from retail experience. Excited to apply my technical foundation and
					creative problem-solving in real-world software development roles.
				</motion.p>

				{/* View Resume Button - Centered */}
				<div className="flex justify-center mt-6">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.8 }}
					>
						<a
							href="https://drive.google.com/file/d/1Uuu6DNQcKMQtGOWoB4Aca0jXksHIFawM/view?usp=sharing"
							target="_blank"
							className="group flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
								<path d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8z" />
								<path d="M8 7a1 1 0 100 2h4a1 1 0 100-2H8z" />
							</svg>
							<span>View Resume</span>
						</a>
					</motion.div>
				</div>
			</div>

			{/* Down arrow animation */}
			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.6 }}
				className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
			>
				<div className="animate-bounce">
					<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</motion.div>
		</motion.section>
	);
}
