// Small, dependency-free inline icon set used across the Kelompok components.
// Keeping these local avoids forcing an icon-library install just for this page.

export function AnchorIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v13" strokeLinecap="round" />
      <path d="M5 12H2a10 10 0 0 0 10 10 10 10 0 0 0 10-10h-3" strokeLinecap="round" />
      <path d="M8 8l-2-2M16 8l2-2" strokeLinecap="round" />
    </svg>
  );
}

export function BellIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M6 8a6 6 0 0 1 12 0c0 4 1.5 5.5 2 6.5H4c.5-1 2-2.5 2-6.5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 18a2.5 2.5 0 0 0 5 0" strokeLinecap="round" />
    </svg>
  );
}

export function SailboatIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 4v10" strokeLinecap="round" />
      <path d="M12 5l5 8H7z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0 3-1.3 4.5 0" strokeLinecap="round" />
      <path d="M4 20c1.5 1.1 3 1.1 4.5 0s3-1.1 4.5 0 3 1.1 4.5 0 3-1.1 4.5 0" strokeLinecap="round" />
    </svg>
  );
}

export function ScaleIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 3v18" strokeLinecap="round" />
      <path d="M6 7h12" strokeLinecap="round" />
      <path d="M3 7l3-4 3 4-3 3-3-3Z" strokeLinejoin="round" />
      <path d="M15 7l3-4 3 4-3 3-3-3Z" strokeLinejoin="round" />
      <path d="M8 20h8" strokeLinecap="round" />
    </svg>
  );
}

export function BanknoteIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 9v.01M18 15v.01" strokeLinecap="round" />
    </svg>
  );
}

export function DotsVerticalIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="12" cy="19" r="1.6" />
    </svg>
  );
}

export function ChevronRightIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GridIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function HomeIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 11l8-7 8 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10v9h12v-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UsersIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
      <path d="M16 6.5a3 3 0 0 1 0 5.8" strokeLinecap="round" />
      <path d="M21 20c0-2.8-2-5.1-4.7-5.8" strokeLinecap="round" />
    </svg>
  );
}

export function SettingsIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="3" />
      <path
        d="M19.4 13a7.7 7.7 0 0 0 0-2l2-1.5-2-3.4-2.3.9a7.6 7.6 0 0 0-1.7-1L15 3h-6l-.4 2.4a7.6 7.6 0 0 0-1.7 1l-2.3-.9-2 3.4L4.6 11a7.7 7.7 0 0 0 0 2l-2 1.6 2 3.4 2.3-.9c.5.4 1.1.8 1.7 1L9 21h6l.4-2.5c.6-.2 1.2-.6 1.7-1l2.3.9 2-3.4-2-1.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
