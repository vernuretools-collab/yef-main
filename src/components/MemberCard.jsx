import { Link } from 'react-router-dom'
import { ArrowRight, Globe } from 'lucide-react'
import Badge from './Badge'

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const getInitials = (name = '') =>
  name.split(' ').filter(Boolean).map(n => n[0]).join('').toUpperCase().slice(0, 2) || '?'

export default function MemberCard({ member }) {
  const initials = getInitials(member.name)
  const category = member.industry || '—'
  const company = member.business || ''
  const headline = member.bio || ''
  const tags = Array.isArray(member.tags) ? member.tags : []
  const avatar = member.photoURL || member.avatarUrl || ''

  return (
    <article className="bg-white dark:bg-[#13192e] border border-[#E8ECF8] dark:border-[#2a3460] rounded-2xl overflow-hidden shadow-[0_6px_18px_rgba(26,43,107,0.08)] hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(26,43,107,0.12)] transition-all duration-200">
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-4">
          <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-[#F5F6FA] dark:bg-[#1c2340] border-4 border-white dark:border-[#13192e] shadow-[0_4px_12px_rgba(26,43,107,0.08)]">
            {avatar ? (
              <img
                src={avatar}
                alt={member.name || 'Member'}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="w-full h-full grid place-items-center bg-gradient-to-br from-[#D0021B] to-[#8B0112] text-white font-black text-lg">
                {initials}
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3
              className="text-lg sm:text-xl font-bold text-[#13245a] dark:text-[#F3F6FF] leading-tight truncate"
              style={{ fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif" }}
            >
              {member.name || 'Member'}
            </h3>
            <p className="mt-1 text-sm font-semibold text-[#D0021B] dark:text-[#FF8E9A] truncate">
              {category}
            </p>
            {company && (
              <p className="mt-1 text-xs text-[#667085] dark:text-[#B6C2E2] truncate">
                {company}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4 h-px bg-[#E8ECF8] dark:bg-[#22304D]" />

        <p className="mt-4 text-sm leading-6 text-[#374151] dark:text-[#DCE5F8] line-clamp-3">
          {headline || company || 'A Tamil professional building community, opportunity, and impact.'}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.slice(0, 3).map(t => (
              <Badge key={t} color="gray">
                {t}
              </Badge>
            ))}
            {tags.length > 3 && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F5F6FA] dark:bg-[#1c2340] border border-[#E8ECF8] dark:border-[#2a3460] text-[#667085] dark:text-[#B6C2E2]">
                +{tags.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center gap-2 mt-5">
          {member.website && (
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full grid place-items-center bg-[#F5F6FA] dark:bg-[#1c2340] text-[#9AA3BF] hover:text-[#1A2B6B] dark:hover:text-[#8899d4] transition-colors shrink-0"
              aria-label="Website"
            >
              <Globe size={15} />
            </a>
          )}

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full grid place-items-center bg-[#F5F6FA] dark:bg-[#1c2340] text-[#9AA3BF] hover:text-[#1A2B6B] dark:hover:text-[#8899d4] transition-colors shrink-0"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
          )}

          <Link
            to={`/members/${member.uid}`}
            className="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDE8EB] text-[#D0021B] text-sm font-bold hover:bg-[#D0021B] hover:text-white transition-all duration-150"
          >
            View <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  )
}