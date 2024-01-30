import React, { useState } from 'react';

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <AccordionItem
        index={1}
        title="What is Flowbite?"
        content={
          <>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{' '}
              <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">
                get started
              </a>{' '}
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </>
        }
        isActive={activeAccordion === 1}
        onClick={() => handleAccordionClick(1)}
      />
      <AccordionItem
        index={2}
        title="Is there a Figma file available?"
        content={
          <>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the{' '}
              <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">
                Figma design system
              </a>{' '}
              based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </>
        }
        isActive={activeAccordion === 2}
        onClick={() => handleAccordionClick(2)}
      />
      <AccordionItem
        index={3}
        title="What are the differences between Flowbite and Tailwind UI?"
        content={
          <>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
              <li>
                <a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">
                  Tailwind UI
                </a>
              </li>
            </ul>
          </>
        }
        isActive={activeAccordion === 3}
        onClick={() => handleAccordionClick(3)}
      />
    </div>
  );
};

const AccordionItem = ({ index, title, content, isActive, onClick }) => {
  return (
    <>
      <h2 id={`accordion-collapse-heading-${index}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border ${
            isActive ? 'border-b-0' : ''
          } border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
          data-accordion-target={`#accordion-collapse-body-${index}`}
          aria-expanded={isActive}
          aria-controls={`accordion-collapse-body-${index}`}
          onClick={onClick}
        >
          <span>{title}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0 ${isActive ? 'rotate-0' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${index}`}
        className={`hidden ${isActive ? '' : 'hidden'} border border-${
          isActive ? 'b-0' : 't-0'
        } border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
        aria-labelledby={`accordion-collapse-heading-${index}`}
      >
        <div className="p-5">{content}</div>
      </div>
    </>
  );
};

export default Accordion;
