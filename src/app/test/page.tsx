"use client";
import { get, post } from "@/app/api/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
type Typedata = {
  title: string;
  content: string;
};
const TestPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["data"],
    queryFn: () => get("name")
  });

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: Typedata) => post("name", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["data"] });
    }
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data: Typedata = {
      title,
      content
    };
    mutation.mutate(data);
    // await post("name", data);
  };
  console.log("페이지", data);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      {data.map((item: any) => {
        return (
          <div key={item}>
            <p>{item.title}</p>
            <p>{item.content}</p>
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default TestPage;
