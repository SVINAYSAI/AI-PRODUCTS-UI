import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

interface Question {
  question: string;
  answer: string;
  id: number;
}

interface QuizProps {
  questions: Question[];
}

interface OptionsProps {
  // Assuming Options component takes some props, add them here.
}

interface OptionsWidget {
  widgetName: "options";
  widgetFunc: (props: OptionsProps) => JSX.Element;
}

interface QuizWidget {
  widgetName: "javascriptQuiz";
  widgetFunc: (props: QuizProps) => JSX.Element;
  props: QuizProps;
}

type Widget = OptionsWidget | QuizWidget;

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(`Hello. What do you want to learn`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props: OptionsProps) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props: QuizProps) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is closure?",
            answer:
              "Closure is a way for a function to retain access to its enclosing function scope after the execution of that function is finished.",
            id: 1,
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, JavaScript will check the prototype object.",
            id: 2,
          },
        ],
      },
    },
  ],
};  // Removed 'as const' assertion

export default config;







