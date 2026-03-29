import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type ModuleRow = { name: string; status: string };

const columnHelper = createColumnHelper<ModuleRow>();

const columns = [
  columnHelper.accessor('name', { header: 'Stack' }),
  columnHelper.accessor('status', { header: 'Role' }),
];

const rows: ModuleRow[] = [
  { name: '@tanstack/react-query', status: 'GraphQL + RPC server state' },
  { name: '@tanstack/react-table', status: 'Catalog / admin grids' },
  { name: '@tanstack/react-form', status: 'Uploads & settings' },
  { name: '@tanstack/react-virtual', status: 'Long library lists' },
  { name: '@mysten/dapp-kit', status: 'Wallet + Sui client' },
];

export function ModuleStackTable() {
  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted/50">
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((h) => (
                <th key={h.id} className="px-3 py-2 font-medium">
                  {flexRender(h.column.columnDef.header, h.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-t border-border">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-3 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
