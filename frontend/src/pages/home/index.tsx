import React, { useEffect } from "react";
import { Card, CardError } from "../../components";
import { exampleGetData, getData } from "../../reducers/listadoSlice";
import { useAppDispatch, useAppSelector } from "../../store";

type Props = {};

const Home = ({}: Props) => {
  const dispatch = useAppDispatch();
  const { data, error } = useAppSelector(exampleGetData);

  useEffect(() => {
    dispatch(getData());
  }, []);
  if (error) {
    return <CardError />;
  }
  return (
    <div className="container mx-auto bg-gray-200">
      <h1 className="flex justify-center font-bold text-4xl text-black pt-10 pb-10 mx-auto container">
        Listado de datos
      </h1>

      <div className="divider"></div>

      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {data?.map((item, index) => (
          <div key={String(item.id + index)}>
            <Card item={item} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
