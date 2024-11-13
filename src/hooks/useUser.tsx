import { useCallback, useEffect, useState } from "react";
import { User } from "../types/User";
import dayjs from "dayjs";

export const useUser = () => {
  const [data, setData] = useState<User>({
    "id": 0,
    "email": "",
    "username": "",
    "password": "",
    "birthday": "",
    "name": {
      "firstname": "",
      "lastname": ""
    },
    "address": {
      "city": "",
      "street": "",
      "number": 0,
      "zipcode": "",
      "geolocation": {
        "lat": "",
        "long": ""
      }
    },
    "phone": ""
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("")


  const fetchUser = useCallback((id: number) => {
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/users/${id}`, { cache: "force-cache" })
      .then(res => res.json() as Promise<Omit<User, "birthday">>)
      .then(data => {
        const _parsedData: User = {
          ...data,
          birthday: dayjs().format("YYYY-MM-DD"),
        }
        setData(_parsedData);
      })
      .catch(err => {
        console.log({ err });
        setError(err.message)
      })
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    fetchUser(1)
  }, [fetchUser]);

  return { data, isLoading, error, fetchUser };

}
