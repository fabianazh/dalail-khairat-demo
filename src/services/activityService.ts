import { activities } from "@/constants/model/activities";

export const activityService = {
    getAllActivity: () => activities,
    getActivityDetail: (id: string) =>
        activities.find((item: TextContent) => item.id === id),
};
