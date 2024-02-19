import React, { useEffect } from "react";
import { fetchRequest } from "../../Utils/axios/fetch";
import { API_ENDPOINTS } from "../../Contstent/api-endpoints";
import { getToken } from "../../Utils/axios/token";
import Card from "../../Components/Card";

export interface CardType {
  id: string;
  name: string;
  categories: string[];
  cardFaceImage: string;
  usageInstructions: string;
  termsAndConditions: string;
}

const Home = () => {
  const [data, setData] = React.useState<CardType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const token = getToken();
        const data = await fetchRequest<[]>({
          url: `${API_ENDPOINTS.CATALOGUE}?current=1&rowCount=100&lang=EN`,
          token: token,
        });
        setData(data?.items ?? []);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 w-11/12 mx-auto">
      {data?.map((card) => (
        <Card
          id={card?.id}
          name={card?.name}
          categories={card?.categories}
          cardFaceImage={card?.cardFaceImage}
          usageInstructions={card?.usageInstructions}
          termsAndConditions={card?.termsAndConditions}
        />
      ))}
    </div>
  );
};

export default Home;
