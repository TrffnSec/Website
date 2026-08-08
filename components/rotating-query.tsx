"use client";

import { useEffect, useState } from "react";

const questions = ["Want to check your website's security?", "Is your company's website secure?"];

export function RotatingQuery() {
  const [text, setText] = useState("");

  useEffect(() => {
    let phrase = 0;
    let index = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = questions[phrase];
      if (!deleting) index += 1;
      else index -= 1;
      setText(current.slice(0, index));

      let delay = deleting ? 35 : 62;
      if (!deleting && index === current.length) {
        deleting = true;
        delay = 1700;
      } else if (deleting && index === 0) {
        deleting = false;
        phrase = (phrase + 1) % questions.length;
        delay = 360;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 300);
    return () => clearTimeout(timer);
  }, []);

  return <p className="rotating-query"><span>{text}</span><i aria-hidden="true" /></p>;
}
