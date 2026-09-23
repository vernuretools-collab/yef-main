import { Link } from 'react-router-dom'
import {
  Users,
  Globe,
  ShieldCheck,
  HeartHandshake,
  BookOpen,
  Languages,
  BriefcaseBusiness,
  ArrowRight,
  Sparkles,
  MessageSquareText,
  Landmark,
  Network,
  CircleCheckBig,
} from 'lucide-react'

const aboutStats = [
  { label: 'Total Members', value: '100+' },
  { label: 'Chapters', value: '3' },
  { label: 'Founded', value: '2025' },
  { label: 'Industry Community', value: 'Multi-sector' },
]

const missionValues = [
  {
    title: 'Our Mission',
    body:
      'To connect, empower and celebrate Tamil speaking professionals across every industry and every geography - creating a community where Tamil identity is a source of professional strength, not a barrier to it.',
    icon: Users,
  },
  {
    title: 'Our Vision',
    body:
      'To become the leading global platform connecting Tamil professionals and entrepreneurs to shape the future of business, economics, trade and policy.',
    icon: Globe,
  },
]

const coreValues = [
  {
    title: 'Inclusive by design',
    body:
      'Every Tamil speaking professional is welcome here - regardless of region, religion, age, gender, profession or economic background.',
    icon: HeartHandshake,
  },
  {
    title: 'Knowledge as a shared gift',
    body:
      'Professional knowledge is not a competitive advantage to hoard - it is a gift to share through mentorship, guides and discussion.',
    icon: BookOpen,
  },
  {
    title: 'Tamil as a strength',
    body:
      'Speaking Tamil is not a limitation in professional life - it is a distinct advantage. We support bilingual communication and Tamil depth.',
    icon: Languages,
  },
  {
    title: 'One community, many homes',
    body:
      'Tamil professionals live across different regions and cultures, yet remain connected through identity, values and ambition.',
    icon: Network,
  },
  {
    title: 'Respectful always',
    body:
      'Respect is at the core of how we connect, collaborate and grow together. We never compromise on care and dignity.',
    icon: ShieldCheck,
  },
  {
    title: 'Collective progress',
    body:
      'We measure success by the growth of the many, not the heights of the few. When one Tamil professional thrives, we all benefit.',
    icon: CircleCheckBig,
  },
]

const guidelines = [
  {
    title: 'Build genuine connections',
    body:
      'Approach every interaction with authenticity and professionalism. Strengthen relationships among Tamil speaking professionals worldwide.',
  },
  {
    title: 'Keep discussions constructive',
    body:
      'Debates and differing opinions are welcome, but keep them solution-oriented, thoughtful and productive for the wider community.',
  },
  {
    title: 'Support cross border collaboration',
    body:
      'Encourage global collaboration and help build stronger connections across the worldwide Tamil network.',
  },
  {
    title: 'Create opportunities for the community',
    body:
      'Share jobs, mentorships, partnerships, investments and business collaborations whenever possible.',
  },
  {
    title: 'Represent the community responsibly',
    body:
      'Communicate and collaborate in ways that reflect professionalism, leadership and mutual respect.',
  },
]

const founders = [
  {
    name: 'Founding Team',
    role: 'Tamil professionals from different regions and sectors',
    body:
      'YAAM was created by professionals who asked a simple question: why is there no professional home for Tamil speakers that understands our language, context and ambition?',
  },
  {
    name: 'Steering Council',
    role: 'Volunteer-led governance',
    body:
      'YAAM is governed by a volunteer Steering Council to keep the community open, accountable and aligned with its founding purpose.',
  },
  {
    name: 'Community Model',
    role: 'Free and bilingual',
    body:
      'Membership is free, content is bilingual, and the ecosystem is built for mentorship, industry communities, career support and events.',
  },
]

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-[#C5CCE8] dark:border-[#2a3460] bg-white dark:bg-[#13192e] p-5 text-center">
      <p className="text-3xl font-bold text-[#1A2B6B] dark:text-[#DDE3F5]">{value}</p>
      <p className="mt-2 text-sm font-semibold text-gray-700 dark:text-[#8899d4]">{label}</p>
    </div>
  )
}

