const toCapitalizeFirstLetter = (str: string) =>
  str ? `${str[0].toUpperCase()}${str.slice(1)}` : str

export default toCapitalizeFirstLetter
