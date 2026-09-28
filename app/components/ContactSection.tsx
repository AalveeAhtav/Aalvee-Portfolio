import Image from 'next/image';
export default function ContactSection() {
  return <section id="contact" className="contact-section section-border" aria-labelledby="contact-title">
    <Image className="cockpit-image" src="/images/m3-cockpit.webp" alt="BMW M3 cockpit with blue ambient lighting" fill sizes="100vw" />
    <div className="contact-shade" />
    <div className="container contact-content"><p className="eyebrow"><span className="section-number">05</span> THE NEXT CHAPTER</p><h2 id="contact-title">Let’s build<br />something great<span className="blue-period">.</span></h2>
      <p>New ideas. Interesting challenges. Meaningful work.<br />I’d love to hear what you have in mind.</p>
      <div className="actions"><a className="button primary" href="mailto:aalvee6403@gmail.com">Get in touch <span aria-hidden="true">↗</span></a><a className="button secondary" href="https://github.com/AalveeAhtav" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a><a className="button secondary" href="https://linkedin.com/in/aalveeahtav" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div>
      <a className="email-link" href="mailto:aalvee6403@gmail.com">aalvee6403@gmail.com</a>
    </div><span className="contact-signoff eyebrow">SAME PASSION. NEXT POSSIBILITY.</span>
  </section>;
}
