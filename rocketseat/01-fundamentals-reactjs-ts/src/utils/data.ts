
export const data = (data: Date, options: Intl.DateTimeFormatOptions) => {
    return new Intl.DateTimeFormat('pt-BR', options).format(data)
}