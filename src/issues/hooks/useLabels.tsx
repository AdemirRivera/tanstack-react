import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,

    // placeholderData: [
    //   {
    //     id: 739777675,
    //     node_id: "MDU6TGFiZWw3Mzk3Nzc2NzU=",
    //     url: "https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API",
    //     name: "Component: Component API",
    //     color: "d4c5f9",
    //     default: false,
    //   },
    //   {
    //     id: 710400704,
    //     node_id: "MDU6TGFiZWw3MTA0MDA3MDQ=",
    //     url: "https://api.github.com/repos/facebook/react/labels/Component:%20Test%20Renderer",
    //     name: "Component: Test Renderer",
    //     color: "006b75",
    //     default: false,
    //   },
    // ],
  });

  return {
    labelsQuery,
  };
};
