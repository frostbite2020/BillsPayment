import {
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DataBill } from "../../../types/types";
import "./index.css";
import { personOrders } from "../../../utils/personOrder";
import DefaultTable from "../DefaultTable/DefaultTable";
import { getTotalOrderPrice } from "../../../utils/utils";
import { CheckRounded, CloseRounded } from "@mui/icons-material";
import { Chip } from "@mui/material";

type TypeTableBill = {
  discountEach: number;
};

const TableBill = ({ discountEach }: TypeTableBill) => {
  const columnHelperBill = createColumnHelper<DataBill>();

  const columns = [
    columnHelperBill.accessor("no", {
      header: () => <span>No</span>,
    }),
    columnHelperBill.accessor("name", {
      header: () => <span>Name</span>,
    }),
    columnHelperBill.accessor("menu", {
      header: () => <span>Menu Ordered</span>,
    }),
    columnHelperBill.accessor("totalOrderPrice", {
      header: () => <span>Total Order Price</span>,
      cell: (e) => {
        const totalOrderPrice = getTotalOrderPrice(e);
        return <span>{totalOrderPrice} Rb</span>;
      },
    }),
    columnHelperBill.accessor("discount", {
      header: () => <span>discount</span>,
      cell: () => <span>{discountEach} Rb</span>,
    }),
    columnHelperBill.accessor("totalBill", {
      header: () => <span>Total Bill</span>,
      cell: (e) => {
        const totalOrderPrice = getTotalOrderPrice(e);
        return <span>{totalOrderPrice - (discountEach || 0)} Rb</span>;
      },
    }),
    columnHelperBill.accessor("statusPay", {
      header: () => <span>Status Pay</span>,
      cell: (e) => {
        const label = e.getValue() ? (
          <div className="status-pay">
            <Chip
              icon={<CheckRounded color="success" />}
              label="Payed"
              style={{ fontWeight: 700 }}
            />
          </div>
        ) : (
          <div className="status-pay">
            <Chip
              icon={<CloseRounded color="error" />}
              label="Unpayed"
              style={{ fontWeight: 700 }}
            />
          </div>
        );
        return label;
      },
    }),
  ];

  const table = useReactTable({
    data: personOrders,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="bill-page">
      <h3>Recap masing masing</h3>
      <DefaultTable table={table} />
    </div>
  );
};

export default TableBill;
