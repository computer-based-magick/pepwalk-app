import React from "react";
import LogCard from "../components/LogCard";

const Logs = ({ logs }) => {
  return (
    <div className=" bg-yellow-500 flex flex-col h-screen md:flex-row justify-center  flex-wrap gap-3 mt-0  py-20">
      {logs && logs.map((log) => <LogCard log={log} />)}
      </div>
  );
};

export default Logs;
