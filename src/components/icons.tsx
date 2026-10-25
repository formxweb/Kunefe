// Projeye özel çizilmiş, ince çizgili ikonlar.
type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 20, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 12h16.5" />
      <path d="M14 6.5 19.5 12 14 17.5" />
    </Svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </Svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7.5 3.5h-3a1 1 0 0 0-1 1.1C4.2 13 11 19.8 19.4 20.5a1 1 0 0 0 1.1-1v-3l-4-1.5-2 2a12.5 12.5 0 0 1-5.5-5.5l2-2L9.5 5Z" strokeLinejoin="round" />
    </Svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21c-4-4.6-6.5-8-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 13 16 16.4 12 21Z" strokeLinejoin="round" />
      <path d="M12 7.6v4.4M9.8 9.8h4.4" />
    </Svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3.5 5.5h17v13h-17z" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </Svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17 7h.01" strokeWidth={2.2} strokeLinecap="round" />
    </Svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15 15 5.5 5.5" />
    </Svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m5 5 14 14M19 5 5 19" />
    </Svg>
  );
}

/** Kabuğu hafif açık bir Antep fıstığı. Dekoratif motif olarak kullanılır. */
export function PistachioGlyph({ size = 64, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false" {...rest}>
      <path
        d="M32 6c11 6 17 16 17 27 0 13-7.6 25-17 25S15 46 15 33C15 22 21 12 32 6Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M32 9c-4.5 9-6 19-5 29 .7 7.5 2.4 13.6 5 18" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M33.5 13c5.4 6.2 7.6 13 7.2 20.4-.4 6.8-3 13-7.2 18.6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="0.1 3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
