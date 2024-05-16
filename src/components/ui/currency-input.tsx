import Currency from 'react-currency-input-field'

interface CurrencyInputProps {
  value: string | number | undefined
  onChange: (value: number | null | undefined) => void
  placeholder?: string
}
export function CurrencyInput({
  onChange,
  value,
  placeholder = 'Valor',
}: Readonly<CurrencyInputProps>) {
  return (
    <Currency
      className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      placeholder={placeholder}
      allowDecimals={true}
      prefix="R$"
      defaultValue={value}
      decimalsLimit={2}
      onValueChange={(_, _name, values) => onChange(values?.float)}
      intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
    />
  )
}
