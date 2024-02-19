import React from "react";
import { useQueryParams } from "../../Hooks/get-query";

const ItemDetail = () => {
  const param = useQueryParams();
  console.log("params",param)

  return (
    <div className="w-[50%] mx-auto my-8">
      <div className="mt-6 w-full border-4 p-4">
        <div className="relative h-auto">
          <img src={param.cardFaceImage} alt="card-image" />
        </div>
        <div className="flex justify-between my-2">
          <span className="font-bold">Name :</span>
          <span>{param.name}</span>
        </div>
        <div className="flex justify-between my-2">
          <span className="font-bold">Categories :</span>
        </div>
        <div className="flex my-4">
          <span className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg mr-2">
            {param?.categories_0}
          </span>
          <span className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg ">
            {param?.categories_1}
          </span>
        </div>
        <div>
          <span>usageInstructions{param.plainText}</span>
          <span>termsAndConditions {param.termsAndConditions}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
