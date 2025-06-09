'use client'; // If you're using the app/ directory

import { useState } from 'react';
import Image from 'next/image';

const items = [
	{
		title: 'SMART RETAIL',
		src: '/scenario-01.png',
	},
	{
		title: 'SMART HOSPITAL',
		src: '/logo.png',
	},
	{
		title: 'SMART CAMPUS',
		src: '/scenario-01.png',
	},
	{
		title: 'SMART BUILDING',
		src: '/logo.png',
	},
	{
		title: 'SMART PARKING',
		src: '/scenario-01.png',
	},
	
];

export default function AccordionList() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="w-full bg-gradient-to-tr from-blue-300/40 via-white/80 to-green-300/40">
			<div className="max-w-[960px] mx-auto flex">
				<div className="flex-1 flex flex-col items-center py-[40px]">
					<h1 className="text-4xl font-bold flex-1">OTHER SCENARIOS</h1>
					<div className="w-full flex-[9]">
						{items.map((item, index) => (
							<div key={index}>
								<div
									className="flex justify-between items-center cursor-pointer text-gray-700 border-b border-gray-300 py-2 font-semibold"
									onClick={() => toggle(index)}
								>
									<span>{item.title}…</span>
									<span>+</span>
								</div>
								{openIndex === index && (
									<div className="pl-4 text-sm text-gray-600 transition-all duration-300 ease-in-out">
										<p>Details for {item.title}</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
				<div className="flex-1">
					<div className="relative h-[600px] w-full overflow-hidden">
						{items.map((item, index) => (
							<div
								key={index}
								className={`absolute inset-0 transition-all duration-500 ${
									openIndex === index 
										? 'opacity-100 translate-y-0' 
										: 'opacity-0 translate-y-4'
								}`}
							>
								<Image
									src={item.src}
									alt={item.title}
									fill
									className="object-cover"
									priority={index === 0}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
