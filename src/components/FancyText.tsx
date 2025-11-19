interface FancyTextProps {
  text: string
  weight?: number
}

export function FancyText({ text, weight = 600 }: FancyTextProps) {
  return (
    <span
      style={{
        color: "var(--color-primary, hsl(var(--primary)))",
        fontWeight: weight,
      }}
    >
      {text}
    </span>
  )
}

export default FancyText
