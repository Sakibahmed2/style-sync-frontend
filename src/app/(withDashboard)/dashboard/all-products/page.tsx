import DashboardTable from "@/components/ui/DashboardPage/AllProducts/Table";

const DashboardAllProductPage = async () => {
  const res = await fetch(`${process.env.BASE_URL}/products`);
  const { data } = await res.json();

  return (
    <div>
      <DashboardTable product={data} />
    </div>
  );
};

export default DashboardAllProductPage;
