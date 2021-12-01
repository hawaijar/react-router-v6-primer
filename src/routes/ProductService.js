export const listOfProducts = async () => {
  const response = await fetch("http://localhost:5001/api/products");
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
  }
  throw new Error("Invalid request!");
};
