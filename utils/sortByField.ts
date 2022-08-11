type Ord = "asc" | "desc";

export const sortByField = <T>(list: T[], field: keyof T, ord: Ord) => {
  return [...list].sort((a, b) => {
    if (a[field] > b[field]) {
      return ord === "asc" ? 1 : -1;
    }
    if (a[field] < b[field]) {
      return ord === "asc" ? -1 : 1;
    }
    return 0;
  });
};
