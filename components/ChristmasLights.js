export default function ChristmasLights() {
  const colors = [
    '#ffd166', // amber
    '#ef476f', // crimson
    '#06d6a0', // mint
    '#118ab2', // azure
    '#f7fff7', // pearl
    '#ffd166',
    '#ef476f',
    '#06d6a0',
    '#118ab2',
    '#f7fff7',
    '#ffd166',
    '#ef476f',
  ];

  return (
    <div className="lights" role="presentation">
      <div className="wire" />
      <ul className="bulbs" aria-hidden>
        {colors.map((c, i) => (
          <li
            key={i}
            className="bulb"
            style={{ ['--color']: c, animationDelay: `${(i % 5) * 0.2}s` }}
          >
            <span className="glow" style={{ ['--color']: c, animationDelay: `${(i % 7) * 0.3}s` }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
