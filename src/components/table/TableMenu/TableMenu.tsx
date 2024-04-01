import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import "./index.css";
import { DataMenu } from "../../../types/types";
import DefaultTable from "../DefaultTable/DefaultTable";
import { PriceListMenu } from "../../../utils/pricelistMenu";

const columnHelper = createColumnHelper<DataMenu>();

const columns = [
  columnHelper.accessor("name", {
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor("price", {
    header: () => <span>Price</span>,
    cell: (e) => <span>{e.getValue()} Rb</span>,
  }),
  columnHelper.accessor("type", {
    header: () => <span>Type</span>,
  }),
];

const TableMenu = () => {
  const table = useReactTable({
    data: PriceListMenu,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="menu-page">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3>Menu</h3>
        </AccordionSummary>
        <AccordionDetails>
          <DefaultTable table={table} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TableMenu;
