import { duas } from "@/constants/model/duas";

export const duaService = {
    getAllDua: () => duas,
    getDuaDetail: (id: string) =>
        duas.find((item: TabContent) => item.id === id),
};
