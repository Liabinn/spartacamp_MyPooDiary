import { useMutation, useQueryClient } from "@tanstack/react-query";
import { mapKeywordPut } from "../api/api";

export const usePlaceKeywordMutation = () => {
  const mutation = useMutation({
    mutationFn: mapKeywordPut,
    onSuccess: (data: any) => {
      console.log("성공", data);
    },
    onError: (error: any) => {
      console.log("에러", error);
    }
  });
  return mutation;
};
