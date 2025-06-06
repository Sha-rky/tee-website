'use client'; // If you're using the app/ directory

import { useState } from 'react';

const items = [
	'SMART RETAIL',
	'SMART HOSPITAL',
	'SMART CAMPUS',
	'SMART BUILDING',
	'SMART PARKING',
	'SMART HOSPITAL',
];

export default function AccordionList() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="w-full flex-[9]">
			{items.map((item, index) => (
				<div key={index}>
					<div
						className="flex justify-between items-center cursor-pointer text-gray-700 border-b border-gray-300 py-2 font-semibold"
						onClick={() => toggle(index)}
					>
						<span>{item}…</span>
						<span>+</span>
					</div>
					{openIndex === index && (
						<div className="pl-4 text-sm text-gray-600 transition-all duration-300 ease-in-out">
							<p>Details for {item}</p>
						</div>
					)}
				</div>
			))}
		</div>
	);
}
