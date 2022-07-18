const Dev_Quotes = [
  {
    quote: '"Your life ends when you stop"',
    dev: "- Nutnornont Chamadol, Lead Designer -",
    id: "q1",
  },
  {
    quote: "“This is a golden opportunity that we never regret doing”",
    dev: "- Nutnornont Chamadol, Lead Designer -",
    id: "q2",
  },
  {
    quote: "“This project has taught us many things”",
    dev: "- June 2022, Developers -",
    id: "q3",
  },
  {
    quote:
      "“There are unlimited opportunity out there, only the well-prepared ones could receive it.”",
    dev: "- Nutnornont Chamadol, Lead Designer -",
    id: "q4",
  },
  {
    quote: "“Placeholder”",
    dev: "- Koramist Samorapoom, Lead Frontend Developer -",
    id: "q5",
  },
  {
    quote: "“Placeholder”",
    dev: "- Koramist Samorapoom, Lead Frontend Developer -",
    id: "q6",
  },
];

const Quotes = () => {
  const max = 6;
  const min = 1;

  let presentNum = Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(presentNum);

  let jsx = (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "25px", marginTop:"35px" }}>
        {Dev_Quotes[0].quote}
      </h1>
      <h2 style={{ textAlign: "center", fontSize: "19px", marginBottom:"35px" }}>
        {Dev_Quotes[0].dev}
      </h2>
    </div>
  );

  for (let i = 0; i < Dev_Quotes.length; i++) {
    if (i === presentNum) {
      jsx = (
        <div>
          <h1 style={{ textAlign: "center", fontSize: "25px", marginTop:"35px" }}>
            {Dev_Quotes[i].quote}
          </h1>
          <h2 style={{ textAlign: "center", fontSize: "19px", marginBottom:"35px" }}>
            {Dev_Quotes[i].dev}
          </h2>
        </div>
      );
    }
    console.log(i);
  }

  return jsx;
};

export default Quotes;
