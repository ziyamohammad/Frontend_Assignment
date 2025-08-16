import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { DataTable } from "../components/DataTable";

interface User {
  id: number;
  name: string;
  email: string;
}

const sampleData: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
};
export default meta;

export const Default: StoryObj<typeof DataTable<User>> = {
  render: () => (
    <DataTable<User>
      data={sampleData}
      columns={[
        { header: "Name", accessor: "name" },
        { header: "Email", accessor: "email" },
      ]}
      selectable
      onRowSelect={(rows) => console.log(rows)}
    />
  ),
};