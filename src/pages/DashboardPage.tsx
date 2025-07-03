import DeckComponent from "../components/DeckComponent";

function DashboardPage() {
  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-center h-16 bg-gray-900">
        <span className="text-white font-bold uppercase">Dashboard</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-10">
        <DeckComponent id={"1"} />
        <DeckComponent id={"2"} />
        <DeckComponent id={"3"} />
        <DeckComponent id={"4"} />
      </div>
    </>
  );
}

export default DashboardPage;