function ValueCard({ title, body, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-[#C5CCE8] dark:border-[#2a3460] bg-white dark:bg-[#13192e] p-6">
      <div className="w-12 h-12 rounded-2xl bg-[#E8ECF8] dark:bg-[#1c2340] text-[#1A2B6B] dark:text-[#8899d4] grid place-items-center mb-4">
        <Icon size={20} />
      </div>
      <h3 className="font-bold text-lg text-[#1A2B6B] dark:text-[#DDE3F5]">{title}</h3>
      <p className="mt-3 text-sm text-gray-700 dark:text-[#C9D2F2] leading-relaxed">{body}</p>
    </div>
  )
}

export default function About() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FDE8EB] dark:bg-[#3d0008]/50 text-[#D0021B] text-xs font-bold uppercase tracking-[0.12em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D0021B] animate-pulse" />
              About YAAM Economic Forum
            </div>

            <h1
              className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] text-[#1A2B6B] dark:text-[#DDE3F5]"
              style={{ fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif" }}
            >
              A professional home for Tamil speakers around the world.
            </h1>

            <p className="mt-6 text-gray-900 dark:text-[#8899d4] text-base sm:text-lg leading-relaxed max-w-2xl">
              YAAM exists because Tamil professionals asked for more than a network. They wanted a space that understands language, identity and ambition as one.
            </p>

            <div className="mt-6 rounded-2xl bg-[#F5F6FA] dark:bg-[#13192e] border border-[#E8ECF8] dark:border-[#2a3460] p-5">
              <p className="text-sm font-semibold text-[#1A2B6B] dark:text-[#DDE3F5]">
                “யாம் பெற்ற இன்பம் பெறுக இவ்வையகம்”
              </p>
              <p className="mt-2 text-sm text-gray-700 dark:text-[#8899d4]">
                May the joy we have found be shared by all the world — our founding spirit.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                to="/visit-meeting"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D0021B] hover:bg-[#B00218] text-white font-bold text-sm transition-all"
              >
                Join the forum — grow <ArrowRight size={15} />
              </Link>
              <Link
                to="/chapters"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#1A2B6B] text-[#1A2B6B] dark:text-[#8899d4] font-bold text-sm hover:bg-[#1A2B6B] hover:text-white transition-all"
              >
                See chapters <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-[#C5CCE8] dark:border-[#2a3460] bg-white dark:bg-[#13192e] p-6 shadow-[0_8px_32px_rgba(26,43,107,0.12)]">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1 h-4 rounded-full bg-[#D0021B]" />
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#D0021B]">
                Quick facts about YAAM Economic Forum
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {aboutStats.map((item) => (
                <StatCard key={item.label} label={item.label} value={item.value} />
              ))}
            </div>

            <div className="mt-6 grid gap-3">
              <div className="flex items-start gap-3 rounded-2xl bg-[#F5F6FA] dark:bg-[#1c2340] p-4">
                <Landmark size={18} className="text-[#D0021B] mt-0.5" />
                <p className="text-sm text-gray-700 dark:text-[#C9D2F2]">
                  YAAM is a Tamil diaspora network and a homeland community in equal measure.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-[#F5F6FA] dark:bg-[#1c2340] p-4">
                <MessageSquareText size={18} className="text-[#D0021B] mt-0.5" />
                <p className="text-sm text-gray-700 dark:text-[#C9D2F2]">
                  Content is bilingual, membership is free, and the community is open to Tamil professionals worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E8ECF8] dark:bg-[#0f1628] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D0021B] mb-3">Our Story</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A2B6B] dark:text-[#DDE3F5]">
              Why does this global community of Tamil professionals exist?
            </h2>
            <p className="mt-4 text-gray-700 dark:text-[#8899d4] leading-relaxed">
              It began with a question from Tamil speaking professionals across different regions: why is there no professional home for us? YAAM was built as a space that speaks our language, understands our context and treats Tamil identity as a foundation.
            </p>
            <p className="mt-4 text-gray-700 dark:text-[#8899d4] leading-relaxed">
              The name comes from யாம், the classical Tamil word for “we,” reflecting the belief that a Tamil professional community grows stronger through what we build and share together.
            </p>
            <p className="mt-4 text-gray-700 dark:text-[#8899d4] leading-relaxed">
              We chose the name Economic Forum deliberately. Economics is about how people organise, exchange and create value together, and YAAM exists for exactly that among Tamil speaking professionals across finance, business, technology, law, healthcare and public policy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {founders.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl bg-white dark:bg-[#13192e] border border-[#C5CCE8] dark:border-[#2a3460] p-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#1A2B6B]/10 dark:bg-white/5 text-[#1A2B6B] dark:text-[#8899d4] grid place-items-center mb-4">
                  <Sparkles size={20} />
                </div>
                <h3 className="font-bold text-lg text-[#1A2B6B] dark:text-[#DDE3F5]">{item.name}</h3>
                <p className="text-sm font-semibold text-[#D0021B] mt-1">{item.role}</p>
                <p className="mt-3 text-sm text-gray-700 dark:text-[#C9D2F2] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D0021B] mb-3">Mission & values</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1A2B6B] dark:text-[#DDE3F5]">
          What we stand for
        </h2>

        <div className="grid lg:grid-cols-2 gap-5 mt-8">
          {missionValues.map((item) => (
            <ValueCard key={item.title} {...item} />
          ))}
        </div>

        <h3 className="mt-14 text-2xl font-bold text-[#1A2B6B] dark:text-[#DDE3F5]">
          Our core values
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {coreValues.map((item) => (
            <ValueCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-[#F5F6FA] dark:bg-[#0b1120] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D0021B] mb-3">
            Community guidelines
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A2B6B] dark:text-[#DDE3F5]">
            How we show up — every time, everywhere
          </h2>
          <p className="mt-3 text-gray-700 dark:text-[#8899d4] max-w-3xl">
            These are the commitments we make to each other: the daily choices that keep this community worth belonging to.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-8">
            {guidelines.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white dark:bg-[#13192e] border border-[#C5CCE8] dark:border-[#2a3460] p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#1A2B6B] text-white grid place-items-center text-sm font-bold">
                    {idx + 1}
                  </span>
                  <h3 className="font-bold text-lg text-[#1A2B6B] dark:text-[#DDE3F5]">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-700 dark:text-[#C9D2F2] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 pt-16">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A2B6B] via-[#111E4F] to-[#0C1535] text-white p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#FFB6C1] mb-3">
              For Tamil professionals worldwide
            </p>
            <h2 className="text-3xl sm:text-4xl text-white font-bold leading-tight">
              If you are a Tamil professional, this community was built for you.
            </h2>
            <p className="mt-3 text-[#8899d4] max-w-2xl">
              Whatever your field, wherever you are — YAAM exists to connect, empower and celebrate you.
            </p>
          </div>

          <Link
            to="/visit-meeting"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#D0021B] hover:bg-[#B00218] text-white font-bold transition-all whitespace-nowrap"
          >
            Join the community <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}