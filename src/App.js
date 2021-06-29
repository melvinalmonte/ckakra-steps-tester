import React from "react";
import { Button, VStack } from "@chakra-ui/react";
import { Step, Steps } from "chakra-ui-steps";
import confetti from "canvas-confetti";

function App() {
  const [increase, setIncrease] = React.useState(0);
  const [isError, setIsError] = React.useState("");
  const steps = [
    { label: "Step 1" },
    { label: "Step 2" },
    { label: "Step 3" },
    {
      label: (
        <Button
          onClick={() => {
            if (increase === 4) {
              for (let i = 0; i < 5; i++) {
                confetti({
                  particleCount: 100,
                  startVelocity: 30,
                  spread: 360,
                  origin: {
                    x: Math.random(),
                    y: Math.random() - 0.2,
                  },
                });
              }
            }
          }}
        >
          {increase === 4
            ? "All steps completed! click to celebrate!"
            : "A Button in the step!"}
        </Button>
      ),
    },
  ];

  return (
    <VStack>
      <Steps orientation="vertical" activeStep={increase} state={isError}>
        {steps.map(({ label }) => (
          <Step label={label} key={label} />
        ))}
      </Steps>
      <Button
        onClick={() =>
          increase !== steps.length ? setIncrease(increase + 1) : null
        }
      >
        Mark step as complete
      </Button>
      <Button
        onClick={() => (increase !== 0 ? setIncrease(increase - 1) : null)}
      >
        Reset previous step
      </Button>
      {increase !== steps.length && (
        <Button onClick={() => setIsError(isError === "error" ? "" : "error")}>
          {isError === "error" ? "Clear error" : "Mark step as error"}
        </Button>
      )}
    </VStack>
  );
}

export default App;
