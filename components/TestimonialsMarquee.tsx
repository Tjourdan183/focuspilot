"use client"
import Image from 'next/image'

type Testimonial = {
  avatar: string
  name: string
  title: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    avatar: '/avatars/alex.jpg',
    name: 'Alex MacCaw',
    title: 'Reflect',
    quote: `Cursor is the best product I've used in a while – it's an AI enabled editor.
             I just asked it to write a README for a project I've been working on –
             analyzed the code-base and worked first time.`,
  },
  {
    avatar: '/avatars/wes.jpg',
    name: 'Wes Bos',
    title: 'Internet',
    quote: 'Cursor is hands down my biggest workflow improvement in years.',
  },
  {
    avatar: '/avatars/shadcn.jpg',
    name: 'shadcn',
    title: 'Vercel',
    quote: `The most useful AI tool that I currently pay for is, hands down, Cursor.
             It's fast, autocompletes when and where you need it to… everything is
             well put together.`,
  },
  // ... weitere Cards beliebig anhängen ...
]

const doubled = [...testimonials, ...testimonials]

export default function TestimonialsMarquee() {
  return (
    <div className="relative w-full overflow-hidden bg-[#0B0B0F] py-20">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B0B0F]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B0B0F]"></div>
      <div className="flex gap-6">
        <ul className="flex flex-col gap-6 animate-scroll-slow">
          {doubled.map((t, i) => (
            <li key={`col1-${i}`} className="w-80 rounded-2xl bg-[#131316] p-6 ring-1 ring-white/5 shadow-lg">
              <p className="text-sm text-white/90">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <Image src={t.avatar} alt={t.name} width={40} height={40} className="rounded-full" />
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-white/60">{t.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-6 animate-scroll-medium" style={{ animationDelay: '-10s' }}>
          {doubled.map((t, i) => (
            <li key={`col2-${i}`} className="w-80 rounded-2xl bg-[#131316] p-6 ring-1 ring-white/5 shadow-lg">
              <p className="text-sm text-white/90">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <Image src={t.avatar} alt={t.name} width={40} height={40} className="rounded-full" />
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-white/60">{t.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-6 animate-scroll-fast" style={{ animationDelay: '-20s' }}>
          {doubled.map((t, i) => (
            <li key={`col3-${i}`} className="w-80 rounded-2xl bg-[#131316] p-6 ring-1 ring-white/5 shadow-lg">
              <p className="text-sm text-white/90">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <Image src={t.avatar} alt={t.name} width={40} height={40} className="rounded-full" />
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-white/60">{t.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 