import { Table as TableType, flexRender } from "@tanstack/react-table";
import {
  TableCell,
  TableContainer,
  TableRow,
  Table as MuiTable,
} from "@mui/material";

interface IDefaultTable<T extends Record<string, unknown>> {
  table: TableType<T>;
}

const DefaultTable = <T extends Record<string, unknown>>({
  table,
}: IDefaultTable<T>) => {
  return (
    <div>
      <TableContainer className="table-container">
        <MuiTable aria-labelledby="table" stickyHeader>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="table-header">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <>
            {table.getRowModel().rows.map((row, i) => (
              <TableRow key={i} hover>
                {row
                  .getVisibleCells()
                  .map((cell, j: React.Key | null | undefined) => (
                    <TableCell
                      key={j}
                      sx={{
                        fontWeight: 400,
                        height: "30px",
                        border: "1px solid rgba(0, 0, 0, 0.33)",
                        "&:first-child": {
                          pl: 2,
                        },
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
              </TableRow>
            ))}
          </>
        </MuiTable>
      </TableContainer>
    </div>
  );
};

export default DefaultTable;
