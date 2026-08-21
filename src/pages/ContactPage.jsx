import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    emailjs.send('service_id', 'template_id', templateParams, 'public_key').then(() => {
      alert('Thank you for reaching out. We will be in touch shortly.');
      reset();
    }).catch(() => {
      alert('The contact form is ready. Replace the EmailJS credentials with your own service details to enable live delivery.');
    });
  };

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-black/5 bg-gradient-to-r from-white/80 to-cream/80 p-8 shadow-luxe">
          <p className="text-sm uppercase tracking-[0.3em] text-purple">Contact</p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl">Speak with our crystal concierge</h1>
          <p className="mt-4 text-charcoal/70">We will assist you with personal guidance, gifting and ritual recommendations.</p>
          <div className="mt-8 space-y-3 text-sm text-charcoal/70">
            <a href="tel:+919999999999" className="block">Phone: +91 99999 99999</a>
            <a href="mailto:hello@soulstonix.com" className="block">Email: hello@soulstonix.com</a>
            <p>Hours: Mon – Sat 10:00 – 19:00</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-[32px] border border-black/5 bg-white/70 p-8 shadow-luxe">
          <div className="grid gap-4 sm:grid-cols-2">
            <input {...register('name')} placeholder="Name" className="rounded-full border border-black/10 bg-cream px-4 py-3 outline-none" />
            <input {...register('email')} placeholder="Email" className="rounded-full border border-black/10 bg-cream px-4 py-3 outline-none" />
          </div>
          <textarea {...register('message')} placeholder="Tell us what you are looking for" className="mt-4 min-h-36 w-full rounded-[24px] border border-black/10 bg-cream px-4 py-3 outline-none" />
          <button type="submit" className="mt-6 rounded-full bg-gradient-to-r from-gold to-purple px-6 py-3 font-semibold text-white">Send Inquiry</button>
        </form>
      </div>
    </div>
  );
}
