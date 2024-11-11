import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="flex flex-col items-center pb-6 px-4">
      <h1 className="text-2xl font-semibold pb-5 text-center">
        Days I <strong className="text-green-500">Code</strong>
      </h1>
      <GitHubCalendar
        username="alecodify"
        blockSize={15}
        blockMargin={5}
        color="#ff5500"
        fontSize={16}
        className=""
      />
    </div>
  );
}

export default Github;
