import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    // setCategories([...categories, 'Shingeki'])
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Innput */}
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)} //este value lo envio a la funcion onAddCategory
      />
      {categories.map(
        (
          category /* Map me permite recorrer el arreglo y regresar algo nuevo */
        ) => (
          <GifGrid key={category} category={category} />
        )
      )}
    </>
  );
};
