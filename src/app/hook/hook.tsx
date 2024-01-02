import { useMutation, useQueryClient } from "@tanstack/react-query";
import { mapKeywordPut } from "../api/api";

export const usePlaceKeywordMutation = () => {
  const mutation = useMutation({
    mutationFn: mapKeywordPut,
    onSuccess: (data) => {
      console.log("성공", data);
    },
    onError: (error) => {
      console.log("에러", error);
    }
  });
  return mutation;
};
