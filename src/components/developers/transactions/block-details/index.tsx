import BlockList from "./block-list";
import Info from "./info"
import InfoTable from "./info-table";
import SystemEvent from "./system-event";

const BlockDetails = () => {
  return (
    <>
      <Info />
      <InfoTable />
      <BlockList />
      <SystemEvent />
    </>
  )
}

export default BlockDetails;