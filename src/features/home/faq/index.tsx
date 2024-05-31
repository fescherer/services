import { SectionWrapper } from '@/components/section-wrapper'

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
    <div className="relative min-h-screen pb-16">
      <div className="custom-shape-divider-bottom-1716425581">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill" />
        </svg>
      </div>

      <SectionWrapper title="FAQ">
        <div className="my-4 space-y-6">
          {
          DATA_FAQ.map(faq => (
            <div key={faq.id} className="space-y-2 p-2 shadow-md">
              <h3 className="text-lg font-medium text-primary-label-primary">{faq.title}</h3>
              <p className="px-4 text-primary-label-secondary">{faq.text}</p>
            </div>
          ))
        }

        </div>
      </SectionWrapper>
    </div>
  )
}
