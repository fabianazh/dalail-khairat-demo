import { essentials } from "@/constants/model/essentials";

export const essentialservice = {
    getEssentialsDetail: (id: string) =>
        essentials.find((item: Essentials) => item.id === id),
};
