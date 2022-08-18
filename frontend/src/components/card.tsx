import React from "react";
import moment from "moment";
import { formatter } from "../utils";
import {
  agentEnum,
  countryToFlag,
  ListIterfaces,
  stateEnum,
  stateEnumtoColor,
} from "../interfaces";

type CardProps = {
  item?: ListIterfaces;
  index?: number;
};

const Card = ({ item }: CardProps) => {
  return (
    <div className="focus:outline-none bg-white p-6 shadow-lg rounded-lg m-4">
      <div className="flex items-center border-b border-gray-200 pb-6">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img
              src={`https://flagicons.lipis.dev/flags/4x3/${
                countryToFlag[item.country]
              }.svg`}
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
        </div>
        <div className="flex items-start justify-between w-full">
          <div className="pl-3 w-full">
            <p className="focus:outline-none text-xl font-medium leading-5 text-gray-800">
              {item.full_name}
            </p>
          </div>
        </div>
      </div>
      <div className="px-2">
        <p className="focus:outline-none text-lg leading-5 pt-8 pb-2 text-stone-800">
          <b>Identificador de {agentEnum[item.agent]}</b>: {item.id}
        </p>
        <p className="focus:outline-none text-lg leading-5 pt-2 pb-2 text-stone-800">
          <b>Monto</b>: {formatter.format(item.amount)}
        </p>
        <p className="focus:outline-none text-lg leading-5 pt-2 pb-2 text-stone-800">
          <b>Fecha</b>: {moment(item.date).format("DD MMM YYYY HH:mm:ss")}
        </p>
        <p className="focus:outline-none text-lg leading-5 pt-2 pb-8 text-stone-800">
          <b>Estado de {agentEnum[item.agent]}</b>:{" "}
          <div className={`badge ${stateEnumtoColor[item.state]}`}>
            {stateEnum[item.state]}
          </div>
        </p>
      </div>
    </div>
  );
};
export default Card;
