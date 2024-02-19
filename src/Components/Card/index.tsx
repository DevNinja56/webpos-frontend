import React from "react";
import { ROUTES } from "../../Contstent/url-endpoints";
import { useLinkQuery } from "../../Hooks/link-query";

interface propTypes {
  name: string;
  id: string;
  categories: any;
  cardFaceImage: string;
  usageInstructions: string;
  termsAndConditions: string;
}


function Card({
  name,
  categories,
  cardFaceImage,
  usageInstructions,
  id,
  termsAndConditions,
}: propTypes) {
    
  const push = useLinkQuery();

  const usage = usageInstructions
  console.log("usageInstructions",usageInstructions)

  function decodeHTMLEntities(text) {
    var txt = document.createElement("textarea");
    txt.innerHTML = text;
    let htmlCode = txt.value

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlCode;
    return tempDiv.textContent || tempDiv.innerText || '';
  }
  const plainText = decodeHTMLEntities(usage);
  console.log("plan ",plainText)

  return (
    <div
      key={id}
      className="w-[32%] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <img className="rounded-t-lg w-full" src={cardFaceImage} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div className="flex my-4 justify-between">
          <span className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg mr-2">
            {categories?.[0]}
          </span>
          <span className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg ">
            {categories?.[1]}
          </span>
        </div>
        <span
          onClick={() =>
            push(ROUTES.ITEM_DETAIL, {
              name: name,
              cardFaceImage: cardFaceImage,
              categories_0: categories?.[0],
              categories_1: categories?.[1],
              plainText: plainText,
            })
          }
          className=" flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Card;
