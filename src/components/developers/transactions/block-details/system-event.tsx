import { useState } from "react";

const SystemEvent = () => {
  const [isOpen, toggleOpen] = useState(true);
  return (
    <div className="flex flex-col lg:flex-row mt-16 gap-8 lg:gap-80" style={{ color: "#999999" }}>
      <div>
        <h1 className="text-base lg:text-xl font-semibold">System Events</h1>
        <p className="text-sm lg:text-base mt-4">No events available</p>
      </div>
      <div>
        <h1 className="text-base lg:text-xl font-semibold">Logs</h1>
        <div
          className="flex items-center h-12 py-2 gap-4 cursor-pointer"
          onClick={() => toggleOpen(!isOpen)}
        >
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.42418 5.50039C0.974176 5.50039 0.66151 5.29606 0.486176 4.88739C0.310843 4.47872 0.381842 4.11639 0.699176 3.80039L3.29918 1.20039C3.39918 1.10039 3.50751 1.02539 3.62418 0.975391C3.74084 0.925391 3.86584 0.900391 3.99918 0.900391C4.13251 0.900391 4.25751 0.925391 4.37418 0.975391C4.49084 1.02539 4.59918 1.10039 4.69918 1.20039L7.29918 3.80039C7.61584 4.11706 7.68651 4.47972 7.51118 4.88839C7.33584 5.29706 7.02351 5.50106 6.57418 5.50039H1.42418Z" fill="#999999" />
          </svg>
          <h1 className="text-sm lg:text-base">PreRuntime</h1>
        </div>
        {isOpen &&
          <div className="flex flex-col gap-4 px-4 my-4 border-l border-dashed">
            <div className="px-2 lg:px-8 py-1 items-center justify-between rounded-sm border border-dashed">
              <h1 className="text-sm font-semibold">ConsensusEngineId</h1>
              <p className="text-xs">BABE</p>
            </div>
            <div className="px-2 lg:px-8 py-1 items-center justify-between rounded-sm border border-dashed">
              <h1 className="text-sm font-semibold">Bytes</h1>
              <p className="text-xs">0xb23139fe5144d48df674a8cfa3f1501d36bbb13d532c1eb</p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default SystemEvent;