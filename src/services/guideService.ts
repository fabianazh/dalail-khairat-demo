import { guides } from "@/constants/model/guides";

export const guideService = {
    getAllGuide: () => guides,
    getGuideDetail: (id: string) =>
        guides.find((item: TextContent) => item.id === id),
};
