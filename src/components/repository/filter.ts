import { IRepository } from "./@types";

export function filteredData(data: IRepository[], searchFieldName: string) {
  return data?.filter(
    (item: IRepository) =>
      item.full_name
        ?.toString()
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(
          searchFieldName
            .toString()
            .toUpperCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        ) ||
      item.description
        ?.toString()
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(
          searchFieldName
            .toString()
            .toUpperCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        )
  );
}
