import { activities } from "@/constants/model";

export const activityService = {
    getAllActivity: () => activities,
    getActivityDetail: (id: string) =>
        activities.find((item: Activity) => item.id === id),
};
