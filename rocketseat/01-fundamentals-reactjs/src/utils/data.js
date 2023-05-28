
export const data = (data, options, relative) => {
    if(relative) return new Intl.RelativeTimeFormat("pt-BR", options).format(data);
    return new Intl.DateTimeFormat('pt-BR', options).format(data)
}