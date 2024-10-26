import { pilgrimages } from "@/constants/model/pilgrimages";

export const pilgrimageService = {
    getAllPilgrimage: () => pilgrimages,
    getPilgrimageDetail: (id: string) =>
        pilgrimages.find((item: TextContent) => item.id === id),
};
