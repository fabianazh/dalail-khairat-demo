import { trips } from "@/constants/model/trips";

export const tripService = {
    getAllTrip: () => trips,
    getTripDetail: (id: string) =>
        trips.find((item: TextContent) => item.id === id),
};
