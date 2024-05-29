'use client'

import { SectionWrapper } from '@/components/section-wrapper'
import * as Accordion from '@radix-ui/react-accordion'

const DATA_FAQ = [
  {
    id: crypto.randomUUID(),
    title: 'What makes Fennec Tales Studio unique in website creation?',
    text: 'At Fennec Tales Studio, we go beyond just building websites – we craft digital experiences that tell your brand story. We believe in the power of design to not only inform but also to evoke emotions and connect with your target audience. We leverage cutting-edge technologies like Next.js for complex applications or the user-friendly nature of WordPress for content-driven sites, ensuring your website is both visually stunning and functionally flawless. Our collaborative approach prioritizes understanding your brand values and challenges. We relish brainstorming creative solutions with you to elevate your online presence and achieve your business goals.',
  },
  {
    id: crypto.randomUUID(),
    title: 'What are the benefits of using Next.js or WordPress for my website?',
    text: 'The best platform for your website depends on your specific needs. Next.js Offers superior performance, SEO benefits, and a great developer experience for complex web applications. While   WordPress is a user-friendly platform that is perfect for creating content-driven websites and blogs.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Do you offer ongoing website maintenance?',
    text: 'Yes, we offer ongoing website maintenance plans to ensure your website stays up-to-date, secure, and functioning optimally.',
  },
  {
    id: crypto.randomUUID(),
    title: 'What is the pricing structure for your services?',
    text: 'We offer custom quotes based on the specific needs of your project. This ensures you only pay for the services you require. Contact us for a free consultation to discuss your budget and project details.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Do you offer revisions to the design work?',
    text: 'Absolutely! We believe in a collaborative approach and want you to be thrilled with the final product. We offer a set number of revisions within each project package.',
  },
  {
    id: crypto.randomUUID(),
    title: 'How can I learn more about Fennec Tales Studio?',
    text: 'We encourage you to visit our website to explore our services, portfolio, and company culture. You can also contact us directly through our website or social media channels for any further questions.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Do you offer any training or tutorials on managing a WordPress website?',
    text: 'Absolutely!  For WordPress websites, we provide basic training and resources to empower you to manage simple updates and content creation. We also offer ongoing maintenance plans that include content management assistance for added peace of mind.',
  },
  {
    id: crypto.randomUUID(),
    title: 'What if I need ongoing content creation or social media management after my website is launched?',
    text: 'We understand the importance of maintaining a dynamic online presence. While content creation and social media management aren\'t core services, we can connect you with skilled partners in our network who can handle these ongoing aspects of your digital strategy.',
  },
]

export function Faq() {
  return (
    <SectionWrapper title="FAQ">
      <Accordion.Root type="multiple" className="flex flex-col gap-3 rounded">
        {
          DATA_FAQ.map(faq => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className="mt-px overflow-hidden rounded border border-transparent data-[state=open]:border-secondary"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="group flex flex-1 items-center justify-between bg-primary p-2 text-start leading-normal text-secondary-label-primary">
                  {faq.title}
                  <span className="mui-icon-filled transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180">keyboard_arrow_down</span>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="overflow-hidden bg-primary p-2 text-sm text-primary-label-primary data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                {faq.text}
              </Accordion.Content>
            </Accordion.Item>
          ))
        }
      </Accordion.Root>

    </SectionWrapper>
  )
}
