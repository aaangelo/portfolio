import NavBar from "./NavBar/NavBar";

export default function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <h1>this is where the heading will go</h1>
      <NavBar onSelectItem={handleSelectItem} />
    </div>
  );
}
