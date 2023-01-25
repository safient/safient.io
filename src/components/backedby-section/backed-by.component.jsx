import { BackedByContainer } from "./backed-by.component.styles";

export const BackedBy = () => {
  return (
    <BackedByContainer>
      <h2> Advised and Backed By</h2>

      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        quis!
      </p> */}

      <div className="logo-container">
        <img src="/logos/graph.svg" alt="graph" />
        <img src="/logos/houbl.svg" alt="graph" />
        <img src="/logos/polygon.svg" alt="graph" />
        <img src="/logos/zilliqa.svg" alt="graph" />
        <img src="/logos/foundership.svg" alt="graph" />
        <img src="/logos/together.svg" alt="graph" />
      </div>
    </BackedByContainer>
  );
};
