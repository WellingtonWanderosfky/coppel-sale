"use client";
import { Builder } from "@builder.io/react";
import { Categories } from "./Categories/Categories";
import { ShelfHome } from "./ShelfHome/ShelfHome";

Builder.registerComponent(ShelfHome, {
  name: "Shelf",
  inputs: [
    { name: "titleShelf", type: "text" },
    {
      name: "collection",
      type: "text",
      friendlyName: "Id collection",
      defaultValue: "395",
    },
  ],
  image:
    "https://cdn.builder.io/api/v1/image/assets%2F849b481ef5d14906b767c2fce1e421aa%2F7d3c91c9f30d48f6a1f758b5019ce022",
});

Builder.registerComponent(Categories, {
  name: "Categories Home",
  inputs: [
    { name: "text", type: "text", friendlyName: "Title Component" },
    {
      name: "categories",
      type: "list",
      subFields: [
        {
          name: "textCard",
          type: "string",
          friendlyName: "Title Category",
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
          friendlyName: "Url Image",
        },
      ],
    },
  ],
  image:
    "https://cdn.builder.io/api/v1/image/assets%2F849b481ef5d14906b767c2fce1e421aa%2F7d3c91c9f30d48f6a1f758b5019ce022",
});
