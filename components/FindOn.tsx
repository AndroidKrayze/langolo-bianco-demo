import { site } from "@/site.config";

const platforms = [
  {
    name: "TripAdvisor",
    href: site.tripadvisor,
    title: "L'Angolo Bianco on TripAdvisor",
    viewBox: "0 0 24 24",
    path: "M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z",
  },
  {
    name: "Deliveroo",
    href: site.deliveroo,
    title: "L'Angolo Bianco on Deliveroo",
    viewBox: "0 0 24 24",
    path: "M16.861 0l-1.127 10.584L13.81 1.66 7.777 2.926l1.924 8.922-8.695 1.822 1.535 7.127L17.832 24l3.498-7.744L22.994.636 16.861 0zM11.39 13.61a.755.755 0 01.322.066c.208.093.56.29.63.592.103.434.004.799-.312 1.084v.002c-.315.284-.732.258-1.174.113-.441-.145-.637-.672-.47-1.309.124-.473.71-.544 1.004-.549zm4.142.548c.447-.012.832.186 1.05.543.217.357.107.75-.122 1.143h-.002c-.229.392-.83.445-1.422.16-.399-.193-.397-.684-.353-.983a.922.922 0 01.193-.447c.142-.177.381-.408.656-.416Z",
  },
] as const;

type FindOnTone = "light" | "dark";

export function FindOn({
  tone = "light",
  align = "center",
}: {
  tone?: FindOnTone;
  align?: "center" | "start" | "end";
}) {
  const alignClass =
    align === "end"
      ? "justify-end md:justify-end"
      : align === "start"
        ? "justify-start"
        : "justify-center";
  const linkClass =
    tone === "dark"
      ? "text-ivory/40 hover:text-ivory/65"
      : "text-[#7a746c] hover:text-[#5a544e]";

  return (
    <ul
      className={`flex min-w-0 flex-wrap items-center gap-x-5 gap-y-3 ${alignClass}`}
    >
      {platforms.map((p) => (
        <li key={p.name} className="min-w-0">
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            title={p.title}
            className={`inline-flex max-w-full items-center gap-2 ${linkClass}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={p.viewBox}
              className="h-[22px] w-[22px] shrink-0 fill-current"
              aria-hidden
            >
              <path d={p.path} />
            </svg>
            <span className="truncate text-[0.65rem] font-semibold uppercase tracking-[0.16em]">
              {p.name}
            </span>
            <span className="sr-only"> — {p.title} (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
