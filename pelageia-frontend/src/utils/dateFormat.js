const DateToFormat = (str) => {
  const date = str.slice(0, 10).split("-");
  const time = str.slice(11, 19);
  const result = `${date[2]}.${date[1]}.${date[0]} ${time}`;
  return <span>{result}</span>;
};

export { DateToFormat };
